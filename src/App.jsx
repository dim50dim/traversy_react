
import{Route, createBrowserRouter,RouterProvider, createRoutesFromElements} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLaoyt from './layots/MainLaoyt';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/'  element={<MainLaoyt/>}>
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

