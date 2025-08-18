import { forwardRef } from "react";
import {
  Button as MantineButton,
  type ButtonProps,
  type ElementProps,
} from "@mantine/core";

type Props = ButtonProps & ElementProps<"button">;

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <MantineButton ref={ref} {...props} />;
});

Button.displayName = "Button";
export default Button;
