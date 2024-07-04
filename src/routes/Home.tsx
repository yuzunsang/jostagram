import Navbar from "../components/Navbar";
import {
  Text,
  Space,
  AlarmSettings,
  PostCard,
  PostSkeleton,
  Footer,
} from "../components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks";

const defaultTheme = createTheme();

export default function Home() {
  const navigate = useNavigate();
  const {
    data: posts,
    loading,
    error,
  } = useFetch("http://localhost:5000/posts");

  const handleSelectPost = (id: number) => {
    navigate(`/posts/${id}`);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {error && <p>Error: {error.message}</p>}
      <Navbar
        leftContent={<Text navText="Outstagram" />}
        centerContent={<Space />}
        rightContent={<AlarmSettings />}
      />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {loading && <PostSkeleton />}
        {posts?.map((post, idx) => {
          return <PostCard key={idx} onSelect={handleSelectPost} post={post} />;
        })}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
