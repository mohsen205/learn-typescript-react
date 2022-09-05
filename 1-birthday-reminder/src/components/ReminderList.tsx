import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const ReminderList = () => {
  return (
    <List>
      <ListItem>
        <ListItemAvatar sx={{ width: "80px", height: "80px" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: "70px", height: "70px" }}
          />
        </ListItemAvatar>
        <ListItemText primary="Remy Sharp" secondary="29 years" />
      </ListItem>
      <ListItem>
        <ListItemAvatar sx={{ width: "80px", height: "80px" }}>
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
            sx={{ width: "70px", height: "70px" }}
          />
        </ListItemAvatar>
        <ListItemText primary="Travis Howard" secondary="32 years" />
      </ListItem>
      <ListItem>
        <ListItemAvatar sx={{ width: "80px", height: "80px" }}>
          <Avatar
            alt="Larry Little"
            src="https://mui.com/static/images/avatar/3.jpg"
            sx={{ width: "70px", height: "70px" }}
          />
        </ListItemAvatar>
        <ListItemText primary="Larry Little" secondary="25 years" />
      </ListItem>
      <ListItem>
        <ListItemAvatar sx={{ width: "80px", height: "80px" }}>
          <Avatar
            alt="Sean Walsh"
            src="https://mui.com/static/images/avatar/4.jpg"
            sx={{ width: "70px", height: "70px" }}
          />
        </ListItemAvatar>
        <ListItemText primary="Sean Walsh" secondary="36 years" />
      </ListItem>
      <ListItem>
        <ListItemAvatar sx={{ width: "80px", height: "80px" }}>
          <Avatar
            alt="Lola Gardner"
            src="https://mui.com/static/images/avatar/5.jpg"
            sx={{ width: "70px", height: "70px" }}
          />
        </ListItemAvatar>
        <ListItemText primary="Lola Gardner" secondary="28 years" />
      </ListItem>
    </List>
  );
};

export default ReminderList;
