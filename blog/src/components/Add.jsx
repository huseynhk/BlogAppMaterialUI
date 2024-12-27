import { useState } from "react";
import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import { AddItem } from "../api";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";

const initialState = {
  fullName: "",
  img: "",
  desc: "",
};

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CustomFab = styled(Fab)(() => ({
  width: 70,
  height: 70,
}));

const Add = ({fetchItems}) => {
  const [open, setOpen] = useState(false);
  const [newItem, setNewItem] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleAddItem = async () => {
    setLoading(true);
    const dataToSubmit = {
      ...newItem,
      date: moment().valueOf(),
    };
    await AddItem(dataToSubmit);
    fetchItems();
    setNewItem(initialState);
    setOpen(false);
    toast.success("Post added successfully!", {
      autoClose: 1500,
    });
    setLoading(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  const isFormValid = () => {
    return Object.values(newItem).every((value) => value !== "");
  };

  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <CustomFab color="primary" aria-label="add">
          <AddIcon
            sx={{
              width: 40,
              height: 40,
            }}
          />
        </CustomFab>
      </Tooltip>
      <SytledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={350}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <TextField
            sx={{ width: "100%", marginBottom: 2, marginTop:3 }}
            type="text"
            variant="standard"
            placeholder="FullName"
            name="fullName"
            value={newItem.fullName}
            onChange={handleInputChange}
          />
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            type="text"
            variant="standard"
            placeholder="Photo"
            name="img"
            value={newItem.img}
            onChange={handleInputChange}
          />
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
            name="desc"
            value={newItem.desc}
            onChange={handleInputChange}
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={handleAddItem} disabled={!isFormValid()}>
              {loading ? <CircularProgress size={24} /> : "Post"}
            </Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;
