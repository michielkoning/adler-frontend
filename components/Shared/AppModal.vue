<template>
  <div>
    <animation-fade-in>
      <div v-if="show" :class="$style.backdrop" />
    </animation-fade-in>
    <animation-slide-in @after-enter="afterEnter" @before-leave="beforeLeave">
      <div
        v-show="show"
        ref="modal"
        :aria-label="title"
        :class="$style.modal"
        role="dialog"
        @click.stop="closeByBackgroundClick"
        @keydown.esc="close"
      >
        <div ref="notch" :class="$style.notch">
          <article
            ref="wrapper"
            :class="[$style.wrapper, large ? $style.large : '']"
            tabindex="-1"
            role="document"
          >
            <header :class="$style.header">
              <h1 :class="$style.title">
                {{ title }}
              </h1>
              <button :class="$style.close" type="button" @click.stop="close">
                <span class="sr-only">{{ $t('close') }}</span>
                <icon-close aria-hidden="true" width="24" height="24" />
              </button>
            </header>
            <div :class="$style.content">
              <slot />
            </div>
          </article>
        </div>
      </div>
    </animation-slide-in>
  </div>
</template>

<script>
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import AnimationSlideIn from '~/components/Animations/SlideIn.vue'
import AnimationFadeIn from '~/components/Animations/FadeIn.vue'
import IconClose from '~/icons/close.svg'

export default {
  components: {
    AnimationSlideIn,
    AnimationFadeIn,
    IconClose,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    show: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      nodes: [],
      lastFocus: null,
    }
  },
  methods: {
    afterEnter() {
      this.lockBodyScoll(true)

      this.lastFocus = document.activeElement
      this.$refs.wrapper.focus()

      this.nodes = Array.from(document.querySelectorAll('*'))
      this.nodes.forEach((node) => {
        node.addEventListener('focus', this.restrictFocusOfNodesToModal)
      })
    },
    beforeLeave() {
      this.lockBodyScoll(false)
      this.nodes.forEach((node) => {
        node.removeEventListener('focus', this.restrictFocusOfNodesToModal)
      })

      // restore the focus to the last focusedbutton
      if (this.lastFocus) {
        this.lastFocus.focus()
      }
    },
    // keep the focus inside the modal
    restrictFocusOfNodesToModal(event) {
      const { wrapper } = this.$refs
      if (!wrapper.contains(event.target)) {
        event.stopPropagation()
        wrapper.focus()
      }
    },
    closeByBackgroundClick(event) {
      const { modal, notch } = this.$refs
      if (event.target === modal || event.target === notch) {
        this.close()
      }
    },
    close() {
      this.$emit('close')
    },
    lockBodyScoll(isOpen) {
      const { modal } = this.$refs
      if (isOpen) {
        disableBodyScroll(modal)
      } else {
        enableBodyScroll(modal)
      }
    },
  },
}
</script>

<style lang="postcss" module>
.backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: var(--z-modal);
}

.modal {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: var(--spacing-xs);
  z-index: var(--z-modal);
}

.notch {
  padding: var(--notch);
}

.wrapper {
  max-width: var(--container-width-md);
  margin: 3em auto 8em;
}

.large {
  max-width: var(--container-width-lg);
}

.header {
  display: flex;
  align-items: self-start;
  border-bottom: 1px solid var(--color-gray);
  padding: var(--spacing-xs) var(--spacing-s);
  background: var(--color-white);
}

.close {
  margin-top: var(--spacing-xxs);
}

.content {
  background: var(--color-white);
  padding: var(--spacing-xs) var(--spacing-s) var(--spacing-s);
}

.title {
  flex: 1 1 auto;
  padding-right: 0.25em;
  margin-bottom: 0;
}
</style>

<i18n>
{
  "nl": {
    "close": "Sluiten"
  }
}
</i18n>
