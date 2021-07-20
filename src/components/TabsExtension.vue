// The Tabs component is used for hiding content behind a selectable item. This
// can also be used as a pseudo-navigation for a page, where the tabs are links
// and the items are the content.

<template>
  <article>
    <!-- Navigation Tabs  -->
    <nav class="tabs-container">
      <ul class="tabs-list">
        <!-- Loop over default o pased props to display tabs-->
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
      <!-- Loop over default o pased props to display content-->
      <div
        v-for="(content, index) in incomingData"
        :key="index"
        v-show="selectedTab === index"
      >
        <slot name="tabContent" :content="content">
          <h3 v-show="content.title">{{ content.title }}</h3>
          <p v-show="content.text">
            {{ content.text }}
          </p>
          <img v-show="content.img" class="card__img" :src="content.img" />
        </slot>
      </div>
    </transition-group>
    <slot name="ref"> </slot>
    <slot name="date"> </slot>
  </article>
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
            img: "https://picsum.photos/200/300?random=2",
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
    next() {
      this.selectedTab++;
    },
    prev() {
      this.selectedTab--;
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
  &__img {
    max-width: 90vw;
  }
}
</style>
