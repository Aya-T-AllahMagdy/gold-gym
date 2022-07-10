import './App.css';
import{Box}from '@mui/material';
import{Routes ,Route} from 'react-router-dom'
import Home from "./pages/Home"
import ExerciseDetails from "./pages/ExerciseDetails"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
   <Box width="400px" sx={{width:{xl:'1488px'}}}m="auto">
    <Navbar/>
   <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/exercise/:id" element={<ExerciseDetails/>}/>
   </Routes>
   <Footer/>
   </Box>
    </div>
  );
}

export default App;
