import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../../pages/home';
import _Login from '../../pages/login';
import _Register from '../../pages/register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Alert from '../Alert/Alert';
import { connect } from 'react-redux';
import _Dashboard from '../../pages/dashboard';

const Layout = (props) => {
    return (
        <>
            <Navbar/>
            <div className="container">
                {!!props.alert.message && <Alert/>}
                {props.children}
            </div>
        </>
    );
};

export {PrivateRoute, Home, _Login, _Register, _Dashboard};
const matStateToProps = state => ({
    alert:state.alert
})
export default connect(matStateToProps)(Layout) ;