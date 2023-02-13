import { ThemeProvider } from "@mui/material";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./component/RootLayout";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import { theme } from "./theme";
import Home from "./pages/Home";
import Myprofile from "./pages/Myprofile";
let router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<SingUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/mlg" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="myprofile" element={<Myprofile />} />
      </Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
