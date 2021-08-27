import React from 'react';
import './styles.css';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

    const diffToast  = () => {
      toast("Login sucessfull!", {
        position: "top-center",
      });
    }

  return (
    <div className="main-div">
          <h2>Welcome to signin page</h2>
          <button className="btn btn-primary" onClick={diffToast}>Login</button>
          <ToastContainer />
    </div>
  );
}

