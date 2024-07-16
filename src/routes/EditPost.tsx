import { Container, CssBaseline } from "@mui/material";
import {
  Before,
  Footer,
  Navbar,
  Space,
  Text,
  EditPostCard,
} from "../components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { Post } from "../types";

const defaultTheme = createTheme();

export default function EditPost() {
  const location = useLocation();
  const post: Post = location.state;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar
        leftContent={<Before />}
        centerContent={<Text navText="게시글 수정" />}
        rightContent={<Space />}
      />
      <Container component="main" maxWidth="xs" sx={{ mt: 15, mb: 15 }}>
        <CssBaseline />
        <EditPostCard post={post} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
