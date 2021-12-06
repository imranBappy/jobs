import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAuthAction } from "../../redux/actions/authAction";
import classes from "../../styles/Mony.module.css";

const Many = (props) => {
  useEffect(() => {
    props.getAuthAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
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
      <br />
      <div className={classes.many__wrapper}>
        <div className={classes.many}>
          <p className="text-muted">Total Withdraw </p>
          <h3>
            <span>$</span> {0}
          </h3>
        </div>
        <div className={`${classes.many__icon} `}>
          <span className="bg-dark">$</span>
        </div>
      </div>
      <div className="d-grid gap-2">
        <Link className="btn btn-dark mt-4" to={`/withdraw`}>
          Withdraw <span className="bg-dark">$</span>
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { getAuthAction })(Many);
