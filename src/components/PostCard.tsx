import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Typography,
  CardMedia,
} from "@mui/material";
import {
  MoreVert as MoreVertIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Share as ShareIcon,
  BookmarkBorder as BookmarkBorderIcon,
} from "@mui/icons-material";
import { Post } from "../types";

interface Props {
  key?: number;
  onSelect: (id: number) => void;
  post: Post;
}

export default function PostCard({ onSelect, post }: Props) {
  return (
    <Box
      sx={{
        maxWidth: 500,
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 1,
        margin: "auto",
        mt: 5,
      }}
    >
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ flexDirection: "row", alignItems: "center", padding: "8px 16px" }}
      >
        <Avatar alt="User" src={post.imgUrl} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
          {post.nickname}
        </Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </AppBar>

      <Box
        sx={{
          width: "100%",
          height: 0,
          paddingBottom: "75%", // 4:3 aspect ratio
          backgroundColor: "#e0e0e0",
          position: "relative",
        }}
        onClick={() => onSelect(post.id)}
      >
        <CardMedia
          component="img"
          height="194"
          image={post.postImgUrl}
          alt="Post Image"
        />
      </Box>

      <Box sx={{ padding: 2 }}>
        <Typography variant="body1">{post.text}</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 16px 16px 16px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FavoriteBorderIcon sx={{ mr: 1 }} />
          <Typography variant="body2">{post.heart}</Typography>
          <ChatBubbleOutlineIcon sx={{ ml: 2, mr: 1 }} />
          <Typography variant="body2">{post.chat.length}</Typography>
          <ShareIcon sx={{ ml: 2 }} />
        </Box>
        <BookmarkBorderIcon />
      </Box>
    </Box>
  );
}
