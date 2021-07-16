export const codeTemplating = `
// Default
// src/components/Tabs.vue

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
      class="tabsMargin"
      :class="{ active: selectedTab === index }"
    >
      {{ tab }}
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
.tabsMargin {
  margin: 5px;
}
.active {
  border-bottom: 2.5px solid;
}
</style>

`;
export const codeConfig = `

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


`;

export const codeAdaptability = `

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
    <slot>Loading...</slot>
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

`;

export const codeInversion = `
// The Tabs component is used for hiding content behind a selectable item. This
// can also be used as a pseudo-navigation for a page, where the tabs are links
// and the items are the content.

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

export const codeExtension = `
// The Tabs component is used for hiding content behind a selectable item. This
// can also be used as a pseudo-navigation for a page, where the tabs are links
// and the items are the content.

<template>
  <section>
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
  &__content {
  }

  &__img {
    max-width: 90vw;
  }
}
</style>

`;
