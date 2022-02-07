import React from 'react';
import styled from "styled-components";
import Navbar from '../components/Navbar';
import ContactListComponent from "../components/ContactListComponent";
import ConversationComponent from "../components/ConversationComponent";

const Container = styled.div`
display: flex;
flex-direction: row;
height:100vh;
width: 100%;
background:#f8f9fb;
`
function Chat() {
  return (
    
<>
  <Container>,
  <ContactListComponent/>,
  <ConversationComponent/>,
    </Container>
    </>
    );
}

export default Chat;