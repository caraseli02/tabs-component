// The Tabs component is used for hiding content behind a selectable item. This
// can also be used as a pseudo-navigation for a page, where the tabs are links
// and the items are the content.

<template>
  <!-- Navigation Tabs  -->
  <nav>
    <!-- Loop over default o pased props -->
    <span
      v-for="(tab, index) in tabs"
      :key="index"
      @click="changeSelectedTab(tab)"
      class="tabsMargin"
    >
      <!-- Scoped Slots -->
      <slot :tab="tab">
        <span :class="{ active: selectedTab === tab }"> {{ tab }}</span>
      </slot>
    </span>
  </nav>
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
    changeSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
  mounted() {
    this.changeSelectedTab(this.tabs[0]);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tabsMargin {
  margin: 5px;
}
.active {
  border-bottom: 2.5px solid;
}
</style>
