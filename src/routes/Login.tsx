import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";
import CustomButton from "../components/CustomButton";

const theme = createTheme();

const Logo = styled.div`
  margin: 20px;
  background-color: #ffffff;
`;

export default function Login() {
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    try {
      const response = await axios.post("/login", data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Logo>
        <h1>Outstagram</h1>
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
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Input type="text" name="username" />
            <Input type="password" name="password" />
            <CustomButton type="submit">로그인</CustomButton>
            <CustomButton type="button" onClick={() => navigate("/signup")}>
              회원가입하기
            </CustomButton>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
