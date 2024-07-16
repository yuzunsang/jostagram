import {
  Card,
  CardContent,
  Avatar,
  Typography,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";
import { Post } from "../types";

export default function EditPostCard({ post }: { post: Post }) {
  return (
    <Card sx={{ maxWidth: 550, margin: "auto", padding: 2, boxShadow: 3 }}>
      <Box display="flex" alignItems="center">
        <Avatar alt="User" sx={{ marginRight: 2 }} src={post.imgUrl} />
        <Typography variant="h6" component="div">
          {post.nickname}
        </Typography>
        <IconButton color="success" sx={{ marginLeft: "auto" }}>
          <CheckCircleIcon />
        </IconButton>
      </Box>
      <CardContent>
        <Box
          sx={{
            width: "100%",
            height: 200,
            backgroundColor: "#e0e0e0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {post.postImgUrl}
        </Box>
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          placeholder={post.text}
        />
      </CardContent>
    </Card>
  );
}
