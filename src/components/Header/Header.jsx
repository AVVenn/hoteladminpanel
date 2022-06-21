import React from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Badge,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import BookOnlineRoundedIcon from "@mui/icons-material/BookOnlineRounded";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import routes from "../../constants/routes";
import { ListItemButtonForSideBar } from "../common/ListItemForSidear";

import { Link as RouterLink } from "react-router-dom";

const pages = [
  { name: "Брони", path: routes.HOME, icon: <BookOnlineRoundedIcon /> },
  { name: "Комнаты", path: routes.ROOMS, icon: <MeetingRoomRoundedIcon /> },
  { name: "Новости", path: routes.NEWS, icon: <CampaignRoundedIcon /> },
  { name: "Вопросы", path: routes.QUESTIONS, icon: <HelpOutlineRoundedIcon /> },
  { name: "Польователи", path: routes.USERS, icon: <PeopleAltRoundedIcon /> },
  { name: "Статистика", path: routes.STATISTIC, icon: <InsightsRoundedIcon /> },
];

const drawerWidth = 180;

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
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {pages.map((item) => (
              <ListItem
                key={item.path}
                component={RouterLink}
                to={item.path}
                disablePadding
              >
                <ListItemButtonForSideBar>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButtonForSideBar>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
