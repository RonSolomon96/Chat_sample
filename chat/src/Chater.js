import axios from 'axios'
import Cpopup from './Cpopup';
import Friendlist from './Friendlist';
import './Chater.css';
import ChatBox from './ChatBox';
import Messageshow from './Messageshow';
import { useEffect, useState } from "react";

//display chat screen 
 function Chater(props) {

  const [friends,setFriends] = useState([]) ;
      //////////////////////////////////////////////////////////////////////////////
      useEffect( () =>  {
        async function findContact (){
          try {
            const response = await axios.get("http://localhost:5020/api/Contacts/" + props.log.Username);
            if (response.status == 200) {
              setFriends(response.data);
              return;
              
            } 
          }
          catch (error) {
          }
        }
       findContact();
      },[props.try2]);
    
      //////////////////////////////////////////////////////////////////////////
  

  //remove chat background color once the chat is open
  if(props.openChat === 1) {
    var chat = document.getElementById('col7');
    chat.style.backgroundColor = 'initial';
  }
  var photo;
  //save the logger profile
  for (var i = 0; i < props.members.length; i++) {
    if (props.members[i].Username === props.log.Username) {
      photo = props.members[i].profilePhoto;
      break;
    }
  }

  var photoFriend ;
  var nickname;
  //save the the profile of the friend that we are talking to right now
  for (var i = 0; i < props.members.length; i++) {
    if (props.members[i].Username === props.currentFriend) {
      photoFriend = props.members[i].profilePhoto;
      nickname = props.members[i].nickname;
      break;
    }
  }

  //for chat to scroll down whem message is added
  useEffect(() => {
    if(props.scrl === 1) {
      var msgdiv = document.getElementById("scrl");
    msgdiv.scrollTop = msgdiv.scrollHeight;
    props.setScrl(0);
    }
   
})
  return (
    <>
    <button className="sign-out" type="submit" onClick={props.handleClick} >Sign out</button>
      <div className="row" id='chat-body'>
        <div className="col ">
          <div className='row'>
            <ul>
            <li><div className="chatnav4" > <img src={photo} className="contact-img" /></div></li>
              <li><div className="chatnav4" >Hello {props.log.Username}</div></li>
              <li className="send"><Cpopup log={props.log} friends={friends} add={props.add} contacts={props.contacts}
                members={props.members} handelCpopup={props.handelCpopup} newFriend={props.newFriend} /></li>
            </ul>
          </div>
          <div className='row' id='scrl1'>
            <Friendlist friends={friends} chatFinder={props.chatFinder} log={props.log} members={props.members}
              currentFriend={props.currentFriend} />
          </div>
        </div>
        <div className="col-7" id="col7">
          <div className='row'>
            <ul>
              <li><div className="chatnav4" > <img src={photoFriend} className="contact-img" /></div></li>
              <li><div className="chatnav4" > {nickname}</div></li>
            </ul>
          </div>
          <div className='row' id='scrl' style={{ height: "92%" }}>
            <Messageshow chat={props.chat} openChat={props.openChat} />
          </div>
          <div className='row'>
            <ChatBox handleSend={props.handleSend} addToChat={props.addToChat}
              handleFile={props.handleFile} file={props.file} addFileToChat={props.addFileToChat}
              openChat={props.openChat} record={props.record} recordUrl={props.recordUrl} stopRecord={props.stopRecord}
              screenSize={props.screenSize}
              />
          </div>
        </div>

      </div>
      <ul>
      </ul>
    </>);
}
export default Chater