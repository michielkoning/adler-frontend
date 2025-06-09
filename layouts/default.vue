<script setup lang="ts">
const { title } = useAppConfig();
const head = useLocaleHead();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${title}` : title;
  },
});
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
      <Head>
        <Title>{{ title }}</Title>
        <Link
          v-for="link in head.link"
          :id="link.hid"
          :key="link.hid"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />

        <Meta
          v-for="meta in head.meta"
          :id="meta.hid"
          :key="meta.hid"
          :property="meta.property"
          :content="meta.content"
        />
      </Head>
      <Body>
        <nuxt-pwa-assets />
        <nuxt-route-announcer />
        <div class="page">
          <!-- <header-top class="page-header-top sa-hidden" /> -->
          <the-header class="page-header sa-hidden" />
          <main id="content" class="main" tabindex="-1">
            <slot />
          </main>
          <the-footer class="page-footer sa-hidden" />
        </div>
      </Body>
    </Html>
  </div>
</template>

<style lang="postcss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1 1 auto;
}
</style>
