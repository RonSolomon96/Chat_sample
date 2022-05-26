//display a message on screen
function Message(props) {
    //if the message was sent from the logger
    if (props.message.sent === true) {
        return (

            <div className="message1">
                {props.message.content}
                <div className="message-timestamp-left">{props.message.created}</div>
            </div>)
        //if its a video
        // if (props.message.video !== '') {
        //     return (
        //         <div className="message1">
        //             <video src={props.message.video} className="send-img" controls />

        //             <div className="message-timestamp-left">{props.message.time}</div>
        //         </div>
        //     )
        // }
        // //if its an image
        // else if (props.message.image !== '') {
        //     return (
        //         <div className="message1">
        //             <img src={props.message.image} className="send-img" />
        //             <div className="message-timestamp-left">{props.message.time}</div>
        //         </div>
        //     )
        // }
        //if its a record
        // else if (props.message.record !== '') {
        //     return (
        //         <div className="message1">
        //             <audio src={props.message.record} className="send-record" controls />
        //             <div className="message-timestamp-left">{props.message.time}</div>
        //         </div>
        //     )
        // }
        //if its a string
        // else{
        //     return (

        //         <div className="message1">
        //             {props.message.str}
        //             <div className="message-timestamp-left">{props.message.time}</div>
        //         </div>)
        // }
    }
    //if the message was sent from the friend
    else {
        /*
        same type checking here too
        */
        return (

            <div className="message2">
                {props.message.content}
                <div className="message-timestamp-right">{props.message.created}</div>
            </div>)
        // if (props.message.video !== '') {
        //     return (
        //         <div className="message2">
        //             <video src={props.message.video} className="send-img" controls />

        //             <div className="message-timestamp-left">{props.message.time}</div>
        //         </div>
        //     )
        // }
        // else if (props.message.image !== '') {
        //     return (
        //         <div className="message2">
        //             <img src={props.message.image} className="send-img" />
        //             <div className="message-timestamp-left">{props.message.time}</div>
        //         </div>
        //     )
        // }
        // else if (props.message.record !== '') {
        //     return (
        //         <div className="message2">
        //             <audio src={props.message.record} className="send-record" controls />
        //             <div className="message-timestamp-left">{props.message.time}</div>
        //         </div>
        //     )
        // }

        // else {
        //     console.log("ortal message");
        //     return (

        //         <div className="message2">
        //             {props.message.str}
        //             <div className="message-timestamp-left">{props.message.time}</div>
        //         </div>)
        // }
    }
}

export default Message;