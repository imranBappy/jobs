import { useState } from "react";
import { connect } from "react-redux";
import useQuery from "../../hooks/useQuery";
import { tranxPostAction } from "../../redux/actions/tranxAction";

function PricingForm(props) {
  const [taka, setTaka] = useState({});
  let query = useQuery("");
  const { name, email } = props.user;
  const handleSubmit = (e) => {
    e.preventDefault();
    props.tranxPostAction({
      ...taka,
      name,
      email,
      status: false,
      package: query.get("p"),
    });
  };
  // Name:
  // Email:
  // Package :basice
  // Number:
  // textId:
  // status: true

  return (
    <>
      <h3 className="mt-2">SUBSCRIBE THEN PACKAGE</h3>
      <p className="text-muted">Please fill up the from</p>
      <form onSubmit={handleSubmit}>
        <div className={`input-group mb-2`}>
          <span className="input-group-text" id="basic-addon1">
            Number
          </span>
          <input
            onChange={(e) => setTaka({ ...taka, number: e.target.value })}
            type="text"
            className="form-control"
            placeholder="Number"
            aria-label="number"
            aria-describedby="basic-addon1"
            name="number"
          />
        </div>

        <div className={`input-group mb-2`}>
          <span className="input-group-text" id="basic-addon1">
            Trnx Id
          </span>
          <input
            required
            onChange={(e) => setTaka({ ...taka, trnxId: e.target.value })}
            name="password"
            type="password"
            className="form-control"
            placeholder="Trnx Id"
            aria-label="Trnx Id"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-secondary">
            SUBSCRIBED
          </button>
        </div>
      </form>

      <br />
    </>
  );
}

const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps, { tranxPostAction })(PricingForm);
