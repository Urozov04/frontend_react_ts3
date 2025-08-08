import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'


const Dashboard = lazy(() => import ('./dashboard'));

const Home = lazy(() => import ('./dashboard/home'))
const HomeFootball = lazy(() => import ("./dashboard/home/football"))
const HomeBox = lazy(() => import ("./dashboard/home/box"))
const HomeMovie = lazy(() => import ("./dashboard/home/movie"))


const Shorts = lazy (() => import ("./dashboard/shorts"))
const Football = lazy(() => import("./dashboard/shorts/football"));
const Box = lazy(() => import("./dashboard/shorts/box"));
const Movie = lazy(() => import("./dashboard/shorts/movie"));

const Subscriptions = lazy (() => import("./dashboard/subscriptions"))
const SubsFootball = lazy(() => import("./dashboard/subscriptions/football"))
const SubsBox = lazy(() => import("./dashboard/subscriptions/box"))
const SubsMovie = lazy(() => import("./dashboard/subscriptions/movie"));

const History = lazy(() => import("./dashboard/history"))
const HisFootball = lazy (() => import("./dashboard/history/football"))
const HisBox = lazy (() => import("./dashboard/history/box"))
const HisMovie = lazy(() => import("./dashboard/history/movie"));

const Playlists = lazy(() => import("./dashboard/playlists"))
const PlayFootball = lazy(() => import("./dashboard/playlists/football"))
const PlayBox = lazy(() => import("./dashboard/playlists/box"))
const PlayMovie = lazy(() => import("./dashboard/playlists/movie"));

const Videos = lazy(() => import("./dashboard/videos"))
const VideoFootball = lazy(() => import("./dashboard/videos/football"))
const VideoBox = lazy(() => import("./dashboard/videos/box"))
const VideoMovie = lazy(() => import("./dashboard/videos/movie"));

const Later = lazy (() => import("./dashboard/later"))
const LaterFootball = lazy (() => import ("./dashboard/later/football"))
const LaterBox = lazy(() => import("./dashboard/later/box"))
const LaterMovie = lazy(() => import("./dashboard/later/movie"))

const Likes = lazy (() => import ("./dashboard/likes"))
const LikeFootball = lazy(() => import ("./dashboard/likes/football"))
const LikeBox = lazy(() => import ("./dashboard/likes/box"))
const LikeMovie = lazy(() => import("./dashboard/likes/movie"));

const Settings = lazy (() => import ("./dashboard/settings"))
const Family = lazy(() => import ("./dashboard/settings/family"))
const Google = lazy(() => import ("./dashboard/settings/google"))
const Member = lazy(() => import("./dashboard/settings/membership"));

const Report = lazy (() => import("./dashboard/report"))
const RepoFamily = lazy(() => import ("./dashboard/report/family"))
const RepoGoogle = lazy(() => import ("./dashboard/report/google"))
const RepoMember = lazy(() => import("./dashboard/report/membership"));

const Help = lazy (() => import ("./dashboard/help"))
const HelpFamily = lazy (() => import ("./dashboard/help/family"))
const HelpGoogle = lazy(() => import("./dashboard/help/google"));
const HelpMember = lazy(() => import("./dashboard/help/membership"));

const Feedback =  lazy (() => import ("./dashboard/feedback"))
const FeedbackFootball = lazy(() => import("./dashboard/feedback/football"));
const FeedbackBox = lazy(() => import("./dashboard/feedback/box"));
const FeedbackMovie = lazy(() => import("./dashboard/feedback/movie"));



const MainRouters = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      {useRoutes([
        {
          path: "/",
          element: <Dashboard />,
          children: [
            { path: "", element: <Home />,
              children: [
                {index: true, element: <HomeFootball/>},
                {path: "box", element: <HomeBox/>},
                {path: "movie", element: <HomeMovie/>},
              ]
             },
            {
              path: "shorts",
              element: <Shorts />,
              children: [
                { index: true, element: <Football /> },
                { path: "box", element: <Box /> },
                { path: "movie", element: <Movie /> },
              ],
            },
            {
              path: "subscriptions",
              element: <Subscriptions />,
              children: [
                { index: true, element: <SubsFootball /> },
                { path: "box", element: <SubsBox /> },
                { path: "movie", element: <SubsMovie /> },
              ],
            },
            {
              path: "history",
              element: <History />,
              children: [
                { index: true, element: <HisFootball /> },
                { path: "box", element: <HisBox /> },
                { path: "movie", element: <HisMovie /> },
              ],
            },
            {
              path: "playlists",
              element: <Playlists />,
              children: [
                { index: true, element: <PlayFootball /> },
                { path: "box", element: <PlayBox /> },
                { path: "movie", element: <PlayMovie /> },
              ],
            },
            {
              path: "videos",
              element: <Videos />,
              children: [
                { index: true, element: <VideoFootball /> },
                { path: "box", element: <VideoBox /> },
                { path: "movie", element: <VideoMovie /> },
              ],
            },
            {
              path: "later",
              element: <Later />,
              children: [
                { index: true, element: <LaterFootball /> },
                { path: "box", element: <LaterBox /> },
                { path: "movie", element: <LaterMovie /> },
              ],
            },
            {
              path: "likes",
              element: <Likes />,
              children: [
                { index: true, element: <LikeFootball /> },
                { path: "box", element: <LikeBox /> },
                { path: "movie", element: <LikeMovie /> },
              ],
            },
            {
              path: "settings",
              element: <Settings />,
              children: [
                { index: true, element: <Family /> },
                { path: "box", element: <Google /> },
                { path: "movie", element: <Member /> },
              ],
            },
            {
              path: "report",
              element: <Report />,
              children: [
                { index: true, element: <RepoFamily /> },
                { path: "box", element: <RepoGoogle /> },
                { path: "movie", element: <RepoMember /> },
              ],
            },
            {
              path: "help",
              element: <Help />,
              children: [
                { index: true, element: <HelpFamily /> },
                { path: "box", element: <HelpGoogle /> },
                { path: "movie", element: <HelpMember /> },
              ],
            },
            {
              path: "feedback",
              element: <Feedback />,
              children: [
                { index: true, element: <FeedbackFootball /> },
                { path: "box", element: <FeedbackBox /> },
                { path: "movie", element: <FeedbackMovie /> },
              ],
            },
          ],
        },
      ])}
    </Suspense>
  );
}

export default React.memo(MainRouters)