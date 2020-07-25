import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AnimeList from "../views/AnimeList.vue"

Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/animelist",
      name: "AnimeList",
      component: AnimeList
    }
  ]
});

export default router;
