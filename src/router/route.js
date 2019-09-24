import Car from '../pages/Car.vue'
import FirstView from '../pages/FirstView.vue'
import Good from '../pages/Goods/Good.vue'
import Person from '../pages/Person/Person.vue'
import Sort from '../pages/Sort.vue'
import Search from '../pages/Search.vue'
import Find from '../pages/Goods/Find/find.vue'
import GoodItem from '../pages/Goods/Find/gooditem.vue'
import FindIndex from '../pages/Goods/Find/findindex.vue'
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
    },
    children:[
      {
        path:'/good/find',
        component:Find,
        meta: {
          isShow: true
        },
        children:[
          {
            path:'/good/find/:id',
            component:FindIndex,
            meta: {
              isShow: true
            },
          },
          
        ] 
      },
      {
        path:'/good/item',
        component:GoodItem
      },
      {
        path:'/good',
        redirect: '/good/find',
      }
    ]
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
    component: Person,
  },
  {
    path: '/search',
    component: Search
  }
]