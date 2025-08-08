<template>
  <h1>Tes 123</h1>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const dataMessage = ref(null);

const getMessage = async () => {
  try {
    const response = await axios.get("http://localhost:3000");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getMessage();
});
</script>
