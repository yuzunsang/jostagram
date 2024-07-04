import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      position="sticky"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        bottom: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          My sticky footer can be found here.
        </Typography>
      </Container>
    </Box>
  );
}
