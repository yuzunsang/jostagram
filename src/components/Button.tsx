import { Button as MuiButton } from "@mui/material";

interface Props {
  type?: "button" | "submit" | "reset";
  mtOn?: boolean;
  children: string;
  onClick?: () => void;
}

interface CssStyle {
  mt?: number;
  mb: number;
  fontSize: number;
  fontWeight: string;
}

export default function Button({ type, mtOn, children, ...props }: Props) {
  const cssClasses: CssStyle = { mb: 2, fontSize: 18, fontWeight: "bold" };
  if (mtOn) cssClasses.mt = 3;

  return (
    <MuiButton
      type={type}
      fullWidth
      variant={type === "submit" ? "contained" : "outlined"}
      sx={cssClasses}
      {...props}
    >
      {children}
    </MuiButton>
  );
}
