import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { Layout } from './components/Layout'
import { Login } from './components/Login';
import { SetupInterceptors } from './components/SetupInterceptors'
import { RestaurantForm } from './components/RestaurantForm';
import { RegisterForm } from './components/RegisterForm';

function NavigateFunctionComponent(props) {
  let navigate = useNavigate();
  SetupInterceptors(navigate);
  return <></>;
}

function App() {
  
  return (
    <div className="App">
      <div className='navBar'>
        <BrowserRouter>
          {<NavigateFunctionComponent />}
          <Routes>
              <Route path="/" element={<Layout />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<RegisterForm />}></Route>
              <Route path="/add" element={<RestaurantForm />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
