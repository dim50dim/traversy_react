
// import{Route, createBrowserRouter,RouterProvider, createRoutesFromElements} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage'
import Css from './pages/Css';
// const router = createBrowserRouter(
//   createRoutesFromElements(
//    <Route path='/' element={<MainLayout />}>
//       <Route index element={<HomePage />} />
//       <Route path='jobs' element={<JobsPage />} />
//       <Route path='*' element={<NotFoundPage />} />
//       <Route path='/jobs/:id' element={<JobsPage />} />

//     </Route>
//  )
// )

export default function App() {

  return(
     <>
  <Css/>
     </>
  )
};

