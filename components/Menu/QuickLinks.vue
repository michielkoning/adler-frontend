<template>
  <div>
    <h2>Handige links</h2>

    <ul :class="$style.list">
      <li :class="$style['list-item']">
        <menu-item :title="$t(`home`)" :url="localePath('/')" />
      </li>

      <li :class="$style['list-item']">
        <menu-item
          :title="$t(`hotel`)"
          :url="localePath('/kinderhotel-bregenzerwald')"
        />
      </li>
      <li :class="$style['list-item']">
        <menu-item
          :title="$t(`arrangements`)"
          :url="localePath({ name: 'arrangements' })"
        />
      </li>
      <li :class="$style['list-item']">
        <menu-item :title="$t(`rooms`)" :url="localePath({ name: 'rooms' })" />
      </li>
      <li :class="$style['list-item']">
        <menu-item :title="$t(`blog`)" :url="localePath({ name: 'blog' })" />
      </li>
      <li :class="$style['list-item']">
        <menu-item
          :title="$t(`contact`)"
          :url="localePath({ name: 'contact' })"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import MenuItem from '~/components/Menu/MenuItem.vue'

export default {
  components: {
    MenuItem,
  },
}
</script>

<style lang="postcss" module>
.list {
  @mixin list-reset;

  & > .list-item {
    margin-bottom: var(--spacing-xxs);
  }
}
</style>
