<template>
  <div :class="$style.social">
    <h2>{{ $t('followUsOn') }}</h2>
    <ul :class="$style.list">
      <li :class="$style['list-item']">
        <a
          :class="$style.link"
          :href="facebookUrl"
          rel="noopener"
          target="_blank"
        >
          <icon-facebook aria-hidden="true" width="36" height="36" />
          <span class="sr-only">
            {{
              $t('followUsOnNetwork', {
                title: title,
              })
            }}
            <span lang="en">Facebook</span>
          </span>
        </a>
      </li>
      <li :class="$style['list-item']">
        <a
          :class="$style.link"
          :href="twitterUrl"
          rel="noopener"
          target="_blank"
        >
          <icon-twitter aria-hidden="true" width="36" height="36" />
          <span class="sr-only">
            {{
              $t('followUsOnNetwork', {
                title: title,
              })
            }}
            <span lang="en">Twitter</span>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import IconFacebook from '~/icons/facebook.svg'
import IconTwitter from '~/icons/twitter.svg'
import { facebookUrl, twitterUrl } from '~/data/socialMedia'
import { title } from '~/data/siteDetails'

export default {
  components: {
    IconFacebook,
    IconTwitter,
  },
  data() {
    return {
      facebookUrl,
      twitterUrl,
      title,
    }
  },
}
</script>

<style lang="postcss" module>
.list {
  @mixin list-reset;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(2.5em, 1fr));
}

.link {
  @mixin link-reset;
}
</style>

<i18n>
{
  "nl": {
    "followUsOnNetwork": "Bekijk %{title} op",
    "followUsOn": "Volg ons op"
  },
  "de": {
    "followUsOnNetwork": "Folgen Sie %{title} auf",
    "followUsOn": "PLACEHOLDER"
  },
  "en": {
    "followUsOnNetwork": "View %{title} on",
    "followUsOn": "Follow us on"
  }
}
</i18n>
