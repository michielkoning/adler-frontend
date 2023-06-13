<template>
  <li class="item">
    <div class="content">
      <h2 class="title">
        {{ item.title }}
      </h2>
      <div v-if="dateFrom && dateUntill" class="dates">
        Van
        {{ $d(dateFrom, 'short') }}
        tot
        {{ $d(dateUntill, 'short') }}
      </div>

      <div class="persons">
        Voor {{ item.lastMinute.totalPersons.adults }} volwassenen en
        {{ item.lastMinute.totalPersons.kids }} kinderen
      </div>
      <div class="services">
        <h3>Voorzieningen</h3>
        <ul v-if="item.servicesLastMinute.edges.length">
          <li
            v-for="service in item.servicesLastMinute.edges"
            :key="service.node.name"
          >
            {{ service.node.name }}
          </li>
        </ul>
      </div>
      <span class="btn" aria-hidden="true">
        {{ $t('btn') }}
      </span>
    </div>
    <price-badge
      v-if="item.lastMinute.price"
      :price="item.lastMinute.price"
      class="price-badge"
    />
    <image-archive :image="item.featuredImage" class="image" />
  </li>
</template>

<script>
export default {
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
</style>

<i18n>
{
  "nl": {
    "btn": "Nu aanvragen"
  },
  "de": {
    "btn": "Jetzt anfragen"
  },
  "en": {
    "btn": "Book now"
  }
}
</i18n>
