import { AppBar, Box } from "@mui/material";
import { FlexBetween } from "../styles/Flex";

interface Props {
  leftContent: React.ReactNode;
  centerContent: React.ReactNode;
  rightContent: React.ReactNode;
}

// const NAVBAR_HEIGHT = 64;

export default function Navbar({
  leftContent,
  centerContent,
  rightContent,
}: Props) {
  return (
    <Box
      position="sticky"
      sx={{
        width: {
          xs: 375,
          sm: 500,
        },
        top: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <AppBar>
        <FlexBetween>
          {leftContent}
          {centerContent}
          {rightContent}
        </FlexBetween>
      </AppBar>
    </Box>
  );
}
