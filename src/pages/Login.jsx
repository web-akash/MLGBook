import React, { useState } from "react";
import Images from "../component/Images";
import Input from "../component/Input";
import Container from "@mui/material/Container";
import { Alert, Box, Stack } from "@mui/material";
import Mybutton from "../component/Mybutton";
import ExtraLink from "../component/ExtraLink";
import Heading from "../component/Heading";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const auth = getAuth();
  let navigate = useNavigate();
  const notify = () => toast("Wow so easy!");
  let [info, setInfo] = useState({
    email: "",
    password: "",
  });
  let [error, setError] = useState({
    email: "",
    password: "",
  });
  let handerFrom = (e) => {
    let { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    setError({ ...error, [name]: "" });
    console.log(error);
    console.log(info);
  };
  let handelLogin = () => {
    if (info.email == "") {
      setError({ ...error, email: "Please Enter your email" });
    } else if (info.password == "") {
      setError({ ...error, password: "Please Enter your Passowrd" });
    } else {
      signInWithEmailAndPassword(auth, info.email, info.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          toast.success("Login Succsfully", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/mlg");
          }, 2000);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });

      console.log("handel Login");
    }
  };
  return (
    <>
      <Container maxWidth="lg">
        <Stack
          justifyContent="center"
          direction="column"
          alignItems="center"
          gap={10}
        >
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
          <Box sx={{ margin: 10 }}>
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
              variant={"outlined"}
              label="Email Address"
              onChange={handerFrom}
              name="email"
              type="email"
            />
            {error.email && <Alert severity="error">{error.email}</Alert>}

            <Input
              onChange={handerFrom}
              sx={{ width: "100%" }}
              password={true}
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
                titel="Login"
                onClick={handelLogin}
              />
            </Box>
          </Stack>
        </Box>
        <ExtraLink titel="You have not account " content="Sing up" to="/" />
      </Container>
    </>
  );
};

export default Login;
