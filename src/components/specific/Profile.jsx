import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      ></Avatar>
      <ProfileCard heading={"Bio"} text={"asdf jkded kalsdfj kk"}></ProfileCard>
      <ProfileCard
        heading={"Username"}
        text={"joysaha23"}
        Icon={<UserNameIcon></UserNameIcon>}
      ></ProfileCard>
      <ProfileCard
        heading={"Name"}
        text={"Joy Saha"}
        Icon={<FaceIcon></FaceIcon>}
      ></ProfileCard>
      <ProfileCard
        heading={"Joined"}
        text={moment("2023-11-04T18:30:00.000Z").fromNow()}
        Icon={<CalendarIcon></CalendarIcon>}
      ></ProfileCard>
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
