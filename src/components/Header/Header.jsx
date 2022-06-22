import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Badge,
  IconButton,
  Typography,
  Avatar,
  Button,
} from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={0} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={0} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ mr: 1 }}
            />
            <Typography>Андрей</Typography>
            <Button variant="otlined">Выйти</Button>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
