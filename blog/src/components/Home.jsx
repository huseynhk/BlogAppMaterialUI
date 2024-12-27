import SideBar from "./SideBar";
import RightBar from "./RightBar";
import Main from "./Main";
import {
  Box,
  Stack,
  styled,
  ThemeProvider,
  createTheme,
  Skeleton,
} from "@mui/material";
import Add from "./Add";
import { useState, useEffect } from "react";
import { GetItems } from "../api";
import NavBar from "./NavBar";

const ParentDiv = styled("div")(({ theme }) => ({
  width: "55%",
  height: "100%",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
const Home = () => {
  const [mode, setMode] = useState("light");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchItems = async () => {
    const response = await GetItems();
    setItems(response);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const filteredItems = items.filter((item) =>
    item.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <>
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} items={items} />

      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent={"space-between"}
          >
            <SideBar setMode={setMode} mode={mode} />

            <ParentDiv>
              {loading ? (
                <Stack spacing={3} sx={{ margin: 5 }}>
                  <Skeleton variant="rectangular" height={400} sx={{ borderRadius:"8px" }}/>
                </Stack>
              ) : (
                <>
                  <Main items={filteredItems} fetchItems={fetchItems} />
                </>
              )}
            </ParentDiv>

            <RightBar />
          </Stack>

          <Add fetchItems={fetchItems} />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Home;
