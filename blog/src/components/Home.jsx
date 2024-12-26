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
import { useState } from "react";

const ParentDiv = styled("div")(({ theme }) => ({
  width: "55%",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
const Home = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <>
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
                <Stack spacing={3}>
                  <Skeleton variant="text" height={100} />
                  <Skeleton variant="text" height={20} />
                  <Skeleton variant="text" height={20} />
                  <Skeleton variant="rectangular" height={200} />
                </Stack>
              ) : (
                <>
                  <Main />
             
                </>
              )}
            </ParentDiv>

            <RightBar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Home;
