import { useParams } from "react-router-dom";
import {
  Navbar,
  Before,
  Text,
  Space,
  PostSkeleton,
  PostCard,
} from "../components";
import { useFetch } from "../hooks";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const defaultTheme = createTheme();

const comments = [
  {
    id: 1,
    username: "jiseon",
    comment: "게시물 잘보고 갑니다~!",
    time: "2024.04.03 22:07",
  },
  {
    id: 2,
    username: "user10",
    comment: "도움됩니다",
    time: "2024.04.03 22:08",
  },
  {
    id: 3,
    username: "user190",
    comment: "별로 도움 안되는데",
    time: "2024.04.03 22:10",
  },
];

export default function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: posts,
    loading,
    error,
  } = useFetch("http://localhost:5000/posts");

  // 일치하는 id의 단일 post 불러오기
  const post = posts ? posts.find((post) => post.id === Number(id)) : null;

  const handleSelectPost = (id: number) => {
    navigate(`/posts/${id}`);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {error && <p>Error: {error.message}</p>}
      <Navbar
        leftContent={<Before />}
        centerContent={<Text navText="Outstagram" />}
        rightContent={<Space />}
      />
      <Container component="main" maxWidth="xs" sx={{ mt: 15, mb: 15 }}>
        <CssBaseline />
        {loading && <PostSkeleton />}
        {post ? (
          <PostCard onSelect={handleSelectPost} post={post} />
        ) : (
          <p>Post Not Found</p>
        )}
      </Container>

      <Container
        maxWidth="sm"
        sx={{ bgcolor: "#f0f0f0", borderRadius: 1, p: 2 }}
      >
        <List>
          {comments.map((comment) => (
            <ListItem key={comment.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>{comment.username[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle2">
                      {comment.username}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <ChatBubbleOutlineIcon
                        fontSize="small"
                        sx={{ mr: 0.5 }}
                      />
                      <Typography variant="caption">{comment.time}</Typography>
                    </Box>
                  </Box>
                }
                secondary={
                  <Typography variant="body2">{comment.comment}</Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
          <TextField
            variant="outlined"
            placeholder="댓글을 입력해주세요"
            fullWidth
            sx={{ bgcolor: "white", borderRadius: 1 }}
          />
          <IconButton color="primary">
            <SendIcon />
          </IconButton>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
