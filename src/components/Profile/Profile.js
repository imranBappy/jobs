import React from "react";
import { connect } from "react-redux";
import profile from "../../assets/images/user-avater.png";
import classes from "../../styles/profile.module.css";
const Profile = ({ user: { displayName, email, emailVerified, uid } }) => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__pic}>
        <img src={profile} alt="profile" />
      </div>
      <div className={classes.profile__name}>
        <h2 className={"user__name"}>
          {displayName}
          {emailVerified && (
            <span
              style={{ display: "flex", alignItems: "center" }}
              className="material-icons-outlined"
            >
              verified
            </span>
          )}
        </h2>
      </div>
      <div className={classes.profile__info}>
        <p>
          <b>Email</b>: {email}
        </p>
        <p>
          {" "}
          <b>You Reference ID</b> : &nbsp;
          <button
            onClick={(e) => {
              navigator.clipboard.writeText(uid);
              alert(`Your ref id: ${uid}`);
            }}
            title={uid}
            className={`${classes.copy__btn}`}
          >
            Copy
          </button>
        </p>
        <p>
          You Accout is
          {!emailVerified ? <b> Not verified </b> : <b> verified</b>}
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(Profile);
