import React from "react";
import { CssBaseline, Grid, Box, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import CustomButton from "../components/CustomButton";
import Input from "../components/Input";
import { Logo } from "../styles/Logo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/signup",
        data
      );
      console.log(response);
      if (response.data) {
        alert("회원가입에 성공했습니다.");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Navbar />
      <ThemeProvider theme={defaultTheme}>
        <Logo>
          <h1>Outstagram</h1>
          <h4>Welcome to our Outstagram!</h4>
        </Logo>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Input type="email" label="이메일" name="email" />
                </Grid>
                <Grid item xs={12}>
                  <Input type="password" label="비밀번호" name="password" />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    type="password"
                    label="비밀번호 확인"
                    name="passwordConfirmation"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input type="text" label="닉네임" name="nickname" />
                </Grid>
              </Grid>
              <CustomButton type="submit" mtOn>
                회원 가입
              </CustomButton>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
