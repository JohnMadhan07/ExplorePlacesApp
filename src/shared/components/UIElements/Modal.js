import React, { useState } from "react";
import { Button, Box, Modal } from "@mui/material";

const BaseModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        View on Map
      </Button>
      <Modal
        aria-labelledby="modal_title"
        open={open}
        onClose={handleClose} 
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <h2 id="modal_title">Hi</h2>
        </Box>
      </Modal>
    </>
  );
};

export default BaseModal;
