<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const toLogin = () => {
  router.push("/login");
};
</script>
<template>
  <div class="flex h-screen w-full bg-blue-400 justify-center items-center">
    <slot></slot>
  </div>
</template>
