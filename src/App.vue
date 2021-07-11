<template>
  <div id="app">
    <!-- USING TAGS IN HEADER -->
    <header>
      <Tabs :tabs="links">
        <!--Using Scoped Slots to change <h3/> tag in <a/> anchor, and make it UpperCase.
       -->
        <template slot="tabName" slot-scope="{ tab }">
          <a :href="`#${tab.trim()}`" class="testLink">{{
            tab.toUpperCase()
          }}</a>
        </template>
      </Tabs>
    </header>
    <!-- TAGS DESCRIPTION -->
    <div class="intro">
      <h1>Tabs Default</h1>
      <p>
        The Tabs component is used for hiding content behind a selectable item.
        This can also be used as a pseudo-navigation for a page, where the tabs
        are links and the tab-items are the content.
      </p>
    </div>
    <!-- BASIC EXAMPLE -->
    <div id="Default" class="componentExample">
      <button class="btn" @click="showDefaultCode = !showDefaultCode">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z"
            fill="currentColor"
          />
          <path
            d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <a
        href="https://github.com/caraseli02/tabs-component/blob/master/src/components/Tabs.vue"
        class="btnGit btn"
      >
        <svg
          width="24"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          fill="currentColor"
          color="#000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>GitHub icon</title>
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          ></path>
        </svg>
      </a>
      <Tabs />
      <div v-if="showDefaultCode" class="makeRelative">
        <button
          class="btn"
          type="button"
          v-clipboard:copy="codeSample"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >
          Copy
        </button>
        <vue-code-highlight>{{ codeSample }} </vue-code-highlight>
      </div>
    </div>
    <!-- PROPS EXAMPLE -->
    <div id="Props" class="componentExample {">
      <h2>Example with Props</h2>
      <button class="btn" @click="showPropsCode = !showPropsCode">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z"
            fill="currentColor"
          />
          <path
            d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <TabsProps v-show="!showPropsCode"> </TabsProps>
      <vue-code-highlight v-show="showPropsCode"
        >{{ codeSampleProps }}
      </vue-code-highlight>
    </div>
    <!-- SLOTS EXAMPLE -->
    <div id="Slots" class="componentExample {">
      <h2>Example with Slots</h2>
      <button class="btn" @click="showSlotsCode = !showSlotsCode">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z"
            fill="currentColor"
          />
          <path
            d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <TabsSlots
        :incomingData="tabsContent"
        :tabs="tabs"
        v-show="!showSlotsCode"
      >
        <!-- Using Scoped Slots to change display of the elements  -->
        <template slot="tabContent" slot-scope="{ content }">
          <div class="slotGrid">
            <h3 v-show="content.title">{{ content.title }}</h3>
            <p v-show="content.text">
              {{ content.text }}
            </p>
            <img
              v-show="content.img"
              class="slotGrid__img"
              :src="content.img"
            />
          </div>
        </template>
      </TabsSlots>
      <vue-code-highlight v-show="showSlotsCode"
        >{{ codeSampleSlots }}
      </vue-code-highlight>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import TabsProps from "@/components/TabsProps.vue";
import TabsSlots from "@/components/TabsSlots.vue";
import tabsContent from "@/data/tabsContent";
import codeSample from "@/data/codeSample";
import codeSampleProps from "@/data/codeSampleProps";
import codeSampleSlots from "@/data/codeSampleSlots";
import { component as VueCodeHighlight } from "vue-code-highlight";
import "../node_modules/vue-code-highlight/themes/prism-tomorrow.css";

export default {
  name: "App",
  data() {
    return {
      showDefaultCode: false,
      showPropsCode: false,
      showSlotsCode: false,
      tabs: ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"],
      links: ["Default", "Props", "Slots"],
      //import Tabs Content Data from @/data/tabsContent.js
      //same as tabsContent : tabsContent
      tabsContent,
      codeSample,
      codeSampleProps,
      codeSampleSlots,
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
    TabsProps,
    TabsSlots,
    VueCodeHighlight,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}

h2 {
  text-align: start;
}

a {
  text-decoration: none;
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

.testLink {
  font-size: 1rem;
  color: black;
}

.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  p {
    text-align: left;
    font-size: 1.2rem;
  }
}

.componentExample {
  position: relative;
  background-color: rgb(242, 242, 242);
  padding: 2%;
  padding-top: 50px;
  margin-top: 5%;
}
.makeRelative {
  position: relative;
}
.btn {
  border-radius: 5px;
  padding: 10px;
  border: none;
  background-color: gray;
  box-shadow: 15px;
  position: absolute;
  right: 0px;
  top: 0px;
}
.btnGit {
  right: 50px;
}
.slotGrid {
  display: grid;
  grid-template-areas:
    "img title "
    "img text ";

  &__img {
    grid-area: img;
  }
}
</style>
