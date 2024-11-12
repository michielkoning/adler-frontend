<script lang="ts" setup>
const { data } = await useFetch("/api/menu");
</script>

<template>
  <center-wrapper>
    <nav v-if="data" aria-labelledby="menu" class="nav">
      <h2 id="menu" class="sr-only" tabindex="-1">
        {{ $t("title") }}
      </h2>
      <div ref="menu">
        <ul v-if="data" class="menu">
          <menu-item v-for="item in data" v-bind="item" :key="item.id" />
        </ul>
        <div class="arrow" />
      </div>
    </nav>
  </center-wrapper>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

.nav {
  position: relative;
  margin-bottom: var(--spacing-m);

  @media (--navigation-md) {
    margin-bottom: 0;
  }
}

.menu {
  @mixin list-reset;

  @media (--navigation-md) {
    display: flex;
    border-top: 0;
    justify-content: space-between;
  }

  @media (--navigation-lg) {
    margin-left: var(--spacing-l);
  }
}

.arrow {
  height: 3px;
  background: var(--color-primary);
  display: none;
  position: absolute;
  bottom: 0;

  @media (--navigation-md) {
    display: block;
  }

  &.active {
    transition: all var(--animation);
  }
}
</style>
