const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('src/pages/Index.vue') },
      { path: '/percent', component: () => import('src/pages/Percent.vue') },
      { path: '/vh', component: () => import('src/pages/Vh.vue') },
      {
        path: '/vhLikePercent',
        component: () => import('src/pages/VhLikePercent.vue')
      },
      { path: '/dvh', component: () => import('pages/Dvh.vue') },
      { path: '/svh', component: () => import('src/pages/Svh.vue') },
      { path: '/lvh', component: () => import('pages/Lvh.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]
export default routes
