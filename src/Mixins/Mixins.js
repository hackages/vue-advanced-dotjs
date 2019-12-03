export const titleDisplay = {
  data() {
    return {
      titleIsDisplayed: true,
    };
  },
  methods: {
    toggleTitleIsDisplayed() {
      this.titleIsDisplayed = !this.titleIsDisplayed;
      if (this.log) {
        this.log(this.titleIsDisplayed);
      }
    },
  },
};
