import { Button } from "@mui/material";

interface propsValue {
  type: string;
  children: string;
  onClick?: () => void;
}

interface cssStyle {
  mt?: number;
  mb: number;
  fontSize: number;
  fontWeight: string;
}

export default function CustomButton({ type, children, ...props }: propsValue) {
  const cssClasses: cssStyle = { mb: 2, fontSize: 18, fontWeight: "bold" };
  if (type === "submit") cssClasses.mt = 3;

  return (
    <Button
      type={type === "submit" ? "submit" : "button"}
      fullWidth
      variant={type === "submit" ? "contained" : "outlined"}
      sx={cssClasses}
      {...props}
    >
      {children}
    </Button>
  );
}
