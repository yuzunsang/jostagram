import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";
import { FlexBetween } from "../styles/Flex";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar position="sticky">
        <FlexBetween>
          <NavigateBeforeIcon
            style={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              회원가입
            </Typography>
          </Toolbar>
          <NavigateBeforeIcon
            style={{ visibility: "hidden" }}
            onClick={() => navigate(-1)}
          />
        </FlexBetween>
      </AppBar>
    </Box>
  );
}
