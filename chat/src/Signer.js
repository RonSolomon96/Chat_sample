import './Logger.css';
import React from 'react';
//display sign in screen
function Signer(props) {
  return (
    <div>
      <div className="heading">
        Hello guest
      </div>
      <div className="mb-3">
        <p id='Logfont' style={{ marginLeft: "9.55%" }}>Sign up</p>
        <form className='log-form'>
          <div>
            <label className="form-fields">Username</label>
          </div>
          <div>
            <input type="text" className="input-field" id="Username" placeholder='Username' required onChange={props.handleChange}></input>
          </div>
          <div>
            <label className="form-fields" style={{ marginTop: "5%" }}>Nickname</label>
          </div>
          <div>
            <input type="text" className="input-field" id="Nickname" placeholder='Nickname' required onChange={props.handleChange} ></input>
          </div>
          <div>
            <label className="form-fields" style={{ marginTop: "5%" }}>Password</label>
          </div>
          <div>
            <input type="password" className="input-field" id="Password" placeholder='password' required onChange={props.handleChange}></input>
          </div>
          <div>
            <label className="form-fields" style={{ marginTop: "5%" }}>Password again</label>
          </div>
          <div>
            <input type="password" className="input-field" id="Password2" placeholder='password again' required onChange={props.handleChange}></input>
          </div>
          <div>
            <label className="form-fields" style={{ marginTop: "5%" }}>Choose profile photo</label>
          </div>
          <div>
            <input type="file" className="input-field" id="photo" onChange={props.handleProfilePhoto}></input>
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary" onClick={props.handleSign} style={{ marginTop: "10%" }}>Sign up</button>
          <br></br>
          <button type="submit" className="btn btn-primary" onClick={props.handleClick} >Back to login</button>

        </form>
      </div>
    </div>
  )
}

export default Signer