import { ReactNode } from "react";

import { Modal } from "@mui/material";
import Box from "@mui/material/Box";

import { style } from "./modal-default.style";

const ModalLayout = ({
  isOpened,
  children,
}: {
  isOpened: boolean;
  children: ReactNode;
}) => {
  return (
    <Modal
      open={isOpened}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      classes={{ root: 'modal__box' }}
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default ModalLayout;
