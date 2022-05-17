
//display the contact's card 
function Card(props) {

  var time;
  var lastmsg;
  var help;


  //save the last message that was sent and the time it was sent
  for(var i = 0; i < props.messages.length; i++) {
    if (props.messages[i].Username1 === props.log.Username
      && props.messages[i].Username2 === props.friend.Username) {
      if (props.messages[i].chat.length !== 0) {
      help = props.messages[i].chat[props.messages[i].chat.length - 1];
      time = help.time;
      console.log(help)
      if(help.str !== '') {
        //if the string message is too long:
        if(help.str.length > 12) {
          lastmsg = help.str.substr(0, 13) + "...";
        }else{
          lastmsg = help.str;
        }
      }
      else if (help.image !== ''){
        lastmsg = "Image was sent";
      }
      else if (help.video !== ''){
        lastmsg = "Video was sent";
      }
      else {
        console.log(help.record);
        lastmsg = "Record was sent";
      }
      }
      break;
    }
  }

  var photo;
  //save the friend profile photo
  for(var i = 0; i < props.members.length; i++) {
    if (props.members[i].Username === props.friend.Username) {
      photo = props.members[i].profilePhoto;
      break;
    }
  }
  
  //if the friend is the friend that we are currently talking with
  if(props.friend.Username === props.currentFriend) {
    return (<div>
      <button id="rcorners1" value={props.friend.Username} onClick={props.chatFinder}>
        
          <div className="row">
            <div className="col-3">
            <img src={photo} className="contact-img" />
            </div>
            <div className="col-6">
              <p id = "cardNick">{props.friend.nickname}</p>
              <p>{lastmsg}</p>
            </div>
            <div className="col-3">
            <p>{time}</p>
            </div>
          </div>
        
      </button>
    </div>);
  }
  //if not:
  else {
    return (<div>
      <button id="rcorners" value={props.friend.Username} onClick={props.chatFinder}>
        
          <div className="row">
            <div className="col-3">
            <img src={photo} className="contact-img" />
            </div>
            <div className="col-6">
              <p id = "cardNick">{props.friend.nickname}</p>
              <p>{lastmsg}</p>
            </div>
            <div className="col-3">
            <p>{time}</p>
            </div>
          </div>
        
      </button>
    </div>);
  }
}

export default Card