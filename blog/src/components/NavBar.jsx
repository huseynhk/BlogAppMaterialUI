import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Avatar,
  Badge,
  MenuItem,
  Menu,
} from "@mui/material";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  color: theme.palette.mainColor.main,
  padding:"10px 15px"
}));

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "4px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "35%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));

const NavBar = ({ searchQuery, setSearchQuery, items }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block", color:"#b3eefe" } }}>
          sarkhanrahimlidev
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e)}
          />
        </Search>
        <Icons>
          <Badge badgeContent={items?.length} color="error">
            <Mail sx={{fontSize:36}} />
          </Badge>

          <Badge badgeContent={7} color="error">
            <Notifications sx={{fontSize:36}} />
          </Badge>

          <Avatar
            sx={{ width: 50, height: 50, cursor: "pointer" }}
            onClick={handleClick}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </Icons>

        <UserBox>
          <Avatar
            sx={{ width: 50, height: 50, cursor: "pointer" }}
            onClick={handleClick}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">John</Typography>
        </UserBox>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          // anchorEl={anchorEl}
          open={open}
          onClose={handleClick}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
