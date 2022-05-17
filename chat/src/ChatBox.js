
import Crown from "./crown.png"
import Voice from "./voice-icon.png"
import Messagelist from "./Messagelist";
import ImagePopup from "./ImagePopup";
import VideoPopup from "./VideoPopup";
import RecordPopup from "./RecordPopup";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
//display the Chat box in which we can use to send any kind of message
function ChatBox(props) {
    //if the chat is opened - display the chatbox
    console.log(props.screenSize)
    if(props.openChat !== 0){
        return (
            <div id="vv">
                <ul className="chat-box">
                    <li><ImagePopup addToChat = {props.addToChat} handleFile={props.handleFile}/></li>
                    <li><VideoPopup addToChat = {props.addToChat} handleFile={props.handleFile}/></li>
                    <li><RecordPopup addToChat = {props.addToChat} record = {props.record} stopRecord = {props.stopRecord} /></li>
                    <li><button value="Crown" className="chatnav" type="submit" onClick={props.addToChat}><img src={Crown} className="nav-img" /></button></li>
                    <li><input id="chat-box" placeholder="  Message.."  onChange={props.handleSend} style={{width : props.screenSize}}></input></li>
                    <li className="send"><button className="chatnav-s" value = "Str" type="submit" onClick = {props.addToChat} >Send</button></li>
                </ul>
                
            </div>)
    }
}

export default ChatBox;
