
import{Route, createBrowserRouter,RouterProvider, createRoutesFromElements} from 'react-router-dom';
import HomePage from './pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/about' index element={<HomePage/>} />)
)
export default function App() {

  return(
     <>
      <RouterProvider router ={router}/>
     </>
  )
};

