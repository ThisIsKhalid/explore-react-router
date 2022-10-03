import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Main from './layout/Main';
import Products from './components/Products/Products';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {path: '/', element: <Home></Home>},
        {path: 'home', element: <Home></Home>},
        {
          path: 'friends', 
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends></Friends>
        },
        {path: 'about', element: <About></About> },
        {path: 'product', element: <Products></Products>},
        {
          path: '/friend/:friendId',
          loader: async ({params}) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
            // console.log(params.friendId);
          },
          element: <FriendDetails></FriendDetails>
        }
      ] 
    },
    {path: '*', element: <div>Not Found</div>}
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
