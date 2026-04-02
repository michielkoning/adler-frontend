<template>
  <nuxt-layout>
    <div class="page">
      <the-header class="page-header sa-hidden" />
      <main
        id="content"
        class="main"
        tabindex="-1"
      >
        <nuxt-page />
      </main>
      <the-footer class="page-footer sa-hidden" />
    </div>
  </nuxt-layout>
</template>

<style lang="css" scoped>
  .page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main {
    flex: 1 1 auto;
  }
</style>
