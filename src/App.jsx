import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar";
import ViewAllJobs from "./components/ViewAllJobs";
import{Route, createBrowserRouter,RouterProvider, createRoutesFromElements} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>My App</h1>} />)
)
export default function App() {

  return(
     <>
        return <RouterProvider router ={router}/>
     </>
  )
};

