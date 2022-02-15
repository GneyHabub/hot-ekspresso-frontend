import { createBrowserHistory } from 'history';
import { observer } from 'mobx-react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { NotificationContainer } from './components/Notification/NotificationContainer';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Tickets from './pages/tickets/Tickets';
import AppStore from './store/store';

const App = observer(() => {

  const token = AppStore.token;

  if(!token) {
    return(
      <Layout>
        <Routes>
          <Route path='/login'element={<Login/>}/>
          <Route path='/register'element={<Register/>}/>
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
});

export default App