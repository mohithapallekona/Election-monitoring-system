import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard'; // Adjust the path based on your folder structure
import Login from './Components/Login'; // Adjust the path based on your folder structure
import Signup from './Components/Signup'; // Adjust the path based on your folder structure
import About from './Components/About'; // Adjust the path based on your folder structure
import Logout from './Components/logout'; // Adjust the path based on your folder structure
import UserDashboard from './Components/UserDashboard';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
