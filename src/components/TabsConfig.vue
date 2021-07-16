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
      @click="changeSelectedTab(index)"
      class="tabs"
      :class="{ active: selectedTab === index }"
    >
      <i v-if="showIcons" :class="tab.icon"></i>
      {{ tab.name }}
    </span>
  </nav>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => [
        { name: "Card", icon: "gg-credit-card" },
        { name: "Img", icon: "gg-inpicture" },
        { name: "Text", icon: "gg-file-document" },
      ],
    },
    showIcons: {
      type: Boolean,
      default: false,
    },
  },
  name: "TabsCnfig",
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
.tabs {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  margin: 0 auto;
  width: 100px;
  height: 50px;
}
.tabs > i {
  margin-right: 10px;
}
.active {
  border-bottom: 2.5px solid;
}
</style>
