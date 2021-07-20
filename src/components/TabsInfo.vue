<template>
  <div>
    <h2 class="subtitle">{{ subtitle }}</h2>
    <button class="btn" @click="showCode = !showCode">
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
      :href="`https://github.com/caraseli02/tabs-component/blob/master/src/components${github}`"
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
    <div v-if="showCode" class="codeContainer">
      <button
        class="btn"
        type="button"
        v-clipboard:copy="code"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >
        Copy
      </button>
      <vue-code-highlight>{{ code }} </vue-code-highlight>
    </div>
  </div>
</template>

<script>
import { component as VueCodeHighlight } from "vue-code-highlight";
export default {
  components: {
    VueCodeHighlight,
  },
  data() {
    return {
      showCode: false,
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
  props: {
    subtitle: {
      type: String,
      default: "Subtitle",
    },
    github: {
      type: String,
      default: "/",
    },
    code: {
      type: String,
      default: "Add code props",
    },
  },
};
</script>

<style lang="scss" scoped>
.codeContainer {
  position: relative;
}
.subtitle {
  position: absolute;
  top: 0px;
  left: 10px;
}

.btn {
  border-radius: 5px;
  padding: 10px;
  box-shadow: 15px;
  position: absolute;
  right: 0px;
  top: 0px;
}
.btnGit {
  right: 50px;
}
</style>
