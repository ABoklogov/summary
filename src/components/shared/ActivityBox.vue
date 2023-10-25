<template>
  <div class="activity-box">
    <div>
      <span class="activity-box__position">{{ position }}</span>
      <span class="activity-box__pretext">{{ language === 'ru' ? ' в ' : ' at ' }}</span>
      <a 
        class="activity-box__company" 
        :href="webSite"
        target="_blank"
      >
        {{ company }}
      </a>
    </div>

    <div class="activity-box__activity-time">
      {{ `${start} - ${finish}` }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  position: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  webSite: {
    type: String,
  },
  start: {
    type: String,
    required: true
  },
  finish: {
    type: String,
    required: true
  },
  language: {
    type: String,
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.activity-box {
  display: inline-block;
  &__position,
  &__company,
  &__activity-time,
  &__pretext {
    font-family: $fontBase;
    font-size: $fontMedium;
    font-style: $fontStyle;
    font-weight: $fontWeightRegular;
    line-height: $lineHeight;
  }
  &__position {
    color: $transparentBold;
  }
  &__company,
  &__activity-time,
  &__pretext {
    display: inline;
    color: $transparentBlack;
    transition: color $duration $timingFunction;
  }
  &__company:hover,
  &__company:focus {
    color: $orange;
  }
}

@media screen and (min-width: 768px) {
  .activity-box {
    &__position,
    &__company,
    &__activity-time,
    &__pretext {
      font-size: $fontNorm;
    }
  }
}
</style>