import { createRouter, createWebHistory } from "vue-router";
import new_Screen from "./components/new_Screen.vue";

////////////////////////
const routes=[
{
    name:'new_Screen',
    path:'/new_Screen',
    component:
        new_Screen
}
];
const router =createRouter({
    history: createWebHistory(),
    routes,
});
export default router; 