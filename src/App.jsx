
import{Route, createBrowserRouter,RouterProvider, createRoutesFromElements} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
const router = createBrowserRouter(
  createRoutesFromElements(
  // <Route path='/jobs'  element={<JobsPage/>}>
  <Route path='/'  element={<MainLayout/>}>
  <Route index element={<HomePage/>}/>
  </Route>
 )
)

export default function App() {

  return(
     <>
      <RouterProvider router ={router}/>
     </>
  )
};

