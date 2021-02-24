import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/books",
    name: "BookListPage",
    props: true,
    component: () =>
      import(/* webpackChunkName: "BookListPage" */ "@/views/BookListPage.vue"),
    children: [
      {
        path: ":bookId",
        name: "BookDetailPage",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "BookDetailPage" */ "@/views/BookDetailPage.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
