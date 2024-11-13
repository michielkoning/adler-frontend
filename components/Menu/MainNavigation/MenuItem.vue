<script lang="ts" setup>
const props = defineProps<{
  title: string,
  id: number;
  link: string;
  children: {
    title: string,
    id: number;
    link: string;
  }[]
}>()

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const controlId = `menu-${props.id}`
</script>

<template>
  <li class="menu-item">
    <nuxt-link
      :to="link"
      :aria-haspopup="children.length"
      class="menu-link"
    >
      <span v-html="title" />
    </nuxt-link>
    <template v-if="children.length">
    <button
        :aria-expanded="isOpen"
        :aria-controls="controlId"
        class="btn-show-submenu"
        @click="toggleMenu"
      >
        <app-icon
          icon="chevron-down"
          aria-hidden="true"
          :width="16"
          :height="16"
          class="icon"
        />
        <span class="sr-only">
          {{
            $t('showSubmenuFor', {
              title: title,
            })
          }}
        </span>
      </button>

      <slide-in-animation>
        <ul v-show="isOpen" class="submenu" :id="controlId">
          <li
            v-for="subItem in children"
            :key="subItem.id"
            class="menu-item"
          >
          <nuxt-link
              :to="subItem.link"
              class="menu-link"
            >
            <span v-html="subItem.title" />
          </nuxt-link>
        </li>
      </ul>
    </slide-in-animation>
  </template>
  </li>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

.menu-item {
  position: relative;
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-headings);
  display: flex;
  gap: var(--spacing-s);
}


.submenu-link,
.menu-link {
  @mixin link-reset;

  font-size: var(--font-size-xl);
  border-bottom-width: 2px;

  &[aria-haspopup='true'] {
    padding-right: var(--spacing-m);
  }
}

.icon {
  transition: transform var(--transition);
}


.btn-show-submenu {
  &[aria-expanded='true'] {
    .icon {
      transform: rotate(-180deg);

      @media (--navigation-md) {
        transform: rotate(0deg);
      }
    }
  }
}

.submenu {
  @mixin list-reset;

  padding-left: var(--spacing-m);
  border-bottom: 2px solid var(--color-black);

  @media (--navigation-md) {
    border-bottom: 0;
    padding-left: 0;
    filter: drop-shadow(0 0 0.1em rgba(0, 0, 0, 0.2));
    background: var(--color-background);
    position: absolute;
    left: calc(-1 * var(--spacing-xs));
    top: 100%;
    white-space: nowrap;
    z-index: var(--z-main-navigation);
  }
}
</style>
