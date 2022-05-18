import React, { useState } from 'react';
import "./Cpopup.css";

//display the "add friend" button and its logic
function Cpopup(props) {

  
  return (
    <div className="App">
      <button type="button" className = "chatnav3"   data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i className="bi bi-person-plus"></i>
        &nbsp; 
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add new contact</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div>
              <input className="form-control" id='cpopup-input1' placeholder="Type here contact's id" onChange= {props.handelCpopup}></input>
              </div>
              <div className="modal-body"></div>
              <input className="form-control" id='cpopup-input2' placeholder="Type here contact's nickname" onChange= {props.handelCpopup}></input>
              </div>
              <div className="modal-body">
              <input className="form-control" id='cpopup-input3' placeholder="Type here contact's server" onChange= {props.handelCpopup}></input>
            </div>
            <div className="modal-footer">
              <button type="button" value={props.newFriend} className="btn btn-primary popupbtn" onClick={props.add} data-bs-dismiss="modal">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cpopup;