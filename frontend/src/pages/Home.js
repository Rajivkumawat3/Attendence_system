
import React from 'react';
import StudentLoginForm from '../components/StudentLoginForm';
import AdminLogin from '../components/adminLogin';

const Home = () => {

    const h1Style = {
        color: 'blue',
        top: '60px',
        left: '90px',
        position: 'absolute',
        zIndex: '1',
    };

    const navStyle = {
        position: 'relative',
        zIndex: '2',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',

    };
    return (

        <div>
            <div>

                <nav style={navStyle}>
                    <h1 style={h1Style}>Welcome To Login Page.....</h1>

                </nav>

            </div>

            <div className="login-forms-container">
          <StudentLoginForm />
          <AdminLogin/>
    </div>
          
        </div>


    )

};

export default Home;