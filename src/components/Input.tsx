import { TextField } from "@mui/material";

interface Props {
  type: "text" | "email" | "password" | "checkbox" | "image";
  label: string;
  name: string;
}

export default function Input({ type, label, name }: Props) {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={name}
      label={label}
      name={name}
      type={type}
      autoComplete={type}
    />
  );
}
