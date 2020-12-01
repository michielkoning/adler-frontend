<template>
  <section aria-labelledby="posts-title">
    <h1 id="posts-title" class="sr-only">{{ $t('title') }}</h1>
    <archive-list :items="posts" />
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<i18n>
{
  "nl": {
    "title": "Laatste berichten"
  },
  "de": {
    "title": "Neueste Beiträge"
  },
  "en": {
    "title": "Latest posts"
  }
}
</i18n>
