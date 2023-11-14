<template>
  <header class="header" :class="{ 'header--hidden': scrollBottom }">
    <SiteNav class="site-nave--position" />

    <div class="header__control">
      <Multiselect
        v-model="language"
        :options="optionsSelectLanguage"
        :show-labels="false"
        :showPointer="false"
        placeholder=""
      />
      <CheckboxTheme class="checkbox-theme--position" />
    </div>

    <Curtain />
  </header>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref, onMounted } from 'vue';
import SiteNav from '@/components/SiteNav.vue';
import Curtain from '@/components/shared/Curtain.vue';
import CheckboxTheme from '@/components/CheckboxTheme.vue';
import Multiselect from 'vue-multiselect';
import { useViewStore } from '@/stores/view';
const { language, optionsSelectLanguage } = storeToRefs(useViewStore());

const scrollBottom = ref(false);
const showHeader = ref(true);

const updateShowHeader = () => {
  let resume = document.querySelector('#resume');
  if (resume) {
    resume = resume.getBoundingClientRect();

    if (resume.top < 0) {
      showHeader.value = false;
    } else {
      showHeader.value = true;
    }
  }
};
let last;
onMounted(() => {
  // слушаем скролл
  document.addEventListener('touchmove', (e) => {
    if (!showHeader.value) {
      const current = e.touches[0].clientY;

      if (current > last) {
        scrollBottom.value = false;
      } else if (current < last) {
        scrollBottom.value = true;
      }

      last = current;
    }
    updateShowHeader();
  });
});
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped lang="scss">
@import '@/assets/scss/variables';
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: calc($indexCurtain + 2);
  left: 0;
  top: 0;
  width: 100vw;
  padding: 0 $contentPaddingMobile;
  background-color: $white;
  transition: top $duration $timingFunction;

  &--hidden {
    top: -$headerTopMobile;
  }

  & .site-nave--position {
    z-index: calc($indexCurtain + 1);
  }

  &__control {
    display: flex;
  }

  & .multiselect {
    position: relative;
    z-index: calc($indexCurtain + 1);
    width: 50px;
  }
  & .multiselect--active {
    z-index: calc($indexCurtain + 1);
  }

  &::v-deep .multiselect {
    .multiselect__select {
      width: 20px;
    }
    .multiselect__tags {
      padding: 8px 13px 0 4px;
      border: 1px solid $transparentBlack;
    }
  }
}

.checkbox-theme--position {
  margin-left: 6px;
}

@media screen and (min-width: 375px) {
  .header {
    & .multiselect {
      width: 74px;
    }
    &::v-deep .multiselect {
      .multiselect__select {
        width: 40px;
      }
      .multiselect__tags {
        padding: 8px 40px 0 8px;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .header {
    padding: 0 $contentPaddingTablete;

    & .multiselect {
      width: 120px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .header {
    position: relative;
    width: auto;
  }

  .checkbox-theme--position {
    margin-left: 16px;
  }
}
</style>
