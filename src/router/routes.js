import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import HabitView from '../views/Habit.vue'
const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/vant',
      name: 'vant',
      component: () => import('../views/Vant.vue')
    },
    {
      path: '/habit',
      name: 'habit',
      component: HabitView
    }
  ]
  export default  routes