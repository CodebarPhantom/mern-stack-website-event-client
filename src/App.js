import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Table from './components/Table';
import Input from './components/Input';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter,
  useParams
} from "react-router-dom";

function Home(){
  return <h1>Home</h1>
}

function Categories(){
  return (
    <>
      <h1>Categories</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Categories</th>
          </tr>
        </thead>   
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <Link to='/categories/4545454'>Seminar</Link> 
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <Link to='/categories/1212121'>Gamer</Link> 
            </td>
          </tr>
        </tbody>     
      </table>
    </>
  )
}

function CategoriesDetail(){
  let {id} = useParams();
  return <h1>Categories: {id}</h1>
}

function About(){
  return <h1>About</h1>
}
function App() {
 
  return (   
  
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">categories</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>

      </ul>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/categories/:id' element={<CategoriesDetail/>}/>
        <Route path='/about' element={<About/>}/>

      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
