<script lang="ts" setup>
const { address } = useAppConfig()

const emailLink = computed(() => {
  return `mailto:${encodeURIComponent(address.emailAddress)}`
})
</script>

<template>
  <a
    class="adler-wa-btn"
    href="https://wa.me/436805558039"
    target="_blank"
    rel="noopener"
  >
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    ><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3z" /></svg>
    <span class="adler-wa-label">Chatten</span>
  </a>
</template>

<style lang="css" scoped>
  .adler-wa-btn {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.2;
    color: #fff !important;
    text-decoration: none !important;
    background: #25d366;
    border-radius: 4px;
  }

  .adler-wa-btn:hover {
    background: #1ebe5b;
  }

  .adler-wa-btn svg {
    flex: none;
    inline-size: 18px;
    block-size: 18px;
    fill: #fff;
  }
</style>
