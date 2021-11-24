import React from "react";
import { connect } from 'react-redux';
import { alertAction } from './../../redux/actions/alertAction';

const Alert = (props) => {
    const handleAlert = () =>{
        props.alertAction({message:'', error:false})
    }
  return (
    <div className={`alert alert-${props.alert.error? 'danger': 'success'} alert-dismissible fade show`} role="alert">
      {props.alert.message}
      <button
        onClick={handleAlert}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};
const mapStateToProps = state =>({alert: state.alert})
export default connect(mapStateToProps,{alertAction})(Alert) ;
