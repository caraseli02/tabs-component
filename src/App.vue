<template>
  <div id="app">
    <Tabs :tabs="links">
      <!--Using Scoped Slots to transform tab in <router-link/> and make it UpperCase.
       -->
      <template slot-scope="{ tab }">
        <router-link
          :class="{ active: $route.name === tab }"
          :to="{ name: tab }"
          class="testLink"
          >{{ tab.toUpperCase() }}</router-link
        >
      </template>
    </Tabs>
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import "../node_modules/vue-code-highlight/themes/prism-tomorrow.css";
import Tabs from "@/components/Tabs.vue";
export default {
  props: {},
  name: "App",
  data() {
    return {
      links: ["Home", "Nesting"],
    };
  },
  components: {
    Tabs,
  },
};
</script>

<style lang="scss">
@import "./assets/icons.css";

* {
  margin: 0;
  padding: 0;
  background: #fafafa;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  margin: 20px;
}

h2 {
  text-align: start;
}

a {
  text-decoration: none;
  color: green;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.7s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
  .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
