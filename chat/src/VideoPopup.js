

function VideoPopup(props) {

  return (
    <div className="App">
      <button type="button" className="chatnav" data-bs-toggle="modal" data-bs-target="#exampleModal2">
      <i className="bi bi-camera-reels"></i>
      </button>

      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">Choose Video</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input type="file" className="form-control" id="Video-popup" onChange={props.handleFile} accept=".mov,.mp4"></input>
            </div>

            <div className="modal-footer">
              <button type="button" value = "Video" className="btn btn-secondary popupbtn" onClick={props.addToChat} data-bs-dismiss="modal">Send video</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPopup;