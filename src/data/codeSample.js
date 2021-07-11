export default `
// Default
// src/components/Tabs.vue

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
      <slot> </slot>
    </nav>
  </section>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => {
        return ["Example 1", "Example 2", "Example 3"];
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
</style>

`;
