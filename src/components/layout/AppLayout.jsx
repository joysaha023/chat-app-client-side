import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, _id, groupChat)=> {
      e.preventDefault();
      console.log("Delete Chat", _id, groupChat)
    }

    return (
      <>
        <Title></Title>
        <Header></Header>

        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "noon", sm: "block" } }}
            height={"100%"}
          >
            <ChatList chats={sampleChats} chatId={chatId} handleDeleteChat={handleDeleteChat}></ChatList>
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            {" "}
            <WrappedComponent {...props}></WrappedComponent>
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "noon", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0, 0, 0, 0.85)",
            }}
            height={"100%"}
          >
            Third
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
