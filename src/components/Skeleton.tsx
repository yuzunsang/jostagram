import { AppBar, Box, IconButton, Skeleton } from "@mui/material";
import {
  MoreVert as MoreVertIcon,
  BookmarkBorder as BookmarkBorderIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Share as ShareIcon,
} from "@mui/icons-material";

function PostSkeleton() {
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
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
        <Skeleton animation="wave" height={10} width="20%" sx={{ ml: 2 }} />
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
      >
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ position: "absolute", top: 0, left: 0 }}
        />
      </Box>

      <Box sx={{ padding: 2 }}>
        <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
        />
        <Skeleton animation="wave" height={10} width="40%" />
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
          <Skeleton animation="wave" height={10} width={20} />
          <ChatBubbleOutlineIcon sx={{ ml: 2, mr: 1 }} />
          <Skeleton animation="wave" height={10} width={20} />
          <ShareIcon sx={{ ml: 2 }} />
        </Box>
        <BookmarkBorderIcon />
      </Box>
    </Box>
  );
}

export { PostSkeleton };
