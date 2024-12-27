import moment from "moment";
import { Box, IconButton, Modal, Typography, Button } from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
  Delete,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
} from "@mui/material";
import { DeleteItem } from "../api";
import { useState } from "react";
import { toast } from "react-toastify";

const Main = ({ items, fetchItems }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleOpenDeleteModal = (itemId) => {
    setSelectedItemId(itemId);
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setSelectedItemId(null);
  };

  const deleteItem = async () => {
    if (selectedItemId) {
      await DeleteItem(selectedItemId);
      fetchItems();
      toast.success("Post deleted successfully!", { autoClose: 1500 });
    }
    handleCloseDeleteModal();
  };

  return (
    <Box>
      {items.length > 0 ? (
        items?.map((item) => (
          <Card key={item.id} sx={{ margin: 5, borderRadius: "8px" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label={item.fullName}>
                  {item.fullName.charAt(0)}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title={item.fullName}
              subheader={moment(item?.date).fromNow()}
            />
            <CardMedia
              component="img"
              height="300"
              image={item.img}
              alt={item.fullName}
              sx={{ objectFit: "cover" }}
            />
       
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.desc}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
              <IconButton
                aria-label="settings"
                sx={{ color: "red", marginLeft: 1 }}
                onClick={() => handleOpenDeleteModal(item.id)}
              >
                <Delete />
              </IconButton>
            </CardActions>
          </Card>
        ))
      ) : (
        <Typography fontWeight={500} variant="h4">
          No Post
        </Typography>
      )}
      {/* Delete Confirmation Modal */}
      <Modal open={openDeleteModal} onClose={handleCloseDeleteModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            padding: 3,
            borderRadius: 1,
            boxShadow: 24,
            width: 300,
          }}
        >
          <Typography variant="h6" textAlign="center" mb={2}>
            Are you sure you want to delete this post?
          </Typography>
          <Box display="flex" justifyContent="space-around">
            <Button variant="contained" color="error" onClick={deleteItem}>
              Delete
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleCloseDeleteModal}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Main;
