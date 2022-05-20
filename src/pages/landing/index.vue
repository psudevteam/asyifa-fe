<script setup>
import { ref, onMounted } from "vue";
import Navbar from "../../components/navbar.vue";
import Banner from "../../components/banner.vue";
import Button from "../../components/common/button.vue";
import Obat from "../../assets/illustration/medicine.png";

const landing = ref();
const about = ref();
const goTo = () => {
  console.log(landing.value.textContent);
};

onMounted(() => {
  console.log(landing.value);
  console.log(about.value.textContent);
});
</script>
<template>
  <Navbar @goto="goTo()" />
  <Banner>
    <div ref="landing" class="flex justify-between px-8 w-full">
      <div class="flex flex-col items-center justify-center gap-y-6 w-1/2">
        <h1 class="text-6xl font-bold text-black-900">Hallo Semua</h1>
        <div class="flex gap-x-6 justify-start">
          <Button @click="toLogin()" text="Login" color="bg-red-500" />
          <router-link to="/register">
            <Button text="Register" />
          </router-link>
        </div>
      </div>
      <div class="flex">
        <img :src="Obat" alt="" />
      </div>
    </div> </Banner
  ><Banner ref="about">
    <div class="flex justify-between px-8 w-full">
      <div class="flex flex-col items-center justify-center gap-y-6 w-1/2">
        <h1 class="text-6xl font-bold text-black-900">About</h1>
      </div>
    </div>
  </Banner>
</template>
