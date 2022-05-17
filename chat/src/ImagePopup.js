
import Img from "./img-icon.png"

//display the image button and its logic
function ImagePopup(props) {

  return (
    <div className="App">
      <button type="button" className="chatnav" data-bs-toggle="modal" data-bs-target="#exampleModal1">
      <i className="bi bi-card-image"></i>
      </button>

      <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">Choose Image</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input type="file" className="form-control" id="Img-popup" onChange={props.handleFile} accept="image/*"></input>
            </div>

            <div className="modal-footer">
              <button type="button" value = "Image" className="btn btn-secondary popupbtn" onClick={props.addToChat} data-bs-dismiss="modal">send image</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;