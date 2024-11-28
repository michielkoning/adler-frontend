<script lang="ts" setup>
import type { Archive } from '~/types/Archive';

const props = defineProps<{
  item: Archive
}>()
const localePath = useLocalePath()

const url = localePath          ({
              name: 'arrangements-details',
              params: {
                slug: props.item.link,
              },
            })

</script>

<template>
    <clickable-list-item :to="url" class="item">
      <div class="content">
      <h2 class="title">
        <nuxt-link
          :to="url"
            class="link"
          >
        <span v-html="item.title" />
        </nuxt-link>

      </h2>
      <div v-html="item.text" />
      <price-badge v-if="item.price" :price="item.price" class="price-badge" />
    </div>
    <app-image v-bind="item.image" v-if="item.image" class="image" />

  </clickable-list-item>
</template>



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

.title {
  text-align: center;
}

.link {
  @mixin link-reset;
}

.image {
  height: 14em;
  order: -1;
}

.read-more {
  margin-top: auto;
  align-self: center;
}

.price-badge {
  position: absolute;
  top: 3em;
  right: calc(var(--spacing-s) * -1);
}
</style>
