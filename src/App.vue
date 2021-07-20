<template>
  <div id="app">
    <!-- TAGS DESCRIPTION -->
    <section>
      <h1>Reusability of Tabs Component</h1>
      <br />
      <p>
        The Tabs component is used for hiding content behind a selectable item.
        This can also be used as a pseudo-navigation for a page, where the tabs
        are links and the tab-items are the content.
      </p>
      <br />
      <a href="https://michaelnthiessen.com/6-levels-of-reusability/">
        <span> Titles inspired from:</span> The 6 Levels of Reusability</a
      >
    </section>
    <!-- TEMPLATING EXAMPLE -->
    <section class="codeExample">
      <TabsInfo github="/Tabs.vue" subtitle="Templating" :code="codeSample" />
      <Tabs />
    </section>
    <!-- CONFIGURATION EXAMPLE -->
    <section class="codeExample">
      <TabsInfo
        github="/TabsConfig.vue"
        :code="codeConfig"
        subtitle="Configuration"
      />
      <TabsConfig :showIcons="true" />
    </section>
    <!-- ADAPTABILITY EXAMPLE -->
    <section class="codeExample">
      <TabsInfo
        github="/TabsAdaptability.vue"
        :code="codeAdaptability"
        subtitle="Adaptability"
      />
      <TabsAdaptability :showIcons="true">
        <Skeleton :count="2" height="100px" />
        <span>Loading...</span>
      </TabsAdaptability>
    </section>
    <!--INVERSION EXAMPLE -->
    <section class="codeExample {">
      <TabsInfo
        github="/TabsInversion.vue"
        subtitle="Inversion"
        :code="codeInversion"
      />
      <TabsInversion :incomingData="tabsContent" :tabs="tabs"> </TabsInversion>
    </section>
    <!-- EXTENSION EXAMPLE -->
    <section id="Props" class="codeExample {">
      <TabsInfo
        github="/TabsExtension.vue"
        subtitle="Extension"
        :code="codeExtension"
      />
      <TabsExtension>
        <template v-slot:ref>
          <h4>Photos from Lorem Picsum</h4>
        </template>
        <template v-slot:date>
          {{ today }}
        </template>
      </TabsExtension>
    </section>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import TabsConfig from "@/components/TabsConfig.vue";
import TabsAdaptability from "@/components/TabsAdaptability.vue";
import TabsExtension from "@/components/TabsExtension.vue";
import TabsInversion from "@/components/TabsInversion.vue";
import TabsInfo from "@/components/TabsInfo.vue";
import tabsContent from "@/data/tabsContent";
import {
  codeSample,
  codeConfig,
  codeAdaptability,
  codeInversion,
  codeExtension,
} from "@/data/codeSample";
import "../node_modules/vue-code-highlight/themes/prism-tomorrow.css";
import { Skeleton } from "vue-loading-skeleton";

export default {
  name: "App",
  data() {
    return {
      tabs: ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"],
      links: ["Default", "Props", "Slots"],
      //import Tabs Content Data from @/data/tabsContent.js
      //same as tabsContent : tabsContent
      tabsContent,
      codeSample,
      codeConfig,
      codeAdaptability,
      codeInversion,
      codeExtension,
      today: new Date().toLocaleString(),
    };
  },
  methods: {
    onCopy: function () {
      alert("You just copied selected code");
    },
    onError: function (e) {
      alert("Failed to copy texts,");
      console.log(e);
    },
  },
  components: {
    Tabs,
    TabsConfig,
    TabsAdaptability,
    TabsExtension,
    TabsInversion,
    TabsInfo,
    Skeleton,
  },
};
</script>

<style lang="scss">
@import "./assets/icons.css";

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
  .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}

section {
  position: relative;
  padding: 100px 2% 50px;
  margin: 5%;
}

.ref {
  margin-top: 1rem;
}
</style>
