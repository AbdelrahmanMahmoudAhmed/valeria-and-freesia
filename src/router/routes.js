const routes = [
  {
    path: "/",
    component: () => import("pages/landing-one.vue"),
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
