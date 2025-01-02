import { Box, Modal } from "@mui/material";
import React from "react";

const ModalUnstyled = ({ open, onClose, title, children }) => {
  return (
    <Modal aria-labelledby="modal_title" open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          width: "320px",
          height: "180px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "16px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 id="modal_title">{title}</h2>
        {children}
      </Box>
    </Modal>
  );
};
export default ModalUnstyled;
