<script lang="ts" setup>
const { title, facebookUrl, instagramUrl } = useAppConfig();
</script>

<template>
  <div class="social">
    <h2>{{ $t("followUsOn") }}</h2>
    <ul class="list">
      <li class="list-item">
        <a class="link" :href="facebookUrl" rel="noopener" target="_blank">
          <app-icon icon="adler:facebook" />
          <span class="sr-only">
            {{
              $t("followUsOnNetwork", {
                title: title,
              })
            }}
            <span lang="en">Facebook</span>
          </span>
        </a>
      </li>
      <li class="list-item">
        <a class="link" :href="instagramUrl" rel="noopener" target="_blank">
          <app-icon icon="adler:instagram" />
          <span class="sr-only">
            {{
              $t("followUsOnNetwork", {
                title: title,
              })
            }}
            <span lang="en">Instagram</span>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;

  display: flex;
  gap: 1em;
}

.link {
  @mixin link-reset;
}
</style>
