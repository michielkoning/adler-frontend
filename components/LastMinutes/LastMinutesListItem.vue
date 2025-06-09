<script lang="ts" setup>
import type { LastMinute } from "~/types/LastMinute";

defineProps<LastMinute>();
</script>

<template>
  <li class="item">
    <div class="image-wrapper">
      <app-badge
        v-if="isSold"
        :text="$t('sold')"
        class="badge"
        :small-text="true"
      />
      <app-image v-if="image" v-bind="image" class="image" />
    </div>

    <dl class="meta-wrapper">
      <template v-if="dates.from && dates.until">
        <dt>
          <app-icon icon="fa6-solid:calendar" class="icon" />
          <span class="sr-only">{{ $t("date") }}</span>
        </dt>
        <dd>
          {{ $d(dates.from, "short") }}
          &dash;
          {{ $d(dates.until, "short") }}
        </dd>
      </template>
      <dt>
        <app-icon icon="fa6-solid:bed" class="icon" />
        <span class="sr-only">{{ $t("room") }}</span>
      </dt>

      <dd>
        <nuxt-link :to="room.slug">
          {{ room.content.title }}
        </nuxt-link>
      </dd>
    </dl>
    <div class="prices-wrapper">
      <div v-if="prices.length" class="prices">
        <h3>{{ $t("prices") }}</h3>
        <ul class="prices-list">
          <li v-for="price in prices" :key="price.price" class="price-details">
            <dl class="prices-definitions">
              <dt>
                <app-icon icon="adler:family" class="icon" />
                <span class="sr-only">{{ $t("totalPersons") }}</span>
              </dt>
              <dd>
                {{ $t("adults", price.adults) }} &dash;
                {{ $t("kids", price.kids) }}
              </dd>
              <dt>
                <app-icon icon="fa6-solid:euro-sign" class="icon" />
                <span class="sr-only">{{ $t("totalPersons") }}</span>
              </dt>
              <dd>{{ price.price }}</dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
    <div class="services-wrapper">
      <div v-if="room.services.length" class="services">
        <h3>{{ $t("services") }}</h3>
        <ul>
          <li v-for="service in room.services" :key="service">
            {{ service }}
          </li>
        </ul>
      </div>
    </div>
    <div class="btn-wrapper">
      <app-button v-if="!isSold" :title="$t('bookNow')" class="btn" />
    </div>
  </li>
</template>

<style lang="postcss" scoped>
.item {
  position: relative;
  display: grid;
  gap: 1em;
  grid-template-rows: subgrid;
  grid-row: span 5;
  background: var(--color-white);
  padding-bottom: var(--spacing-m);

  &:focus-within,
  &:hover {
    outline: 2px solid var(--color-primary);
  }
}

.meta-wrapper,
.services-wrapper,
.prices-wrapper,
.btn-wrapper {
  padding-inline: var(--spacing-m);
}

.link {
  @mixin link-reset;
}

.image {
  height: 14em;
}

.badge {
  position: absolute;
  top: 3em;
  right: calc(var(--spacing-s) * -1);
}

.persons {
  margin-bottom: 1em;
  font-weight: var(--font-weight-bold);
}

dl {
  display: grid;
  gap: 0.25em;
  grid-template-columns: 1.75em auto;
}

.prices-definitions {
  margin-bottom: 0;
}

dt {
  overflow: hidden;
}

.icon {
  width: 1.25em;
  translate: 0 0.1em;
}

.price-details:not(:last-child) {
  padding-bottom: 0.5em;
  margin-bottom: 0.5em;
  border-bottom: 1px solid var(--color-gray-light);
}

.prices-list {
  @mixin list-reset;
}

.btn {
  width: 100%;
}
</style>
