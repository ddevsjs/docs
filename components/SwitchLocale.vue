<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
    isModalVisible.value = false;
  },
});

const isModalVisible = useState("isModalVisible", () => false);

const clickHandle = () => (isModalVisible.value = !isModalVisible.value);
</script>

<template>
  <section
    class="fixed bottom-8 right-4 flex flex-col items-center justify-center gap-1"
  >
    <button @click="clickHandle">{{ $t("utils.switchLocale") }}</button>
    <div v-if="isModalVisible">
      <select v-model="language">
        <option
          v-for="item in locales"
          :key="typeof item === 'object' ? item.code : item"
          :value="typeof item === 'object' ? item.code : item"
        >
          {{ typeof item === "object" ? item.name : item }}
        </option>
      </select>
    </div>
  </section>
</template>
