export default `
// Slots
// src/App.vue
...
      <TabsInversion
        :incomingData="tabsContent"
        :tabs="tabs"
      >
        <!-- Using Scoped Slots to change display of the elements  -->
        <template slot="tabContent" slot-scope="{ content }">
        <!-- wrap the content in div and add css grid   -->
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
      </TabsInversion>
...
<style>
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
...
// src/components/TabsExtension.vue

<template>
  <section>
    <!-- Navigation Tabs  -->
    <nav class="tabs-container">
      <ul class="tabs-list">
        <!-- Loop over default o pased props -->
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          @click="changeSelectedTab(index)"
        >
          <!-- Add implementation of scope-slots -->
          <slot name="tabName" :tab="tab">
            <h3 :class="{ active: selectedTab === index }">{{ tab }}</h3>
          </slot>
        </li>
      </ul>
    </nav>
    <!-- Add transition between content -->
    <transition-group v-if="contentMode" name="slide-fade" mode="out-in">
      <!-- Loop over default o pased props -->
      <div
        v-for="(content, index) in incomingData"
        :key="index"
        v-show="selectedTab === index"
      >
        <!-- Add implementation of scope-slots -->
        <!-- https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots -->
        <slot name="tabContent" :content="content">
          <h3 v-show="content.title">{{ content.title }}</h3>
          <p v-show="content.text">
            {{ content.text }}
          </p>
          <img v-show="content.img" class="card__img" :src="content.img" />
        </slot>
      </div>
    </transition-group>
  </section>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => {
        return ["Card", "Tab Img", "Tab Text"];
      },
    },
    incomingData: {
      type: Array,
      default: () => {
        return [
          {
            title: "Card",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img: "https://picsum.photos/200/300?random=1",
          },
          {
            title: null,
            text: null,
            img: "https://picsum.photos/200/300?random=6",
          },
          {
            title: "",
            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img: null,
          },
        ];
      },
    },
    contentMode: {
      type: Boolean,
      default: true,
    },
  },
  name: "Tabs",
  data() {
    return {
      selectedTab: null,
    };
  },
  methods: {
    changeSelectedTab(index) {
      this.selectedTab = index;
    },
  },
  mounted() {
    this.changeSelectedTab(0);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}

.tabs-container {
  max-width: 100vw;
  overflow-x: scroll;
}
.tabs-list {
  display: inline-flex;
}

.tabs-container li {
  color: #fc6b57;
  min-width: 120px;
  font-weight: bold;
  font-size: clamp(1.3rem, 2.5vw, 2rem);
  cursor: pointer;
  margin: 0 1.5rem;
}
.active {
  border-bottom: 2.5px solid #fc6b57;
}
</style>

`;
