/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Route } from 'react-router';
import Layout,{Home, _Register, _Login, _Dashboard, PrivateRoute} from './components/Layout/Layout';
const App = () => {
  return (
    <>
       <Layout>
         <Route exact path='/' component={Home} />
         <Route path='/register' component={_Register} />
         <Route path='/login' component={_Login} />
         <PrivateRoute path='/dashboard'>
          <_Dashboard/>
          </PrivateRoute>
       </Layout>
    </>
  );  
};

export default App;