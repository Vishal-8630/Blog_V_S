import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        isAuthenticated: false,
        user: null
    });

    // Function to handle login
    const login = (userData) => {
        // Add your login logic here
        localStorage.setItem('user', JSON.stringify(userData));
        setUser({
            isAuthenticated: true,
            user: userData
        });
    };

    // Function to handle logout
    const logout = () => {
        // Add your logout logic here
        localStorage.removeItem('user');
        setUser({
            isAuthenticated: false,
            user: null
        });
    };

    // Fetch user data from local storage on component mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser({
                isAuthenticated: true,
                user: JSON.parse(storedUser)
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Create the useAuth hook
const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;