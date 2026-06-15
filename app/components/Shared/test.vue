<script lang="ts" setup>

const id = useId();


defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div>
    <button :interestfor="id" :popovertarget="id" v-bind="$attrs">
      TestTestTestTestTest
    </button>
    <div :id popover="hint">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nisi nostrum debitis, odio a laboriosam libero expedita obcaecati consequuntur alias eum qui, possimus quo repudiandae. Molestias ut provident dolores labore.
    </div>
    </div>
</template>



<style lang="css" scoped>
button {
  interest-delay: 0s 0.25s;
}

[popover] {
  position: fixed;
  max-width: 20rem;
  padding: var(--spacing-2) var(--spacing-3);
  margin: var(--spacing-2) var(--spacing-4);
  position-area: top;
  position-try-fallbacks: flip-block;
  background: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  opacity: 0;
  translate: 0 -1em;
  transition:
    opacity var(--transition),
    translate var(--transition),
    overlay var(--transition) allow-discrete,
    display var(--transition) allow-discrete;
  transition-duration: 0s;

  &:popover-open {
    opacity: 1;
    translate: 0 0;
    transition-duration: var(--transition-duration);

    @starting-style {
      opacity: 0;
      translate: 0 -1em;
    }
  }
}
</style>
