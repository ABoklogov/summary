<template>
  <footer class="footer">
    <div class="footer__top">
      <FooterLinksBox
        :title="language === 'ru' ? 'Контакты' : 'Contact'"
        :list="contactsList"
      />

      <FooterLinksBox
        class="footer__social"
        :title="language === 'ru' ? 'Социальные сети' : 'Social'"
        :list="dataResume.social"
        :social="true"
      />
    </div>

    <FooterTextBox 
      class="text-box--position"
      :language="language" 
      :dataPortfolio="dataPortfolio"
      :dataResume="dataResume"
    />
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useViewStore } from '@/stores/view';
import FooterLinksBox from './FooterLinksBox.vue';
import FooterTextBox from './FooterTextBox.vue';

const { language } = storeToRefs(useViewStore());

const props = defineProps({
  dataPortfolio: {
    type: Object,
    required: true
  },
  dataResume: {
    type: Object,
    required: true
  },
});

const contactsList = computed(() => {
  const { email, phone, telegram } = props.dataResume?.contacts;
  return [email, phone, telegram]
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.footer {
  position: relative;
  z-index: calc($indexCurtain + 1);
  background-color: $black;
  padding: 105px 24px 64px;

  &__top {
    display: flex;
    flex-direction: column;
  }
  &__social {
    margin-top: 32px;
  }
}
.text-box--position {
  margin-top: 64px;
}

@media screen and (min-width: 768px) {
  .footer {
    &__top {
      flex-direction: row;
      align-items: flex-start;
    }
    &__social {
      margin-top: 0;
      margin-left: 64px;
    }
  }
}
@media screen and (min-width: 1024px) {
  .footer {
    padding: 105px 120px 64px;
    &__social {
      margin-left: 128px;
    }
  }
}
</style>
