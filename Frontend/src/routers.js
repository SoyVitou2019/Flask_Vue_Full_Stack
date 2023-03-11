import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Contact_us from "./components/Contact_us.vue"
import Tools from "./components/Tools.vue"
import Materials from "./components/Materials.vue"
import Categorys from "./components/Categorys.vue"
import Graphs from "./components/Graphs.vue"
import Abouts from "./components/Abouts.vue"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "Contact_us",
    component: Contact_us,
    path: "/contact-us",
  },
  {
    name: "Tools",
    component: Tools,
    path: "/tools",
  },
  {
    name: "Materials",
    component: Materials,
    path: "/materials",
  },
  {
    name: "Categorys",
    component: Categorys,
    path: "/categorys",
  },
  {
    name: "Graphs",
    component: Graphs,
    path: "/graphs",
  },
  {
    name: "Abouts",
    component: Abouts,
    path: "/abouts",
  },
];

const router =
  createRouter(
    {
      history: createWebHistory(),
      routes:routes
    }
  );

export default router;
