import React, { useState } from "react";

const WithdrawInput = () => {
  const [input, setInput] = useState({});
  const handleSubmit = (e) => {};
  return (
    <>
      <h3 className="mt-2">SUBSCRIBE THEN PACKAGE</h3>
      <p className="text-muted">Please fill up the from</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <span className="input-group-text">0.00</span>
          <input
            placeholder="Enter amount"
            type="text"
            className="form-control"
            aria-label="Dollar amount (with dot and two decimal places)"
          />
        </div>
        <div className={`input-group mb-2`}>
          <span className="input-group-text" id="basic-addon1">
            Number
          </span>
          <input
            onChange={(e) => setInput({ ...input, number: e.target.value })}
            type="text"
            className="form-control"
            placeholder="Number"
            aria-label="number"
            aria-describedby="basic-addon1"
            name="number"
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text" for="inputGroupSelect01">
            Choose Method
          </label>
          <select className="form-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="Bkash">Bkash</option>
            <option value="Bkash">Bkash</option>
            <option value="Nagad">Nagad</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" for="inputGroupSelect01">
            Options
          </label>
          <select className="form-select" id="inputGroupSelect01">
            <option selected>Personal</option>
            <option value="2">Agent</option>
          </select>
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
};

export default WithdrawInput;
