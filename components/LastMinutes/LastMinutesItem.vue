<template>
  <li class="item">
    <div class="content">
      <dl>
        <dt v-if="dateFrom && dateUntill">
          <icon-calendar
            class="icon"
            aria-hidden="true"
            width="20"
            height="20"
          />
          <span class="sr-only">{{ $t('date') }}</span>
        </dt>
        <dd v-if="dateFrom && dateUntill">
          {{ $d(dateFrom, 'short') }}
          &dash;
          {{ $d(dateUntill, 'short') }}
        </dd>
        <dt>
          <icon-family class="icon" aria-hidden="true" width="20" height="20" />
          <span class="sr-only">{{ $t('totalPersons') }}</span>
        </dt>
        <dd>
          {{ $tc('adults', item.lastMinute.totalPersons.adults) }} &dash;
          {{ $tc('kids', item.lastMinute.totalPersons.kids) }}
        </dd>

        <dt v-if="item.lastMinute.room">
          <icon-bed class="icon" aria-hidden="true" width="20" height="20" />
          <span class="sr-only">{{ $t('room') }}</span>
        </dt>
        <dd v-if="item.lastMinute.room">
          <nuxt-link :to="item.lastMinute.room.uri">
            {{ item.lastMinute.room.title }}
          </nuxt-link>
        </dd>

        <dt>
          <icon-price class="icon" aria-hidden="true" width="20" height="20" />
          <span class="sr-only">{{ $t('price') }}</span>
        </dt>
        <dd v-if="item.lastMinute.price">
          {{ item.lastMinute.price }}
        </dd>
      </dl>
      <div class="services">
        <h3>{{ $t('services') }}</h3>
        <ul v-if="item.servicesLastMinute.edges.length">
          <li
            v-for="service in item.servicesLastMinute.edges"
            :key="service.node.name"
          >
            {{ service.node.name }}
          </li>
        </ul>
      </div>
      <book-lastminute :last-minute="item" />
    </div>
    <image-archive :image="item.featuredImage" class="image" />
  </li>
</template>

<script>
import IconBed from '~/icons/bed.svg'
import IconCalendar from '~/icons/calendar.svg'
import IconFamily from '~/icons/family.svg'
import IconPrice from '~/icons/price.svg'

export default {
  components: {
    IconBed,
    IconCalendar,
    IconFamily,
    IconPrice,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    dateFrom() {
      return this.convertToDate(this.item.lastMinute.dates.dateFrom)
    },
    dateUntill() {
      return this.convertToDate(this.item.lastMinute.dates.dateUntill)
    },
  },
  methods: {
    convertToDate(value) {
      if (!value) {
        return null
      }
      const [day, month, year] = value.split('/')
      return new Date(`${year}-${month}-${day}`)
    },
  },
}
</script>

<style lang="postcss" scoped>
.item {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid transparent;

  &:focus-within,
  &:hover {
    border-color: var(--color-primary);
  }
}

.content {
  background: var(--color-white);
  padding: var(--spacing-m);
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}

.link {
  @mixin link-reset;
}

.image {
  height: 14em;
  order: -1;
}

.price-badge {
  position: absolute;
  top: 3em;
  right: calc(var(--spacing-s) * -1);
}

.persons {
  margin-bottom: 1em;
  font-weight: var(--font-weight-bold);
}

.btn {
  @mixin btn;
  @mixin btn-primary;
  @mixin btn-small;

  margin-top: auto;
  align-self: center;
  padding-top: 0.1em;
  padding-bottom: 0.1em;

  &:hover {
    @mixin btn-primary-hover;
  }
}

dl {
  display: grid;
  gap: 0.25em;
  margin-bottom: 1em;
  grid-template-columns: 1.75em auto;
}

dt {
  overflow: hidden;
}

.icon {
  translate: 0 0.1em 0;
}
</style>
