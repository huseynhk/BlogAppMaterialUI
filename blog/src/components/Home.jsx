// import { Button, Typography, styled } from "@mui/material";
// import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
// import EditLocationAltTwoToneIcon from "@mui/icons-material/EditLocationAltTwoTone";

// function App() {
//   // const MyButton_2 = styled(Button)(   {
//   //   backgroundColor: "blue",
//   //   color: "yellow",
//   //   margin: "10px",
//   //   "&:hover": {
//   //     backgroundColor: "skyblue",
//   //   },
//   //   "&:disabled": {
//   //     backgroundColor: "red",
//   //   },
//   // });

//   const MyButton_2 = styled(Button)(({ theme }) => ({
//     backgroundColor: theme.palette.secondary.main,
//     color: "yellow",
//     margin: "10px",
//     "&:hover": {
//       backgroundColor: "skyblue",
//     }
//   }));
//   return (
//     <>
//       <Button
//         color="secondary"
//         size="small"
//         variant="outlined"
//         startIcon={<DeleteForeverTwoToneIcon />}
//       >
//         Delete
//       </Button>
//       <Button
//         color="otherColor"
//         size="medium"
//         variant="contained"
//         endIcon={<EditLocationAltTwoToneIcon />}
//       >
//         Edit
//       </Button>

//       <Typography variant="h1" component="h2">
//         h1. Heading
//       </Typography>

//       <Button
//         variant="contained"
//         sx={{
//           backgroundColor: "blue",
//           color: "red",
//           margin: "10px",
//           "&:hover": {
//             backgroundColor: "skyblue",
//           },
//         }}
//       >
//         MyButton_1
//       </Button>

//       <MyButton_2 variant="contained" >
//         MyButton_2
//       </MyButton_2>
//     </>
//   );
// }

// export default App;

// import { Button, Typography, styled } from "@mui/material";
// import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
// import EditLocationAltTwoToneIcon from "@mui/icons-material/EditLocationAltTwoTone";

// function App() {
//   // const MyButton_2 = styled(Button)(   {
//   //   backgroundColor: "blue",
//   //   color: "yellow",
//   //   margin: "10px",
//   //   "&:hover": {
//   //     backgroundColor: "skyblue",
//   //   },
//   //   "&:disabled": {
//   //     backgroundColor: "red",
//   //   },
//   // });

//   const MyButton_2 = styled(Button)(({ theme }) => ({
//     backgroundColor: theme.palette.secondary.main,
//     color: "yellow",
//     margin: "10px",
//     "&:hover": {
//       backgroundColor: "skyblue",
//     }
//   }));
//   return (
//     <>
//       <Button
//         color="secondary"
//         size="small"
//         variant="outlined"
//         startIcon={<DeleteForeverTwoToneIcon />}
//       >
//         Delete
//       </Button>
//       <Button
//         color="otherColor"
//         size="medium"
//         variant="contained"
//         endIcon={<EditLocationAltTwoToneIcon />}
//       >
//         Edit
//       </Button>

//       <Typography variant="h1" component="h2">
//         h1. Heading
//       </Typography>

//       <Button
//         variant="contained"
//         sx={{
//           backgroundColor: "blue",
//           color: "red",
//           margin: "10px",
//           "&:hover": {
//             backgroundColor: "skyblue",
//           },
//         }}
//       >
//         MyButton_1
//       </Button>

//       <MyButton_2 variant="contained" >
//         MyButton_2
//       </MyButton_2>
//     </>
//   );
// }

// export default App;

import SideBar from "./SideBar";
import RightBar from "./RightBar";
import Main from "./Main";
import { Box, Stack } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent={"space-between"}
        >
          <SideBar />
          <Main />
          <RightBar />
        </Stack>
      </Box>
    </>
  );
};

export default Home;
