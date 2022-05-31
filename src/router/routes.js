const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/100vh', component: () => import('pages/100vh.vue') },
      {
        path: '/100vhLike100p',
        component: () => import('pages/100vhLike100p.vue')
      },
      { path: '/test', component: () => import('pages/test.vue') },
      { path: '/100dvh', component: () => import('pages/100dvh.vue') }
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
