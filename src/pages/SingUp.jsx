import React, { useState } from "react";
import Images from "../component/Images";
import Input from "../component/Input";
import Container from "@mui/material/Container";
import { Alert, Box, Stack } from "@mui/material";
import Mybutton from "../component/Mybutton";
import ExtraLink from "../component/ExtraLink";
import { useNavigate } from "react-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SingUp = () => {
  let navigate = useNavigate();
  const auth = getAuth();
  let [info, setInfo] = useState({
    email: "",
    fname: "",
    password: "",
  });
  let [error, setError] = useState({
    email: "",
    fname: "",
    password: "",
  });
  let handelFrom = (e) => {
    let { name, value } = e.target;
    console.log(e.target);
    setInfo({ ...info, [name]: value });
    setError({ ...error, [name]: "" });
    console.log(info);
  };
  let handelSubmit = () => {
    if (info.email == "") {
      setError({ ...error, email: "email must be use" });
    } else if (info.fname == "") {
      setError({ ...error, fname: "Full Name must be use" });
    } else if (info.password == "") {
      setError({ ...error, password: "Please Enter Passowrd" });
    } else {
      createUserWithEmailAndPassword(auth, info.email, info.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          toast.success("Singup Succsfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/login");
          }, 3000);
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      console.log("submit");
    }
  };
  return (
    <>
      <Container maxWidth="lg">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
        <Stack justifyContent="center" alignItems="center" gap={10}>
          <Box sx={{ margin: 5 }}>
            <Images
              src="accets/Screenshot_3-removebg-preview.png"
              alt="scrrenshot"
            />
          </Box>
        </Stack>

        <Box>
          <Stack gap={5}>
            <Input
              sx={{ width: "100%" }}
              variant="outlined"
              label="Email Address"
              onChange={handelFrom}
              name="email"
              type="email"
            />
            {error.email && <Alert severity="error">{error.email}</Alert>}
            <Input
              sx={{ width: "100%" }}
              label="Full Name"
              onChange={handelFrom}
              name="fname"
            />
            {error.fname && <Alert severity="error">{error.fname}</Alert>}
            <Input
              sx={{ width: "100%" }}
              password={true}
              onChange={handelFrom}
              name="password"
            />
            {error.password && <Alert severity="error">{error.password}</Alert>}
            <Box sx={{ textAlign: "center" }}>
              <Mybutton
                sx={{
                  width: "50%",
                  borderRadius: 86,
                  fontSize: 20,
                  padding: "6px 12px",
                }}
                variant="contained"
                titel="Sign up"
                onClick={handelSubmit}
              />
            </Box>
          </Stack>
        </Box>
        <ExtraLink titel="You have a account " content="Login" to="/login" />
      </Container>
    </>
  );
};

export default SingUp;
