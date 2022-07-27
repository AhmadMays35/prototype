import Sidebar from "./components/sidebar"
import Feed from "./components/sidebar"
import Rightbar from "./components/sidebar"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar />
      <Feed />
      <Rightbar />
      </Stack>
    </Box>
  );  
}

export default App;
