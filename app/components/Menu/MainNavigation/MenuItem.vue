<script lang="ts" setup>
  const props = withDefaults(
    defineProps<{
      title: string;
      id: number;
      link: string;
      children?: {
        title: string;
        id: number;
        link: string;
      }[];
    }>(),
    {
      children: [],
    }
  );

  const isOpen = computed(() => {
    return props.id === activeMenuId.value;
  });

  const { activeMenuId, setActiveMenuId } = useMenu();

  const showSubmenu = () => {
    setActiveMenuId(props.id);
  };

  const closeSubmenu = () => {
    setActiveMenuId(undefined);
  };

  const toggleMenu = () => {
    if (isOpen.value) {
      closeSubmenu();
    } else {
      showSubmenu();
    }
  };

  const controlId = `menu-${props.id}`;
</script>

<template>
  <li class="menu-item">
    <nuxt-link
      :to="link"
      :aria-haspopup="children.length > 0"
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
          icon="fa-solid:chevron-down"
          aria-hidden="true"
          class="icon"
        />
        <span class="sr-only">
          {{
            $t("showSubmenuFor", {
              title: title,
            })
          }}
        </span>
      </button>

      <slide-in-animation>
        <ul v-show="isOpen" :id="controlId" class="submenu">
          <li
            v-for="subItem in children"
            :key="subItem.id"
            class="submenu-item"
          >
            <nuxt-link :to="subItem.link" class="submenu-link">
              <span v-html="subItem.title" />
            </nuxt-link>
          </li>
        </ul>
      </slide-in-animation>
    </template>
  </li>
</template>

<style scoped>
  @import "~/assets/css/media-queries/media-queries.css";

  .menu-item {
    position: relative;
    font-family: var(--font-family-headings);
    font-weight: var(--font-weight-headings);

    @media (--navigation-md) {
      display: flex;
      gap: var(--spacing-xs);
      align-items: center;
    }
  }

  .menu-link {
    border-bottom: 2px solid var(--color-black);
  }

  .submenu-item:not(:last-child) {
    border-bottom: 1px solid var(--color-black);
  }

  .btn-show-submenu {
    display: block;
    position: absolute;
    width: var(--spacing-l);
    height: var(--spacing-l);
    right: calc(var(--spacing-xs) * -1);
    top: 0.75em;

    @media (--navigation-md) {
      position: relative;
      top: auto;
      right: auto;
      transform: translateY(-2px);
    }
  }

  .submenu-link,
  .menu-link {
    @mixin link-reset;

    transition: border var(--animation);
    display: block;
    padding-block: var(--spacing-xs);
  }

  .menu-link {
    font-size: var(--font-size-xl);
  }

  .submenu-link {
    font-size: var(--font-size-l);
  }

  .icon {
    transition: transform var(--transition);
  }

  .btn-show-submenu {
    &[aria-expanded="true"] {
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
      filter: drop-shadow(0 0 0.1em rgb(0 0 0 / 20%));
      background: var(--color-background);
      position: absolute;
      left: calc(-1 * var(--spacing-xs));
      top: 100%;
      white-space: nowrap;
      z-index: var(--z-main-navigation);
    }
  }
</style>
