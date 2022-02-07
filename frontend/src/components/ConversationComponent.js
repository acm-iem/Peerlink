import styled from "styled-components";
import {ContactName, MessageText, ProfileIcon, SearchContainer, SearchInput } from "./ContactListComponent";
import {messagesList} from "../pages/mockData";
const Container =styled.div`
display:flex;
flex-direction:column;
height:100%;
flex: 3;
`;



const ChatHeader = styled.div`
display:flex;
padding:10px;
background:#ffbf;

`;

const ChatName = styled.span`
width:100%;
font-size:16px;
color:black;
margin:0px 0px 0px 5px;
`;

const Online = styled.span`
display:flex;
justify-content:flex-start;
color:black;
font-size:12px;
`;

// const ChatContainer  = styled.div`
// width:35px;
// height:20px;
// background:white;
// border-radius:6%;
// cursor:pointer;
// margin:0px 5px 0px 5px;
// `;
// const Chat = styled.div`
// display:flex;
// width:32px;
// height:20px;
// color:black;
// text-align:center;
// font-size:15px;
// font-weight:bold;
// `;
// const Calculate = styled.div`
// color:white;
// font-size:15px;
// font-weight:bold;
// margin:0px 5px 0px 5px;
// cursor:pointer;
// `;

// const About = styled.div`
// color:white;
// font-size:15px;
// font-weight:bold;
// margin:0px 5px 0px 5px;
// cursor:pointer;
// `;

// const Contact = styled.div`
// display:flex;
// color:white;
// font-size:15px;
// font-weight:bold;
// margin:0px 5px 0px 5px;
// cursor:pointer;
// `;


const ChatBox = styled.div`
display:flex;
background:black;
padding: 10px;
align-items: center;
bottom:0;

`;

const Money = styled.img`
width:28px;
height:28px;
cursor:pointer;
margin:0px 5px 0px 0px;
`;
const EmojiImage = styled.img`
width:28px;
height:28px;
cursor:pointer;
margin:0px 5px 0px 0px;
`;

const Voice = styled.img`
width:28px;
height:28px;
cursor:pointer;
margin:0px 5px 0px 0px;
`;

const SendLogoContainer = styled.div`
height:35px;
width:35px;
border-radius:50%;
background:white;
display:inline-block;
margin:0px 5px 0px 8px;
align-items:center;
`
const SendLogo = styled.img`
width:30px;
height:30px;
cursor:pointer;
margin:3px 5px 0px 0px;
`;

// const ProfileImage = styled.img`
// width:32px;
// height:32px;
// border-radius: 50%;
// margin:0px 0px 0px 5px;
// cursor:pointer;
// `;

const MessageContainer = styled.div`
display:flex;
flex-direction:column;
height:100%;
background:#e5ddd6;
overflow-y:hidden;
`;

const MessageDiv = styled.div`
justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
display:flex;
margin: 5px 15px;
`;

const Message = styled.div`
background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
max-width:50%;
color: #303030;
padding: 8px 10px;
font-size:14px;
border-radius:4px;
`;
const ConversationComponent = () => {
    return <Container>
    {/* <ProfileHeader>
    <ChatContainer>
    <Chat>Chat</Chat></ChatContainer>
    <Calculate>Calculate</Calculate>
    <About>About</About>
    <Contact>Contact</Contact>
    <ProfileImage src = "profile/pp.jpg" >
    </ProfileImage>
    </ProfileHeader> */}
    <ChatHeader>
        <ProfileIcon src = "user.png"/>
        <ChatName>Debayan Sen
        <Online>Online</Online>
        </ChatName>
    </ChatHeader>
    <MessageContainer>
    {messagesList.map((messageData) => ( <MessageDiv isYours={messageData.senderID == 0}>
            <Message isYours={messageData.senderID == 0}>{messageData.text}</Message>
        </MessageDiv>))}
    </MessageContainer>
    <ChatBox>
    <Money src = {"wallet.svg"}></Money>
    <EmojiImage src = {"emoji-img.svg"}/>
    <Voice src = {"voice.svg"}></Voice>
        <SearchContainer>
        
            <SearchInput placeholder = "Type a message..."/>
        </SearchContainer>
        <SendLogoContainer>
        <SendLogo src = {"send-logo.png"}></SendLogo>
        </SendLogoContainer>
        
    </ChatBox>
</Container>
}

export default ConversationComponent;
