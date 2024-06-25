import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, lazy, useState } from "react";
import { orange } from "../../constants/color";
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };

  const openSearchDialog = () => {
    setIsSearch((prev) => !prev);
  };
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };

  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };

  const navigateToGroup = () => navigate("/groups");

  const logoutHandler = () => {
    console.log("LogOut");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Chat App
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon></MenuIcon>
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIcon></SearchIcon>}
                onClick={openSearchDialog}
              ></IconBtn>
              <IconBtn
                title={"New Group"}
                icon={<AddIcon></AddIcon>}
                onClick={openNewGroup}
              ></IconBtn>
              <IconBtn
                title={"Manage Groups"}
                icon={<GroupIcon></GroupIcon>}
                onClick={navigateToGroup}
              ></IconBtn>
              <IconBtn
                title={"Notifications"}
                icon={<NotificationsIcon></NotificationsIcon>}
                onClick={openNotification}
              ></IconBtn>
              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon></LogoutIcon>}
                onClick={logoutHandler}
              ></IconBtn>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open></Backdrop>}>
          <SearchDialog></SearchDialog>
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open></Backdrop>}>
          <NotificationDialog></NotificationDialog>
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open></Backdrop>}>
          <NewGroupDialog></NewGroupDialog>
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
