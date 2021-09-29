
const routes = [
  { path: '/', component: () => import('pages/login.vue') },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/dashboard', name: "Dashboard", component: () => import('pages/dashboard.vue') },
      { path: '/patients', name: "Patients", component: () => import('pages/members.vue') },
      { path: '/providers', name: "Providers", component: () => import('pages/providers.vue') },
      { path: '/community', name: "Similarity", component: () => import('pages/similarity.vue') },
      { path: '/user/:id', name: "User", component: () => import('pages/user.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
