<script lang="ts" setup>
const cookie = useCookie<string>('privacy')

const { accept } = useScriptTriggerConsent()

const confirm = () => {
  cookie.value = 'true'
  accept()
}

const localePath = useLocalePath()
</script>

<template>
  <fade-in-animation>
    <div
      v-if="!cookie"
      class="cookie-wall"
    >
      <center-wrapper>
        <div class="wrapper">
          <div class="text">
            {{ $t("cookieWall.part1") }}
            <nuxt-link
              :to="
                localePath({
                  name: 'privacy',
                })
              "
              class="link"
            >
              {{ $t("cookieWall.part2") }} </nuxt-link>.
          </div>
          <app-button
            size="small"
            :title="$t('confirm')"
            @click="confirm"
          />
        </div>
      </center-wrapper>
    </div>
  </fade-in-animation>
</template>

<style lang="css" scoped>
.cookie-wall {
  position: fixed;
  inset: auto 0 0;
  padding-block: var(--spacing-3);
  color: var(--color-white);
  background: var(--color-gray-dark);
  border-top: 1px solid var(--color-white);
}

.wrapper {
  display: flex;
  align-items: self-start;
  padding: var(--spacing-2) 0 var(--spacing-8);
}

.text {
  flex: 1 1 auto;
  padding: 0 var(--spacing-1) 0 0;
}
</style>
