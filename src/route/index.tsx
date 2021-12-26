import AuthProvider, { AuthContext }  from 'auth';
import FrameLinker from 'components/framelinker';
import Home from 'components/home';
import React, { useContext } from 'react';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

function RequireAuth({children}: any) {
    const auth = useContext(AuthContext);
    const location = useLocation();    
    return auth?.token ? children : <Navigate to='/auth' state={{ from: location }}/>;
}

function AppRouter() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<RequireAuth><Home /></RequireAuth>}/>
                <Route path="/auth" element={<FrameLinker />}/>
            </Routes>
        </AuthProvider>
    );
}

export default AppRouter;