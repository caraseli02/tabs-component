export default `
// Props
// src/App.vue
...
<TabsExtension />
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
          <h3 :class="{ active: selectedTab === index }">{{ tab }}</h3>
        </li>
      </ul>
    </nav>
    <!-- Add transition between content -->
    <transition-group name="slide-fade" mode="out-in">
      <!-- Loop over default o pased props -->
      <div
        v-for="(content, index) in incomingData"
        :key="index"
        v-show="selectedTab === index"
      >
        <h3 v-show="content.title">{{ content.title }}</h3>
        <p v-show="content.text">
          {{ content.text }}
        </p>
        <img v-show="content.img" class="card__img" :src="content.img" />
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
            img: "https://picsum.photos/200/300?random=1",
          },
          {
            title: "",
            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img: null,
          },
        ];
      },
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

.card {
  &__content {
  }

  &__img {
    max-width: 90vw;
  }
}
</style>

`;
