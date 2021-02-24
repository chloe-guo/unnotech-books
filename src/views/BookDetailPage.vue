<script>
export default {
  name: "BookDetailPage",
  props: {
    bookId: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      info: [],
    };
  },
  methods: {
    getBookinfo() {
      const axios = require("axios");
      let bookURL = "https://fe-interview-api.unnotech.com/profile/" + this.bookId;
      axios
        .get(bookURL)
        .then(response => (this.info = response.data))
        .catch(function(error) {
          console.log(error);
        });
    },
    submitBookinfo() {
      const axios = require("axios");
      let bookURL = "https://fe-interview-api.unnotech.com/profile/" + this.bookId;
      axios
        .patch(bookURL, {
          "price": parseInt(this.info.price),
          "count": parseInt(this.info.count)
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    minus($id) {
      if($id == 'price') {
        this.info.price--;
      } else if($id == 'count') {
        this.info.count--;
      }
    },
    plus($id) {
      if($id == 'price') {
        this.info.price++;
      } else if($id == 'count') {
        this.info.count++;
      }
    },
  },
  created() {
    this.getBookinfo();
  }
};
</script>

<template>
  <section id="BookDetailPage" class="bg-white mx-auto my-60 px-35 py-40 w-1280 h-auto inset-y-0 rounded-default shadow-default
                                      xl:mt-20 xl:w-4/5 md:w-95p md:mt-10 md:py-25 md:px-20 sm:pb-53">
    <div class="mb-25 flex justify-start items-center md:mb-20">
      <label for="price" class="pr-20 text-xl xl:pr-10 xl:text-lg sm:text-base"> 價格：</label>
        <button v-on:click="minus('price')" class="bg-deep text-white py-5 w-36 text-24 font-bold sm:w-30">-</button>
        <input type="number" name="price" id="price" class="bg-pale px-10 py-5 h-36 shadow-inner md:w-120 md:right-20 md:bottom-25" v-model="info.price">
        <button v-on:click="plus('price')" class="bg-dark text-white py-5 w-36 text-24 font-bold sm:w-30">+</button>
    </div>
    <div class="flex justify-start items-center sm:mb-20">
      <label for="count" class="pr-20 text-xl xl:pr-10 xl:text-lg sm:text-base">數量：</label>
      <button v-on:click="minus('count')" class="bg-deep text-white py-5 w-36 text-24 font-bold sm:w-30">-</button>
        <input type="number" name="count" id="count" class="bg-pale px-10 py-5 h-36 shadow-inner md:w-120 md:right-20 md:bottom-25" v-model="info.count">
        <button v-on:click="plus('count')" class="bg-dark text-white py-5 w-36 text-24 font-bold sm:w-30">+</button>
    </div>
    <button v-on:click="submitBookinfo()" class="bg-dark text-white py-5 px-15 absolute right-35 bottom-35 sm:static sm:float-right">確認修改</button>
  </section>
</template>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input[type="number"] {
    -moz-appearance: textfield;
}
</style>