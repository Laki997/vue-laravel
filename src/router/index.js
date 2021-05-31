import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'
import ContactsList from "../components/ContactList";
import SingleContact from "../components/SingleContact";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/contacts",
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsList,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/contact/:id",
    name: "contact",
    component: SingleContact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
