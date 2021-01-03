import { createWebHistory, createRouter } from "vue-router";
import Calculator from "../components/pages/Calculator.vue";
import FrontPage from "../components/pages/FrontPage.vue";
import Contacts from "../components/pages/Contacts.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: FrontPage
    },
    {
        path: "/calc",
        name: "Calculator",
        component: Calculator
    },
    {
        path: "/contacts",
        name: "Contacts",
        component: Contacts
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;