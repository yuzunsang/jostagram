import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box, Container } from "@mui/material";
import { Input, Button } from "../components";
import { Logo } from "../styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/login",
        data
      );
      if (response.data) {
        alert("로그인에 성공했습니다!");
        navigate("/home");
      }
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
            <Input type="email" label="이메일" name="email" />
            <Input type="password" label="비밀번호" name="password" />
            <Button type="submit" mtOn>
              로그인
            </Button>
            <Button type="button" onClick={() => navigate("/signup")}>
              회원가입하기
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
