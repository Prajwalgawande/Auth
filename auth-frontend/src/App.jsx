import AllRoutes from './components/AllRoutes';
import Login from './components/login-register/Login';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css'


function App() {

  return (
    <>
      <ToastContainer />
      <AllRoutes>
        <Login  />
      </AllRoutes>
    </>
  )
}

export default App