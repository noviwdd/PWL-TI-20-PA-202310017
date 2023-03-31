import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layouts from '../layouts/Layouts'
import Explore from '../modules/components/Explore/Explore'
import Feeds from '../modules/components/Explore/widgets/Feeds'
import FYP from '../modules/components/Explore/widgets/FYP'
import Reels from '../modules/components/Explore/widgets/Reels'
import Home from '../modules/components/Homes/Home'
import Messages from '../modules/components/Messages/Messages'
import Login from '../layouts/components/login/Login'
import Page404 from '../layouts/components/page-response/Page404'

export default function AppRoute() {
  const routes = [
    { path: '/home', component: Home },
    {
      path: '/explore', component: Explore, children: [
        { path: 'feeds', component: Feeds },
        { path: 'reels', component: Reels },
        { path: 'fyp', component: FYP },
      ]
    },
    { path: '/messages', component: Messages },
  ]

  return (
    <Routes>
      <Route
        index element={<Layouts><Home /></Layouts>}
      />
      {routes.map((v, index) => v.children ? (
        <Route path={v.path} element={<Layouts><v.component /></Layouts>} key={index}>
          {v.children.map((e, index) => (
            <Route path={e.path} element={<e.component />} key={index} />
          ))}
        </Route>
      ) : (
        <Route path={v.path} element={<Layouts><v.component /></Layouts>} key={index} />
      )
      )}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
