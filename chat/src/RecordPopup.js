
//display the record button and its logic
function RecordPopup(props) {

  return (
    <div className="App">
      <button type="button" className="chatnav" data-bs-toggle="modal" data-bs-target="#exampleModal5">
      <i className="bi bi-mic"></i>
      </button>
      <div className="modal fade" id="exampleModal5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">Record</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button type="submit" className="form-control" onClick={props.record} >Start record </button>
              <button type="submit" className="form-control" onClick={props.stopRecord} >Stop record </button>
            </div>

            <div className="modal-footer">
              <button type="button" value = "Voice" className="btn btn-secondary popupbtn" onClick={props.addToChat} data-bs-dismiss="modal">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordPopup;