<script>
export default {
  name: "BookList",
  data() {
    return {
      info: []
    };
  },
  mounted() {
    console.log(this.$route.params.bookId);
  },
  methods: {
    getBooksinfo() {
      const axios = require("axios");
      let booksURL = "https://fe-interview-api.unnotech.com/books";

      axios
        .get(booksURL)
        .then(response => (this.info = response.data ))
        .catch(function(error) {
          console.log(error);
        });
    },
    changeBookDetail() {
      let bookCard = this.$refs.bookCard;
      for (let i = 0; i < bookCard.length; i++) {
        if(i == this.$route.params.bookId - 1) {
          this.$refs.bookCard[this.$route.params.bookId - 1].classList.add("mark");
        } else {
          this.$refs.bookCard[i].classList.remove("mark");
        }
      }
    }
  },
  created() {
    this.getBooksinfo();
  }
};
</script>

<template>
  <section id="BookList" class="m-auto py-40 w-1280 h-auto left-0 right-0 overflow-x-scroll
                                xl:w-4/5 xl:overflow-x-visible md:w-95p md:py-30 sm:w-full">
    <ul
      class="w-auto overflow-visible whitespace-nowrap
             xl:w-full xl:flex xl:whitespace-normal xl:justify-center xl:items-start xl:flex-wrap"
      ref="bookMenu"
    >
      <li 
        class="bookCard bg-white mx-20 w-325 h-400 inline-block rounded-default whitespace-normal shadow-default transition-card duration-300 ease-linear
               hover:shadow-sm active:shadow-sm focus:shadow-sm
               sm:m-8
               xl:block xl:m-20 xl:flex-1/3 xl:w-auto xl:h-26vw
               lg:flex-1/2sm lg:h-35vw md:block md:m-10 md:flex-1/2lg md:w-auto md:h-55vw"
        ref="bookCard"
        v-for="item in info"
        :key="item.id"
      >
        <router-link
          class="w-full h-full flex justify-start items-center flex-col"
          v-on:click.native="changeBookDetail"
          :to="{
                name: 'BookDetailPage',
                params: { bookId: item.id.toString() }
              }"
        >
          <img :src="item.image" alt="" class="w-auto h-7/10 md:h-2/3"/>
          <div class="content bg-deep w-full h-3/10 rounded-br-default rounded-bl-default md:h-1/3">
            <h3 class="text-white">{{ item.name }}</h3>
            </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.bookCard:hover,
.bookCard:active,
.bookCard:focus {
  transform: translate(4px, 4px);
}

img {
  padding: 6% 0;
}

.content {
  transform: translateY(2px);
}

h3 {
  padding: 9%;
}

.bookCard.mark {
  box-shadow: 6px 6px 8px rgba(#204051, .8);
  transform: translate(4px, 4px);

  .content {
    background: #204051;
  }
}

@media (max-width: 1440px) {
  h3 {
    padding: 6%;
  }
}
</style>
