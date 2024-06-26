import { TextField } from "@mui/material";

interface propsValue {
  type: string;
  name: string;
}

export default function Input({ type, name }: propsValue) {
  function autoCompleteFormat(name: string): string {
    return name.split("")[0].toUpperCase() + name.slice(1);
  }

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={name}
      label={name}
      name={name}
      type={type}
      autoComplete={autoCompleteFormat(name)}
    />
  );
}
