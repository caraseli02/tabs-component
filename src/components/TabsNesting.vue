<script>
import TabsExtension from "@/components/TabsExtension.vue";
import Tabs from "@/components/Tabs.vue";

export default {
  name: "TabsNesting",
  components: {
    TabsExtension,
    Tabs,
  },
  props: {
    links: {
      type: Array,
      default: () => {
        return ["Link 1", "Link 2"];
      },
    },
    subLinks: {
      type: Array,
      default: () => {
        return [
          { name: "Link 1", icon: "gg-chevron-down" },
          { name: "Link 2", icon: "gg-chevron-down" },
        ];
      },
    },
  },
};
</script>

<template>
  <div>
    <Tabs :tabs="links">
      <template slot-scope="{ tab }">
        {{ tab }}
      </template>
    </Tabs>
    <TabsExtension
      v-for="(link, index) in subLinks"
      :key="`link-${index}`"
      :tabs="link"
    />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
