<script setup>
const emit = defineEmits(["goto"]);
const goTo = () => {
  emit("goto");
};
</script>
<template>
  <nav class="flex w-full h-[60px] bg-white px-4 justify-between items-center">
    <div class="text-5xl flex items-center">
      <span class="text-black-900 text-2xl font-bold">Asyifa</span>
    </div>
    <div class="items-center flex gap-x-4 cursor-pointer">
      <span @click="goTo()">Home</span>
      <span>About</span>
      <span>Contact</span>
      <span>Share</span>
    </div>
  </nav>
</template>
