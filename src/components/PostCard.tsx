import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Typography,
  CardMedia,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  MoreVert as MoreVertIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Share as ShareIcon,
  BookmarkBorder as BookmarkBorderIcon,
  Bookmark as BookmarkIcon,
} from "@mui/icons-material";
import { Post } from "../types";
import { Modal } from "../components";
import { useRef, useState } from "react";

interface Props {
  key?: number;
  onSelect: (id: number) => void;
  post: Post;
}

export default function PostCard({ onSelect, post }: Props) {
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const dropdownOpen = Boolean(anchorEl);

  const dialog = useRef<{ open: () => void; close: () => void }>(null);

  const handleDropdownOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  function handleShowModal() {
    if (dialog.current) {
      dialog.current.open();
    }
  }

  function handleCloseModal() {
    if (dialog.current) {
      dialog.current.close();
    }
  }

  return (
    <>
      <Modal
        title={"게시글을 삭제하시겠습니까?"}
        onCancel={handleCloseModal}
        onDelete={() => {
          console.log("post 삭제");
        }}
        ref={dialog}
      />
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
          sx={{
            flexDirection: "row",
            alignItems: "center",
            padding: "8px 16px",
          }}
        >
          <Avatar alt="User" src={post.imgUrl} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            {post.nickname}
          </Typography>
          <IconButton onClick={handleDropdownOpen}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={dropdownOpen}
            onClose={handleDropdownClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleDropdownClose}>게시글 수정</MenuItem>
            <MenuItem onClick={handleShowModal}>게시글 삭제</MenuItem>
          </Menu>
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
            {like ? (
              <FavoriteIcon
                sx={{ mr: 1, color: "red" }}
                onClick={() => setLike(!like)}
              />
            ) : (
              <FavoriteBorderIcon
                sx={{ mr: 1, color: "red" }}
                onClick={() => setLike(!like)}
              />
            )}
            <Typography variant="body2">{post.heart}</Typography>
            <ChatBubbleOutlineIcon
              sx={{ ml: 2, mr: 1, color: "yellowgreen" }}
            />
            <Typography variant="body2">{post.chat.length}</Typography>
            <ShareIcon sx={{ ml: 2 }} />
          </Box>
          {bookmark ? (
            <BookmarkIcon
              sx={{ color: "#FFD700" }}
              onClick={() => setBookmark(!bookmark)}
            />
          ) : (
            <BookmarkBorderIcon
              sx={{
                color: "#FFD700",
              }}
              onClick={() => setBookmark(!bookmark)}
            />
          )}
        </Box>
      </Box>
    </>
  );
}
