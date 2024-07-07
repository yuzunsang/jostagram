import { Button } from "../components";
import { Stack } from "@mui/material";
import { useRef, forwardRef, useImperativeHandle } from "react";

interface Props {
  title: string;
  onCancel: () => void;
  onDelete: () => void;
}

const Modal = forwardRef(function Modal(
  { title, onCancel, onDelete }: Props,
  ref
) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        if (dialog.current) {
          dialog.current.showModal();
        }
      },
      close() {
        if (dialog.current) {
          dialog.current.close();
        }
      },
    };
  });

  return (
    <dialog ref={dialog}>
      <h2>{title}</h2>
      <form method="dialog">
        <Stack direction="row" spacing={2}>
          <Button onClick={onCancel}>취소</Button>
          <Button onClick={onDelete}>삭제</Button>
        </Stack>
      </form>
    </dialog>
  );
});

export default Modal;
