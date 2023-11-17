
import React from 'react';
import StudentLoginForm from '../components/StudentLoginForm';
import AdminLogin from '../components/adminLogin';
import "./Home.css"
const Home = () => {


    return (

        <div>
            <div>

                <nav >
                    <h1 >Welcome To Login Page.....</h1>

                </nav>

            </div>

            <div className="login-forms-container">
          <StudentLoginForm className="login-form"/>
          <AdminLogin className="login-form"/>
    </div>
          
        </div>


    )

};

export default Home;