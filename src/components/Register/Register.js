
export default function Register({ error, handleChange, handleSubmit}) {

  return (
    <>
        <h3 className="mt-2">Register Form</h3>
        <p className="text-muted">Please fill up the from</p>
        <form>
        <div className={`input-group mb-${error.name?1:3}`}>
            <span className="input-group-text" id="basic-addon1">
              Full Name
            </span>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Full Name"
              aria-label="name"
              aria-describedby="basic-addon1"
              name='name'
            />
          </div>
          {
            error.name && <p className="text-danger">{error.name}</p>
          }
          <div className={`input-group mb-${error.email?1:3}`}>
            <span className="input-group-text" id="basic-addon1">
              Email
            </span>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="email"
              aria-describedby="basic-addon1"
              name='email'
            />
          </div>
          {
            error.email && <p className="text-danger">{error.email}</p>
          }
          <div className={`input-group mb-${error.username?1:3}`}>
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name='username'
            />
          </div>
          {
            error.username && <p className="text-danger">{error.username}</p>
          }

          <div className={`input-group mb-${error.username?1:3}`}>
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Reference"
              aria-label="ref"
              aria-describedby="basic-addon1"
              name='ref'
            />
          </div>

          <div className={`input-group mb-${error.password?1:3}`}>
            <span className="input-group-text" id="basic-addon1">
              Password
            </span>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </div>
          {
            error.password && <p className="text-danger">{error.password}</p>
          }

          <div className={`input-group mb-${error.confirmPassword?1:3}`}>
            <span className="input-group-text" id="basic-addon1">
            Confirm Password
            </span>
            <input
              onChange={handleChange}
              name="confirmPassword"
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
              aria-describedby="basic-addon1"
            />
          </div>
          {
            error.confirmPassword && <p className="text-danger">{error.confirmPassword}</p>
          }


          <div className="d-grid">
            <button 
              type="submit" 
              className="btn btn-primary" 
              onClick={handleSubmit}
              >
              Register
            </button>
          </div>
        </form>
        <br />
    </>
  );
}
