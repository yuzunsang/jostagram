import React from "react";
import { TextField, InputAdornment, Button } from "@mui/material";
import styled from "styled-components";

interface Props {
  type?: React.HTMLInputTypeAttribute;
  label: string;
  name: string;
  doubleCheck?: boolean;
}

const CustomTextField = styled(TextField)({
  "& .MuiInputLabel-asterisk": {
    display: "none",
  },
});

export default function Input({ type, label, name, doubleCheck }: Props) {
  return (
    <CustomTextField
      margin="normal"
      required
      fullWidth
      id={name}
      label={label}
      name={name}
      type={type}
      autoComplete={type}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {doubleCheck && (
              <Button variant="outlined" color="error">
                중복 확인
              </Button>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
}
