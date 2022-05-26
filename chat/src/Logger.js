import './Logger.css';
//display log in screen
function Logger(props) {

  return (
    <div>
      <div className="heading">
        Hello guest
      </div>
      <div className="mb-3">
        <p id='Logfont'>Log in</p>
        <form className='log-form'>
          <div>
            <label className="form-fields form-label" >Username</label>
          </div>
          <div>
            <input className="input-field" id="Username" placeholder="Username" onChange={props.handleLog} required style={{ marginTop: "-20%" }}></input>
          </div>
          <div>
            <label className="form-fields form-label" style={{ marginTop: "10%" }}>Password</label>
          </div>
          <div>
            <input type="password" className="input-field" placeholder="password" id="Password" onChange={props.handleLog} required style={{ color: "black" }}></input>
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary" onClick={props.login} style={{ marginTop: "10%" }} >Log in </button>
          <br></br>
          <button type="submit" className="btn btn-primary" onClick={props.handleClick} >Sign up</button>
        </form>
      </div>
      <div className="heading" >
        <a href="http://localhost:5124/RatingObjs/Index"> Rate us</a>
      </div>
    </div>);
}
export default Logger