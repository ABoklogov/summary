<template>
  <div class="header-portfolio" :style="heightHeader">
    <AboutPortfolioBox class="about-portfolio-box--position" :language="language" />
    <CustomButton class="header-portfolio__btn-scroll" @click="scrollToProject">
      <IconArrow />
      <span>
        {{ language === 'ru' ? 'Смотреть ниже' : 'Scroll down' }}
      </span>
    </CustomButton>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import AboutPortfolioBox from './AboutPortfolioBox.vue';
import CustomButton from '@/components/shared/CustomButton.vue';
import IconArrow from '@/components/icons/IconArrow.vue';

defineProps({
  language: {
    type: String
  }
});

const scrollToProject = () => {
  const scrollTarget = document.querySelector('#projects');
  const topOffset = window.innerWidth < 1024 ? document.querySelector('header').offsetHeight : 0;

  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

const heightHeader = computed(() => {
  let header = document.querySelector('#header');
  let heightHeaderPortfolio = '100vh';
  const heightView = document.documentElement.clientHeight;

  if (header) {
    header = header.getBoundingClientRect();
    heightHeaderPortfolio = `${heightView - header.height}px`;
  }
  return { height: heightHeaderPortfolio };
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.header-portfolio {
  position: relative;
  z-index: calc($indexCurtain + 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  min-height: 374px;
  background-color: $black;
  padding: 48px 24px 32px;

  &__btn-scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 96px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 62px;
  }
  &__btn-scroll span {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: $pink;
    font-family: $fontBase;
    font-size: $fontMicro;
    font-style: $fontStyle;
    font-weight: $fontWeightLight;
    line-height: normal;
    margin-top: 4px;
    transition: color $duration $timingFunction;
  }
  &__btn-scroll svg {
    display: block;
    transform: rotate(90deg);
    color: $pink;
    width: 24px;
    height: 24px;
    transition: color $duration $timingFunction;
  }
  &__btn-scroll:hover svg,
  &__btn-scroll:focus svg,
  &__btn-scroll:hover span,
  &__btn-scroll:focus span {
    color: $orange;
  }
}
@media screen and (max-height: 600px) {
  .header-portfolio__btn-scroll {
    margin-top: 15px;
  }
}
@media screen and (min-width: 768px) {
  .header-portfolio {
    min-height: 406px;
  }
  .about-portfolio-box--position {
    max-width: 653px;
  }
}
@media screen and (min-width: 1024px) {
  .header-portfolio {
    min-height: 612px;
    padding: 48px 120px 32px;

    &__btn-scroll {
      width: 126px;
      margin-top: 175px;
    }
    &__btn-scroll span {
      font-size: $fontSmall;
      margin-top: 8px;
    }
    &__btn-scroll svg {
      width: 40px;
      height: 40px;
    }
  }
  .about-portfolio-box--position {
    max-width: 815px;
  }
}
</style>
