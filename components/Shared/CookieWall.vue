<script lang="ts" setup>
const cookie = useCookie("privacy");

const confirm = () => {
  cookie.value = "true";
};

const localePath = useLocalePath();
</script>

<template>
  <fade-in-animation>
    <div v-if="!cookie" class="cookie-wall">
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
              {{ $t("cookieWall.part2") }} </nuxt-link
            >.
          </div>
        </div>
        <app-button size="small" :title="$t('confirm')" @click="confirm" />
      </center-wrapper>
    </div>
  </fade-in-animation>
</template>

<style scoped>
.cookie-wall {
  color: var(--color-white);
  background: var(--color-gray-dark);
  padding-block: var(--spacing-s);
  position: fixed;
  inset: auto 0 0;
  border-top: 1px solid var(--color-white);
}

.wrapper {
  display: flex;
  align-items: self-start;
  padding: var(--spacing-xs) 0 var(--spacing-l);
}

.text {
  flex: 1 1 auto;
  padding: 0 var(--spacing-xxs) 0 0;
}
</style>
