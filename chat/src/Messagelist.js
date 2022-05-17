//display the messages on screen
import Message from "./Message";
function Messagelist({chat}) {
    const messagelist = chat.map((message, key) => { return <Message message = {message} key={key}  /> });
    return (
        <div>
            {messagelist}
        </div>
    );
}

export default Messagelist