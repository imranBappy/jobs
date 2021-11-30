import { connect } from "react-redux";
import { Link } from "react-router-dom";
import mlmPkg from "../../img/mlm-pkg.jpg";
import { basicSubscribAction } from "../../redux/actions/tranxAction";
import styles from "../../styles/Home.module.css";
const Pricing = (props) => {
  const { user } = props;

  return (
    <div id="pricing">
      <div className="card-group">
        <div className={`card mx-5 ${styles.card__wrap}`}>
          <img src={mlmPkg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Basic</h4>
            <p className="card-text">
              <small className="text-muted">For free income</small>
            </p>
            <h3>Free</h3>

            <ul>
              <li>Every day earn limit 15 taka</li>
              <li>Reference 5 taka</li>
              <li>User reference unlimited</li>
            </ul>

            <div className="d-grid">
              <button
                className={`btn btn-${
                  user.package === "basic" ? "secondary" : "primary"
                }`}
                type="button"
                onClick={
                  user.package === "basic"
                    ? () => {}
                    : () => props.basicSubscribAction(user)
                }
              >
                {user.package === "basic" ? "SUBSCRIBED" : "SUBSCRIBE"}
              </button>
            </div>
          </div>
        </div>

        <div className={`card mx-5 ${styles.card__wrap}`}>
          <img src={mlmPkg} className="card-img-top" alt="card" />
          <div className="card-body">
            <h4 className="card-title">Standard</h4>
            <p className="card-text">
              <small className="text-muted">For medium income</small>
            </p>
            <h3>
              <span className={styles.taka}>৳</span> 1100
            </h3>
            <ul>
              <li>Every day earn limit 45 taka</li>
              <li>Reference 100 taka</li>
              <li>User reference unlimited</li>
            </ul>

            <div className="d-grid">
              <Link
                className="btn btn-primary"
                type="button"
                to={`/pricing?p=standard`}
              >
                SUBSCRIBE
              </Link>
            </div>
          </div>
        </div>
        <div className={`card mx-5 ${styles.card__wrap}`}>
          <img src={mlmPkg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Premium</h4>
            <p className="card-text">
              <small className="text-muted">For free income</small>
            </p>
            <h3>
              <span className={styles.taka}>৳</span> 2200{" "}
            </h3>

            <ul>
              <li>Every day earn limit 90 taka</li>
              <li>Reference 170 taka</li>
              <li>User reference unlimited</li>
            </ul>

            <div className="d-grid">
              <Link
                className="btn btn-primary"
                type="button"
                to={`/pricing?p=premium`}
              >
                SUBSCRIBE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: { ...state.user },
});

export default connect(mapStateToProps, { basicSubscribAction })(Pricing);
