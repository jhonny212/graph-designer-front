import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './router/AppRouter';
import { DropDown } from './components/dropdown/DropDown';



function App() {
  return (
    // <DropDown></DropDown>
    <BrowserRouter>
      <AppRouter></AppRouter>
    </BrowserRouter>
  )
}

export default App;
