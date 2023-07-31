import { css } from "../../styled-system/css";

type ToastProps = {
  success: boolean;
  label: string;
};

function Toast({ success = false, label }: ToastProps) {
  return (
    <div
      className={css({
        backgroundColor: success ? "green.500" : "red.800",
        width: "100%",
        paddingX: 4,
        paddingY: 2,
        color: "white",
        borderRadius: "lg",
      })}
    >
      {label}
    </div>
  );
}

export default Toast;
