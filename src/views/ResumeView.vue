<template>
  <div class="resume" id="resume">
    <div class="resume__left">
      <div class="resume__photo-box">
        <MyPhoto class="photo--position" />
        <MyNameBox class="my-name-box--position" />
      </div>
      <AboutBox class="about-box--position about-box--mobile" />
      <SocialBox class="social-box--position" />
      <TechSkillsBox class="tech-skills-box--position" />
    </div>
    <div class="resume__right">
      <EducationBox class="education-box--position" />
      <AboutBox class="about-box--position about-box--desktop" />
      <ExperienceBox class="experience-box--position" />
      <CertificateBox class="certificate-box--position" />
    </div>
  </div>
</template>

<script setup>
import MyPhoto from '@/components/MyPhoto.vue';
import MyNameBox from '@/components/MyNameBox.vue';
import SocialBox from '@/components/social/SocialBox.vue';
import TechSkillsBox from '@/components/techSkills/TechSkillsBox.vue';
import EducationBox from '@/components/education/EducationBox.vue';
import AboutBox from '@/components/about/AboutBox.vue';
import ExperienceBox from '@/components/experience/ExperienceBox.vue';
import CertificateBox from '@/components/certificate/CertificateBox.vue';
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.resume {
  display: flex;
  flex-direction: column;
  padding: $contentPaddingMobile;
  background-color: $pink;

  &__left,
  &__right {
    width: 100%;
  }

  &__photo-box {
    display: flex;
    flex-direction: column;
  }

  & .about-box--desktop {
    display: none;
  }
}

.my-name-box--position {
  margin-top: 24px;
}

.social-box--position,
.education-box--position,
.tech-skills-box--position,
.experience-box--position,
.certificate-box--position {
  margin-top: 50px;
}
.about-box--position {
  margin-top: 35px;
}

@media screen and (min-width: 768px) {
  .resume {
    padding: $contentPaddingTablete;

    &__photo-box {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
  }

  .photo--position {
    margin-left: auto;
  }

  .social-box--position,
  .education-box--position,
  .tech-skills-box--position,
  .experience-box--position,
  .certificate-box--position {
    margin-top: 60px;
  }
}

@media screen and (min-width: 1024px) {
  .resume {
    flex-direction: row;
    padding: $contentPaddingDesktop;

    &__left {
      width: 40%;
    }

    &__right {
      width: 60%;
      margin-left: 12px;
    }

    &__photo-box {
      display: block;
    }

    & .about-box--desktop {
      display: block;
    }
    & .about-box--mobile {
      display: none;
    }
  }
  .social-box--position,
  .experience-box--position,
  .certificate-box--position {
    margin-top: 120px;
  }
  .education-box--position {
    width: 80%;
    margin-left: auto;
    margin-top: 0;
  }
  .about-box--position {
    margin-top: 160px;
    width: 80%;
  }
}
</style>
