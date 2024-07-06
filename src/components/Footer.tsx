import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import {
  Home as HomeIcon,
  AddCircleOutline as AddCircleOutlineIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: 500,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction
            label="Add New Post"
            icon={<AddCircleOutlineIcon />}
          />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
