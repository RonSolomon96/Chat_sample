
import Card from "./Card";
function friendslist({friends, chatFinder, log, messages, members, currentFriend}) {
    //create the cards of all friends and display them on screen
    const friendslist = friends.map((friend, key) => { return <Card chatFinder = {chatFinder} friend={friend}  log={log}  members= {members} currentFriend = {currentFriend} key={key} /> });
    return (
        <div>
            {friendslist}
        </div>
    );
}

export default friendslist