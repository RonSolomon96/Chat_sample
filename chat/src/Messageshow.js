
//display a messages list only
import Messagelist from "./Messagelist";
function Messageshow(props) {
    
    if(props.openChat !== 0) {
        return (
            <div id = "msglist">
            <Messagelist chat = {props.chat} />    
            </div>)
    }
}


export default Messageshow;