import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Work from '@/components/work/Work'
import Study from '@/components/study/Study'
import Health from '@/components/health/Health'
import Travel from '@/components/travel/Travel'
import Finance from '@/components/finance/Finance'
import Life from '@/components/life/Life'
import Other from '@/components/other/Other'
import Update from '@/components/update/Update'
import AboutMe from '@/components/aboutme/AboutMe'
import English from '@/components/study/English'
import Reading from '@/components/study/Reading'
import ItTech from '@/components/study/ItTech'
import Resume from  '@/components/work/Resume'
import Project from  '@/components/work/Project'
import Solution from  '@/components/work/Solution'
import  Weight from  '@/components/health/Weight'
import  Keep from  '@/components/health/Keep'
import  Remain from  '@/components/health/Remain'
import  Accounting from  '@/components/finance/Accounting'
import  Budget from  '@/components/finance/Budget'
import  Reportf from  '@/components/finance/Reportf'
import  Deposit from  '@/components/finance/Deposit'
import TravelNotes from  '@/components/travel/TravelNotes'
import TravelRoutes from  '@/components/travel/TravelRoutes'
import TravelPlan from  '@/components/travel/TravelPlan'

import LifeBeautyPlan from  '@/components/life/LifeBeautyPlan'
import LifeClothPlan from  '@/components/life/LifeClothPlan'
import LifePlan from  '@/components/life/LifePlan'
import LifeDays from  '@/components/life/LifeDays'
import LifeRecipes from  '@/components/life/LifeRecipes'
import LifeRecords from  '@/components/life/LifeRecords'
import LifeWays from  '@/components/life/LifeWays'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'/',
          name: 'Main',
          component: Main
        },
        {
          path:'/work',
          name:'Work',
          component: Work,
          children:[
            {
              path:'/',
              component: Resume
            },
            {
              path:'/resume',
              component: Resume
            },
            {
              path:'/project',
              component: Project
            },
            {
              path:'/solution',
              component: Solution
            },
            ]
        },
        {
          path:'/study',
          name:"Study",
          component:Study,
          children:[
            {
              path: '/',
              name: 'English',
              component: English
            },
        {
          path: '/study_english',
          name: 'English',
          component: English
        },
        {
          path: '/it_tech',
          name: 'ItTech',
          component: ItTech
        },
        {
          path: '/reading',
          name: 'Reading',
          component: Reading
        }]
        },
        {
          path:'/health',
          name:'Health',
          component: Health,
          children:[
            {
              path:'/',
              component: Weight
            },
            {
              path:'/weight',
              component: Weight
            },
            {
              path:'/keep',
              component: Keep
            },
            {
              path:'/remain',
              component: Remain
            },
          ]
        },
        {
          path:'/finance',
          name:'Finance',
          component: Finance,
          children:[
            {
              path:'/',
              component: Accounting
            },
            {
              path:'/accounting',
              component: Accounting
            },
            {
              path:'/budget',
              component: Budget
            },
            {
              path:'/reportf',
              component: Reportf
            },
            {
              path:'/deposit',
              component: Deposit
            },
          ]
        },
        {
          path:'/travel',
          name:'Travel',
          component: Travel,
          children:[
            {
              path:'/',
              component: TravelNotes
            },
            {
              path:'/travel_notes',
              component: TravelNotes
            },
            {
              path:'/travel_routes',
              component: TravelRoutes
            },
            {
              path:'/travel_plan',
              component: TravelPlan
            }
          ]
        },
        {
          path:'/life',
          name:'Life',
          component: Life,
          children:[
            {
              path:'/',
              component: LifeDays
            },
            {
              path:'/life_days',
              component: LifeDays
            },
            {
              path:'/life_beautyplan',
              component: LifeBeautyPlan
            },
            {
              path:'/life_clothplan',
              component: LifeClothPlan
            }, {
              path:'/life_plan',
              component: LifePlan
            },
            {
              path:'/life_recipes',
              component: LifeRecipes
            },
            {
              path:'/life_records',
              component: LifeRecords
            },
            {
              path:'/life_ways',
              component: LifeWays
            }
          ]
        },
        {
          path:'/other',
          component: Other
        },
        {
          path:'/aboutme',
          component: AboutMe
        },
        {
          path:'/other',
          component: Other
        },
        {
          path: '/update',
          name: 'Update',
          component: Update
        }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component:Home,
      children:[
        {
          path:'/',
          name: 'Main',
          component: Main
        },
        {
          path:'/work',
          component: Work
        },
        {
          path:'/study',
          component:Study
        },
        {
          path:'/health',
          component: Health
        },
        {
          path:'/finance',
          component: Finance
        },
        {
          path:'/travel',
          component: Travel
        },
        {
          path:'/life',
          component: Life
        },
        {
          path:'/other',
          component: Other
        },
        {
          path:'/aboutme',
          component: AboutMe
        },
        {
          path:'/other',
          component: Other
        },
        {
          path: '/update',
          name: 'Update',
          component: Update
        },
        {
          path: '/english',
          name: 'English',
          component: English
        },
        {
          path: '/ittech',
          name: 'ItTech',
          component: ItTech
        },
        {
          path: '/reading',
          name: 'Reading',
          component: Reading
        }
          ]
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]

})
