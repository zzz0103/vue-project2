import Car from '../pages/Car.vue'
import FirstView from '../pages/FirstView.vue'
import Good from '../pages/Good.vue'
import Person from '../pages/Person.vue'
import Sort from '../pages/Sort.vue'
import Search from '../pages/Search.vue'
export default[
  {
    path:'/',
    component: FirstView,
    meta:{
      isShow:true
    }
  },
  {
    path:'/sort',
    component: Sort,
    meta: {
      isShow: true
    }
  },
  {
    path: '/good',
    component: Good,
    meta: {
      isShow: true
    }
  },
  {
    path: '/car',
    component: Car,
    meta: {
      isShow: true
    }
  },
  {
    path: '/person',
    component: Person
  },
  {
    path:'/search',
    component:Search
  }
]