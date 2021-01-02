import { createWebHistory, createRouter } from "vue-router";
import MainPage from "./../components/MainPage.vue";
import Calculator from "./../components/Calculator.vue";
import UnderConstruction from "./../components/UnderConstruction.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: MainPage,
    },
    {
        path: "/calc",
        name: "Calculator",
        component: Calculator,
    },
    {
        path: "/tmp",
        name: "Under Construction",
        component: UnderConstruction,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;