<template>
  <div class="social">
    <h2>Follow us on</h2>
    <ul class="social__list">
      <li class="social__list-item">
        <a
          class="social__link"
          :href="socialMedia.facebookUrl"
          rel="noopener"
          target="_blank"
          title="Follow Adler on Facebook"
        >
          <icon-facebook aria-hidden="true" width="24" height="24" />
          <span class="sr-only">
            {{ $t('followOn', { title, network: 'Facebook' }) }}
          </span>
        </a>
      </li>
      <li class="social__list-item">
        <a
          class="social__link"
          :href="socialMedia.twitterUrl"
          rel="noopener"
          target="_blank"
          title="Follow Adler on"
        >
          <icon-twitter aria-hidden="true" width="24" height="24" />
          <span class="sr-only">
            {{ $t('followOn', { title, network: 'Twitter' }) }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import IconFacebook from '@/icons/facebook.svg'
import IconTwitter from '@/icons/twitter.svg'
import socialMedia from '~/data/socialMedia.json'

export default {
  components: {
    IconFacebook,
    IconTwitter,
  },
  data() {
    return {
      socialMedia,
    }
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(2em, 1fr));
}

.link {
  @mixin link-reset;
}
</style>
