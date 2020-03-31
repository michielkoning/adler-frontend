<template>
  <transition name="fade">
    <div
      ref="modal"
      :aria-label="title"
      data-qa="modal"
      role="dialog"
      class="modal"
    >
      <article ref="wrapper" tabindex="0" class="wrapper" role="document">
        <header>
          <h2 id="modal" class="title" data-qa="modal-title">
            {{ title }}
          </h2>
        </header>
        <div class="content" data-qa="modal-content">
          <slot />
        </div>
      </article>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      nodes: null,
    }
  },
  mounted() {
    document.body.style.overflow = 'hidden'

    this.nodes = Array.from(document.querySelectorAll('*'))
    this.nodes.forEach((node) => {
      node.addEventListener('focus', this.restrictFocusOfNodesToModal)
    })

    // set the focus in the modal as soon as its visible
    this.$refs.modal.addEventListener('transitionend', this.setFocusOnModal)
  },
  beforeDestroy() {
    document.body.style.overflow = null
    this.nodes.forEach((node) => {
      node.removeEventListener('focus', this.restrictFocusOfNodesToModal)
    })
    this.$refs.modal.removeEventListener('transitionend', this.setFocusOnModal)
  },
  methods: {
    // keep the focus inside the modal
    restrictFocusOfNodesToModal(event) {
      const { wrapper } = this.$refs
      if (!wrapper.contains(event.target)) {
        event.stopPropagation()
        wrapper.focus()
      }
    },
    setFocusOnModal(event) {
      if (event.propertyName === 'opacity') {
        this.$refs.wrapper.focus()
      }
    },
  },
}
</script>

<style scoped lang="postcss">
.modal {
  text-align: left;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 19;
  background-color: rgba(255, 255, 255, 0.5);
  padding: var(--gutter);
  color: var(--black);
}

.wrapper {
  /* max-width: var(--container-width-md); */
  max-width: var(--container-width-lg);
  position: relative;
  transition: transform 0.2s ease-out;
  background: var(--color-white);
  margin: 3em auto 1em;
}

header {
  background: #424242;
  color: var(--color-white);
  display: flex;
  align-items: self-start;
  padding: 1em;
}

.title {
  flex: 1 1 auto;
  padding-right: 0.25em;
  margin: 0;
}

.content {
  padding: 1em;
}

.close {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-white);
  border-radius: 50%;
  width: 2em;
  height: 2em;
  flex: 0 0 auto;
  color: var(--text-color);

  &:hover {
    background: var(--gray-lighter);
  }
}

/* stylelint-disable */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;

  & .wrapper {
    transform: translateY(0);
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;

  & .wrapper {
    transform: translateY(-3em);
  }
}
/* stylelint-enable */
</style>
