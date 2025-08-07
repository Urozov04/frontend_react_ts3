import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

const Dashboard = lazy(() => import ('./dashboard'));
const Home = lazy(() => import ('./dashboard/home'));
const Shorts = lazy (() => import ("./dashboard/shorts"))
const Subscriptions = lazy (() => import("./dashboard/subscriptions"))
const History = lazy(() => import("./dashboard/history"))
const Playlists = lazy(() => import("./dashboard/playlists"))
const Videos = lazy(() => import("./dashboard/videos"))
const Later = lazy (() => import("./dashboard/later"))
const Likes = lazy (() => import ("./dashboard/likes"))
const Settings = lazy (() => import ("./dashboard/settings"))
const Report = lazy (() => import("./dashboard/report"))
const Help = lazy (() => import ("./dashboard/help"))
const Feedback =  lazy (() => import ("./dashboard/feedback"))


const MainRouters = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
        {useRoutes([
            {
                path: "/",
                element: <Dashboard/>,
                children: [
                    {index: true, element: <Home/>},
                    {path: "shorts", element: <Shorts/>},
                    {path: "subscriptions", element: <Subscriptions/>},
                    {path: "history", element: <History/>},
                    {path: "playlists", element: <Playlists/>},
                    {path: "videos", element: <Videos/>},
                    {path: "later", element: <Later/>},
                    {path: "likes", element: <Likes/>},
                    {path: "settings", element: <Settings/>},
                    {path: "report", element: <Report/>},
                    {path: "help", element: <Help/>},
                    {path: "feedback", element: <Feedback/>}                   
                ]
            }
        ])

        }
    </Suspense>
  )
}

export default React.memo(MainRouters)