<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();

const styledLocales = locales.value.map((loc) => ({
  locale: loc,
  class: "dark:text-zinc-200 text-zinc-900 dark:hover:bg-black/30",
}));
const localeClass = (index: number) => styledLocales[index].class;

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
    isModalVisible.value = false;
  },
});

const isModalVisible = useState("isLocaleModalVisible", () => false);

const clickHandle = () => (isModalVisible.value = !isModalVisible.value);
</script>

<template>
  <section
    class="fixed bottom-8 right-4 flex flex-col items-center justify-center gap-1"
  >
    <button v-if="!isModalVisible" @click="clickHandle">
      {{ $t("utils.switchLocale") }}
    </button>
    <div
      v-if="isModalVisible"
      class="dark:bg-indigo-950/30 bg-indigo-300/30 backdrop-blur-sm p-2 rounded-lg flex flex-col items-center justify-center gap-4"
    >
      <button v-if="isModalVisible" @click="clickHandle">
        {{ $t("utils.switchLocale") }}
      </button>
      <select
        v-model="language"
        class="bg-transparent py-2 px-4 rounded-md border-none focus:dark:bg-[#0e0016] focus:outline-none focus:ring-2 focus:ring-indigo-950"
      >
        <option
          v-for="(item, index) in styledLocales"
          :key="
            typeof item.locale === 'object' ? item.locale.code : item.locale
          "
          :value="
            typeof item.locale === 'object' ? item.locale.code : item.locale
          "
          :class="localeClass(index)"
        >
          {{ typeof item.locale === "object" ? item.locale.name : item.locale }}
        </option>
      </select>
    </div>
  </section>
</template>
