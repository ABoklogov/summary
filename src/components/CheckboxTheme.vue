<template>
  <form>
    <input id="dark-mode" class="toggle" :class="{ 'toggle--checked': themeBlack }" type="checkbox" name="Dark mode" role="switch"
      v-model="themeBlack">
    <label for="dark-mode" class="sr">Dark Mode</label>
  </form>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useViewStore } from '@/stores/view';
const { themeBlack } = storeToRefs(useViewStore());
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.toggle:before,
.toggle:after {
  background: $white;
}

form,
.toggle {
  position: relative;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sr,
.toggle:before,
.toggle:after {
  position: absolute;
}

.toggle:before,
.toggle:after {
  transition: transform $duration;
}

.toggle:before,
.toggle--checked.toggle:after {
  transition-timing-function: ease-out;
}

.sr {
  top: 0;
  left: 0;
}

.sr,
.toggle {
  overflow: hidden;
}

.sr {
  clip: rect(1px, 1px, 1px, 1px);
  color: transparent;
  width: 1px;
  height: 1px;
}

.toggle {
  background: currentColor;
  border-radius: 0.75em;
  cursor: pointer;
  width: 3em;
  height: 1.5em;
  -webkit-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
}

.toggle:before,
.toggle:after {
  border-radius: 50%;
  content: "";
  display: block;
  top: 0.25em;
  left: 0.25em;
  width: 1em;
  height: 1em;
}

.toggle:before,
.toggle--checked.toggle:after {
  transition-delay: 0s;
}

.toggle--checked.toggle:before,
.toggle:after {
  transition-delay: calc($duration * 0.75);
  transition-timing-function: cubic-bezier(0.3, 1.6, 0.5, 0.7);
}

.toggle:before {
  transform: translateX(-1.5em);
}

.toggle--checked.toggle:before {
  transform: translateX(1.5em);
}

.toggle--checked.toggle:after {
  transform: translateX(3em);
}

.toggle:focus {
  outline: transparent;
}

@media screen and (min-width: 375px)  {
  input {
    font: 1em/1.5 sans-serif;
  }
}
</style>