<template>
  <div id="app">
    <Header />
    <NuxtPage />
    <SwitchLocale />
  </div>
</template>

<style global>
:root {
  --foreground-color: #111111;
  --background-start-color: #b49de6;
  --background-mid-color: #cac1e6;
  --background-end-color: #ffffff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-color: #dfdfdf;
    --background-start-color: #0e0016;
    --background-mid-color: #09000e;
    --background-end-color: #000000;
  }
}

body {
  height: 100vh;
  background-color: var(--background-end-color);
}

* {
  color: var(--foreground-color);
}

#app {
  height: 100vh;
  background-color: var(--background-end-color);
  background: linear-gradient(
      to bottom,
      var(--background-start-color) 15%,
      var(--background-mid-color) 45%,
      var(--background-end-color) 100%
    )
    var(--background-mid-color);
}
</style>
