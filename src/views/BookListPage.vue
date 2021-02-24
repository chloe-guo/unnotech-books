<script>
import BookList from "@/components/BookList.vue";

export default {
  name: "BookListPage",
  components: {
    BookList
  },
  methods: {
    
  }
};
</script>

<template>
  <section id="BookListPage">
    <BookList ref="bookList"/>
    <router-view :key="$route.path"/>
  </section>
</template>