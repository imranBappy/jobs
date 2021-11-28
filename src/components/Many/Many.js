import React from "react";
import { connect } from "react-redux";
import classes from "../../styles/Mony.module.css";

const Many = (props) => {
  return (
    <div className={classes.many__wrapper}>
      <div className={classes.many}>
        <p className="text-muted">Total Earning </p>
        <h3>
          <span>$</span> {props.user.balance}
        </h3>
      </div>
      <div className={`${classes.many__icon} `}>
        <span className="bg-dark">$</span>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(Many);
