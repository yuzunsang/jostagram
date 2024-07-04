import { Toolbar, Typography } from "@mui/material";
import {
  NavigateBefore as BeforeIcon,
  Notifications as NotiOnIcon,
  NotificationsOff as NotiOffIcon,
  Settings as SettingsIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Before() {
  const navigate = useNavigate();

  return (
    <BeforeIcon style={{ cursor: "pointer" }} onClick={() => navigate(-1)} />
  );
}

interface TextBarProps {
  navText: string;
}

function Text({ navText }: TextBarProps) {
  return (
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {navText}
      </Typography>
    </Toolbar>
  );
}

function Space() {
  return <BeforeIcon style={{ visibility: "hidden" }} />;
}

function AlarmSettings() {
  const [alarm, setAlarm] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      <FavoriteBorderIcon sx={{ cursor: "pointer", fontSize: 40 }} />
      {alarm ? (
        <NotiOnIcon
          sx={{ cursor: "pointer", fontSize: 40 }}
          onClick={() => setAlarm(!alarm)}
        />
      ) : (
        <NotiOffIcon
          sx={{ cursor: "pointer", fontSize: 40 }}
          onClick={() => setAlarm(!alarm)}
        />
      )}
      <SettingsIcon
        sx={{ cursor: "pointer", fontSize: 40 }}
        onClick={() => navigate("/settings")}
      />
    </div>
  );
}

export { Before, Text, Space, AlarmSettings };
