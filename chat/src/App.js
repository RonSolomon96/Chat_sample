
import React, { useState } from 'react';
import './App.css';
import Logger from './Logger';
import Signer from './Signer';
import Chater from './Chater';
import Contact from "./contact.png";
import Contact1 from "./Contact1.png"
import Record1 from "./maNishmaRecord.txt"
import Crown from "./crown.png"
import Video1 from "./video.mp4"
import { useEffect} from "react";

function App() {
  //here we use the state to determine which page to show  
  const [state, seter] = useState(1);
  function signer(event) {
    event.preventDefault();
    seter(2);
  }
  function logger(event) {
    event.preventDefault();
    seter(1);
    setOpenChat(0);
    setcurrentFriend('');
  }
  function chater(event) {
    event.preventDefault();
    seter(3);
  }
  //////////////////////////////////////////

  //details on the logger
  const [log, setLog] = useState({ Username: "", Password: "" });
  function handleLog(event) {

    setLog(prevLog => { return { ...prevLog, [event.target.id]: event.target.value } });
    console.log(log);
  }

  //////////////////////////////////////////////////////////////

  //register details
  const [reg, setReg] = useState({ Username: "", Password: "", Password2: "", Nickname: "" });
  //this function handles changes in the input of the sign up form
  function handleChange(event) {

    setReg(prevData => { return { ...prevData, [event.target.id]: event.target.value } });
    console.log(reg);
  }
  //////////////////////////////////////////////////////////////


  ///////////////////////////////////////login///////////////////////
  //log in with the details of the logger (and check validation)
  function logIn(event) {
    event.preventDefault();
    var x = { Username: log.Username, Password: log.Password };

    //if the form fields are empty
    if(x.Username === '' || x.Password === '') {
      alert("Please fill in all fields");
      return;
    }

    //if the logger exists - log in
    for (var i = 0; i < members.length; i++) {
      if (members[i].Username === x.Username && members[i].password === x.Password) {
        seter(3);
        return;
      }
    }
    //if no such logger exist
    alert("Username or password are incorrect");
  }

  //for the profile photo
  const [profilePhoto, setProfilePhoto] = useState(Contact);
  //if an image was chosen - set profile photo
  function handleProfilePhoto(e) {
      setProfilePhoto(URL.createObjectURL(e.target.files[0]));
  }

  //validation of password in registration
  function onlyLettersAndNumbers(str) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(str);
  }

  //////////////////////////////////register
  //register with the details of reg (and check validation)
  let register = (event) => {
    //check all fiels are not empty
    if(reg.Username === '' || reg.Nickname === '' || reg.Password === '' || reg.Password2 === '' ) {
      alert("Please fill in all fields");
        signer(event);
        return;
    }
    //check if username not taken
    for (var i = 0; i < members.length; i++) {
      if (reg.Username === members[i].Username) {
        alert("Username '" + reg.Username + "' already taken");
        signer(event);
        return;
      }
    }
    if (reg.Password !== reg.Password2) {
      alert("password dont match");
      signer(event);
      return;
    }
    if (!(onlyLettersAndNumbers(reg.Password))) {
      alert("password must be between 6 to 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter");
      signer(event);
      return;
    }

    //if all checks passed successfully - register and login
    const newMember = { Username: reg.Username, password: reg.Password, nickname: reg.Nickname, profilePhoto: profilePhoto };
    let tempMem = members
    tempMem.push(newMember)
    setMembers(tempMem);
    let tempContacts = contacts;
    tempContacts.push({ Username: reg.Username, friends: [] })
    setContacts(tempContacts);
    logger(event);
    alert(reg.Username + ", You have successfully registered!!");
    log.Username = reg.Username;
    log.Password = reg.Password;
    seter(3);
  }

  //the members array
  const [members, setMembers] = useState([
    {
      Username: "Ron"
      , password: "12345rR",
      nickname: "Salman",
      profilePhoto : Contact
    },
    {
      Username: "Ortal"
      , password: "123456oO",
      nickname: "Ort",
      profilePhoto : Contact1
    },
    {
      Username: "Moshe"
      , password: "12345mM",
      nickname: "moshke",
      profilePhoto : Contact
    },
    {
      Username: "Avital"
      , password: "123456aA",
      nickname: "avital",
      profilePhoto : Contact1
    },
    {
      Username: "Yoav"
      , password: "12345yY",
      nickname: "yoav",
      profilePhoto : Contact
    }
  ]);
  //////////////////chat//////////////////////
  //each member has array friends
  const [contacts, setContacts] = useState(
    [{ Username: "Ron", friends: [{Username : "Ortal", nickname : "Ort"}] },
    { Username: "Ortal", friends: [{Username : "Ron", nickname : "Salman"}, {Username : "Moshe", nickname : "moshke"}] },
    { Username: "Moshe", friends: [{Username : "Ortal", nickname : "Ort"}] },
    { Username: "Avital", friends: []},
    { Username: "Yoav", friends: []}])
  
  //find the logger's friends
  var friends;
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].Username === log.Username) {
      friends = contacts[i].friends;
      break;
    }
  }

  //add friend to logger
  function add(event) {
    var exists = 0;
    var nickname = "";
    //check if newFriend exists
    for (let i = 0; i < members.length; i++) {
      if (members[i].Username === event.target.value) {
        exists = 1;
        nickname = members[i].nickname;
        break;
      }
    }
    if (!exists) {
      return;
    }
    //if mewFriend is logger - do nothing
    if (event.target.value === log.Username) {
      return;
    }
    //if already a friend
    for (let i = 0; i < friends.length; i++) {
      console.log(friends[i]);
      console.log(event.target.value);
      if (friends[i].Username === event.target.value) {
        deleteCpopupInput();
        return;
      }
    }
    //else -  add as friend
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].Username === log.Username) {
        var newf = {Username : event.target.value, nickname : nickname};
        contacts[i].friends.push(newf);
        console.log("after adding")
        console.log(contacts)
        setContacts([...contacts])
        deleteCpopupInput();
        return;
      }
    }
  }
  ////////////////////////////////////////

  //each two members have chat (array of messages )
  //message have time, who sent it(1 or 2) and type (string, image, video or record)
  const [messages, setMessage] = useState(
    [{ Username1: "Ortal", Username2: "Ron", chat: [{time: "00:00", flag: 1, str: "Ron, can you send me the video?" ,image : '', video :'',record:'' },
            {time: "00:00", flag: 2, str: '', image : '', video : Video1 ,record:'' }, 
            {time: "00:00", flag: 1, str: '',image : Crown, video :'',record:'' },] },
     { Username1: "Ortal", Username2: "Moshe",chat: [{time: "00:00", flag: 1, str: "mosh" ,image : '', video :'',record:'' },
            {time: "00:00", flag: 2, str: "ort" ,image : '', video :'',record:'' },
            {time: "00:00", flag: 1, str: '' ,image : '', video :'',record: Record1 }] },
     { Username1: "Ron", Username2: "Ortal", chat: [{time: "00:00", flag: 2, str: "Ron, can you send me the video?" ,image : '', video :'',record:'' },
              {time: "00:00", flag: 1, str: '', image : '', video : Video1 ,record:'' }, 
              {time: "00:00", flag: 2, str: '',image : Crown, video :'',record:'' }] },
     { Username1: "Moshe", Username2: "Ortal",chat: [{time: "00:00", flag: 2, str: "mosh" ,image : '', video :'',record:'' },
             {time: "00:00", flag: 1, str: "ort" ,image : '', video :'',record:'' },
             {time: "00:00", flag: 2, str: '' ,image : '', video :'',record: Record1 }] }]
  )
  //////////////////////////////////////////send a massage data
  const [send, setsend] = useState({time: "00:00", flag: 1, str: "" ,image : '', video :'',record:''});
  //save the new message to be sent
  function handleSend(event) {
    setsend(prevSend => { return { ...prevSend, str: event.target.value } });
    console.log(send);
  }

  //save the new file(image) to be sent
  const [file, setFile] = useState('');
  function handleFile(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }



  //determine if the chat is open - initialize:0(closed)
  const [openChat, setOpenChat] = useState(0);

  function openTheChat(event) {
    setOpenChat(1);
  }

  //save the friend that we are chatting with right now
  const [currentFriend, setcurrentFriend] = useState('');
  // set the current chat data
  var [chat, setChat] = useState({ Username1: "", Username2: "", chat: [] });

  //find the current chat
  function chatFinder(event) {
    //catch the friend that we are chatting with right now
    setcurrentFriend(event.currentTarget.value);
    //open chat
    if (openChat !== 1) {
      openTheChat(event);
    }
    //seek the chat, catch it and display it on screen
    for (var i = 0; i < messages.length; i++) {
      if (messages[i].Username1 === log.Username
        && messages[i].Username2 === event.currentTarget.value) {
        var tempChat = {
          Username1: messages[i].Username1, Username2: messages[i].Username2
          , chat: messages[i].chat
        }
        setChat(tempChat);
        return;
      }
    }
    //if there is no chat yet - initialize one
    setChat({ Username1: log.Username, Username2: event.currentTarget.value , chat: [] });
    var helpChat = { Username1: log.Username, Username2: event.currentTarget.value , chat: [] }
    var tempMessages = [...messages];
    tempMessages.push(helpChat)
    setMessage(tempMessages);
  }

  ////////////for the popups///////////////////////////
  function deleteCpopupInput(){
    const chatInput = document.getElementById('cpopup-input');
    chatInput.value = "";
    setNewFriend("");

  }

   function deleteInput(){
    const chatInputStr = document.getElementById('chat-box');
    chatInputStr.value = '';
    setsend({time: "00:00", flag: 1, str: "" ,image : '', video :'',record:''});
    const chatInputImg = document.getElementById('Img-popup');
    chatInputImg.value = '';
    setFile('');
    const chatInputVideo = document.getElementById('Video-popup');
    chatInputVideo.value = '';
    setFile('');
   }
/////////////////////////////////////////////////////////

//for scrolling down a chat
var [scrl,setScrl] = useState(0);

//add new message to current chat
  function addToChat(event) {
    var x = chat.chat;
    var tempMsg;
    var today = new Date();
    //create new message according to type(value)
    if (event.currentTarget.value === "Str") {
      tempMsg = {time: today.getHours() + ':' + today.getMinutes(), flag: 1, str: send.str, image : '', video :'' ,record:''};
      
    }
    if (event.currentTarget.value === "Image") {
      tempMsg = {time: today.getHours() + ':' + today.getMinutes(), flag: 1, str: "" ,image : file, video :'' ,record:'' };
    }
    if (event.currentTarget.value === "Video") {
      tempMsg = {time: today.getHours() + ':' + today.getMinutes(), flag: 1, str: "" ,image : '', video : file ,record:'' };
    }
    if (event.currentTarget.value === "Voice") {
      if (recordUrl !== '') {
        tempMsg = {time: today.getHours() + ':' + today.getMinutes(), flag: 1, str: "" ,image : '', video : '' ,record: recordUrl };
      }
      else{
        return;
      }
    }
    if (event.currentTarget.value === "Crown") {
      tempMsg = {time: today.getHours() + ':' + today.getMinutes(), flag: 1, str: "" ,image : Crown, video : '' ,record: '' };
    }
    console.log(tempMsg);
    if(tempMsg.str == '' && tempMsg.image == '' && tempMsg.video == '' && tempMsg.record == ''){
      return;
    }
    //add message to current chat
    x.push(tempMsg);
    console.log(x);
    const new_obj = { ...chat, chat: x };
    setChat(new_obj);
    for (var i = 0; i < messages.length; i++) {
      if (messages[i].Username1 === chat.Username1
        && messages[i].Username2 === chat.Username2) {
        var tempMessages = [...messages];
        tempMessages[i] = new_obj;
        setMessage(tempMessages);
        console.log(messages);
        deleteInput();
        setrecordUrl('');
        //scroll down
        setScrl(1);
        return;
      }
    }
  }

  ////////////////////////////////////////cpopup
  //save new friend
  var [newFriend, setNewFriend] = useState("");
  function handelCpopup(event) {
    setNewFriend(event.target.value);
  }
  ////////////////////////////////////////////////////voice/////////////////////////////////////
 //save the new record to be sent
  const [recordUrl, setrecordUrl] = useState('');
  var mediaRecorder;
 
  var recordstarted = 0;
  //start record
  function record(){
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      recordstarted = 1;
      const audioChunks = [];
      mediaRecorder.addEventListener("dataavailable", event => {
        audioChunks.push(event.data);
      });
  
      mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
         setrecordUrl(audioUrl);            
      });
        
    });
    
  }

  //stop record
  function stopRecord(){
    if (recordstarted) {
      mediaRecorder.stop();
    }
  }

 //gets the screen size dinamically
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (state === 1) {
    //to handle the state from a different componnent we need to pass the state and a function to set it. using props
    return (<Logger handleClick={signer} log={log} handleLog={handleLog} login={logIn} />);
  }
  if (state === 2) {
    return (<Signer handleClick={logger} handleSign={register} reg={reg} handleChange={handleChange} handleProfilePhoto={handleProfilePhoto}/>);
  }
  if (state === 3) {
    return (<Chater handleClick={logger} friends={friends} log={log} add={add} messages={messages}
      chat={chat.chat} chatFinder={chatFinder} handleSend={handleSend} addToChat={addToChat} currentFriend={currentFriend}
       file ={file} handleFile = {handleFile} openChat = {openChat} record = {record} recordUrl = {recordUrl}
       stopRecord = {stopRecord} handelCpopup = {handelCpopup} newFriend = {newFriend} members = {members} scrl = {scrl} setScrl = {setScrl}
       screenSize={(screenSize.dynamicWidth * 0.45)}/>)
  }
}
export default App;