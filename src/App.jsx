import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar";
import ViewAllJobs from "./components/ViewAllJobs";
import{Route, createBrowserRouter,RouterProvider} from 'react-router-dom';


export default function App() {

  return(
    <>
  <Navbar/>
  <Hero/>
  <HomeCards/>
  <JobListings/>
  <ViewAllJobs/>
    </>
  )
};

