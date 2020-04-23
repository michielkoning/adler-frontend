<template>
  <li
    :class="[$style['menu-item'], { 'has-popup': hasChildren }]"
    class="menu-item"
    @mouseover="mouseover"
    @mouseout="mouseout"
  >
    <!-- eslint-disable vue/no-v-html -->
    <nuxt-link
      :to="url"
      :aria-haspopup="hasChildren"
      :class="$style['menu-link']"
      class="menu-link"
      v-html="title"
    />
    <!-- eslint-enable vue/no-v-html -->

    <button
      v-if="hasChildren"
      :aria-expanded="isOpen ? 'true' : 'false'"
      :class="$style['btn-show-submenu']"
      @click="toggleMenu"
    >
      <icon-chevron-down
        aria-hidden="true"
        width="16"
        height="16"
        :class="$style['icon-chevron-down']"
      />
      <span class="sr-only">
        {{
          $t('showSubmenuFor', {
            title: title,
          })
        }}
      </span>
    </button>
    <template v-if="hasChildren">
      <animation-slide-in>
        <ul v-show="isOpen" :class="$style.submenu">
          <li
            v-for="subItem in children.edges"
            :key="subItem.node.id"
            :class="$style['menu-item']"
            class="menu-item"
          >
            <!-- eslint-disable vue/no-v-html -->
            <nuxt-link
              :to="subItem.node.relativeUrl"
              :class="$style['submenu-link']"
              class="submenu-link"
              v-html="subItem.node.title"
            />
            <!-- eslint-enable vue/no-v-html -->
          </li>
        </ul>
      </animation-slide-in>
    </template>
  </li>
</template>

<script>
import IconChevronDown from '~/icons/chevron-down.svg'
import AnimationSlideIn from '~/components/Animations/SlideIn.vue'

export default {
  components: {
    IconChevronDown,
    AnimationSlideIn,
  },
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    children: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isOpen: false,
      timer: null,
    }
  },
  computed: {
    hasChildren() {
      return this.children?.edges?.length
    },
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    mouseover() {
      if (window.screen.width < 768) return
      this.isOpen = true
      clearTimeout(this.timer)
    },
    mouseout() {
      if (window.screen.width < 768) return
      this.timer = setTimeout(() => {
        this.isOpen = false
      }, 250)
    },
  },
}
</script>

<style lang="postcss" module>
.submenu {
  @mixin list-reset;

  margin-left: var(--spacing-m);

  @media (--navigation-md) {
    filter: drop-shadow(0 0 0.1em rgba(0, 0, 0, 0.2));
    background: var(--color-bg-page);
    position: absolute;
    left: calc(-1 * var(--spacing-xs));
    top: calc(100% + 0.1em);
    margin-left: 0;
    padding: 0 var(--spacing-xs);
    white-space: nowrap;
  }
}

.menu-item {
  position: relative;
  display: flex;
}

.title {
  transition: box-shadow 0.1s ease-out;
  padding: var(--spacing-xxs) 0;
}

.menu-link {
  font-size: 1.2em;
  border-bottom: 3px solid transparent;
  flex: 1 1 auto;

  &.nuxt-link-active[aria-haspopup='true'],
  &.nuxt-link-exact-active {
    border-bottom-color: var(--color-black);
  }

  @media (--navigation-md) {
    padding: 0;
    border-bottom: 0;
  }

  &[aria-haspopup='true'] {
    padding-right: var(--spacing-xxs);
  }
}

.submenu-link {
  font-size: 1.1em;
  border-bottom: 2px solid transparent;

  &.nuxt-link-exact-active {
    border-bottom-color: var(--color-black);
  }

  @media (--navigation-md) {
    padding: var(--spacing-xxs) 0;
    border-bottom: 0;
  }
}

.submenu-link,
.menu-link {
  @mixin link-reset;

  align-items: center;
  display: flex;
  position: relative;
  text-decoration: none;
  line-height: 1.1;
  padding: var(--spacing-xs) 0;
  border-top: 1px solid var(--color-black);

  &:hover {
    text-decoration: none;

    & .title {
      box-shadow: 0 2px 0 0 currentColor;
    }
  }

  @media (--navigation-md) {
    border-top: 0;
  }
}

.btn-show-submenu {
  display: block;

  @media (--navigation-md) {
    margin: var(--spacing-xxs) 0 0 var(--spacing-xxs);
  }
}
</style>

<i18n>
{
  "nl": {
    "showSubmenuFor": "Toon submenu voor %{title}"
  },
  "de": {
    "showSubmenuFor": "Untermenü anzeigen für %{title}"
  },
  "en": {
    "showSubmenuFor": "Show submenu for %{title}"
  }
}
</i18n>
