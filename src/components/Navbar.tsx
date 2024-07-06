import { AppBar, Box } from "@mui/material";
import { FlexBetween } from "../styles";
import { ContentProps } from "../types";

export default function Navbar({
  leftContent,
  centerContent,
  rightContent,
}: ContentProps) {
  return (
    <Box
      position="sticky"
      sx={{
        width: {
          sm: 375,
          lg: 500,
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
