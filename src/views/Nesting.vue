<script>
// import TabsNesting from "@/components/TabsNesting.vue";
export default {
  name: "NestingPage",
  components: {
    // TabsNesting,
  },
  data() {
    return {
      links: ["Select Vehicle", "Shopping Tools"],
      subLinks: [
        ["Cars & Minivan", "Trucks", "Crossovers & SUVs"],
        ["Build & Price", "Local Specials"],
      ],
    };
  },
};
</script>

<template>
  <div>
    <h1>This is the most advanced application of reusability.</h1>
    <!-- <TabsNesting :subLinks="subLinks" :links="links" /> -->
  </div>
</template>

<style lang="scss" scoped></style>
