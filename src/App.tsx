import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { NotificationContainer } from './components/Notification/NotificationContainer';
import Login from './pages/login/Login';
import Tickets from './pages/tickets/Tickets';
import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress } from '@mui/material';

const App: React.FC = () => {
  const {isAuthenticated, isLoading} = useAuth0();

  if(isLoading) {
    return (
    <Layout>
      <CircularProgress />
    </Layout>)
  }

  if(!isAuthenticated) {
    return(
      <Layout>
        <Routes>
          <Route path='/login'element={<Login/>}/>
          <Route path='*' element={<Navigate replace to="/login"/>}/>
        </Routes>
        <NotificationContainer/>
      </Layout>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path='/'element={<Tickets/>}/>
        <Route path='*' element={<Navigate replace to="/"/>}/>
      </Routes>
      <NotificationContainer/>
    </Layout>
  )
};

export default App