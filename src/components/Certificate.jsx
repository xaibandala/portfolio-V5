import React, { useState } from "react"
import { Modal, Box } from "@mui/material"

const Certificate = ({ ImgSertif }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box sx={{ width: "100%" }}>
      {/* Clickable Thumbnail */}
      <Box
        onClick={handleOpen}
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
          },
        }}
      >
        <img
          src={ImgSertif}
          alt="Certificate"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Fullscreen Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(0, 0, 0, 0.9)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            outline: "none",
          }}
          onClick={handleClose}
        >
          <img
            src={ImgSertif}
            alt="Certificate Full View"
            style={{
              display: "block",
              maxWidth: "100%",
              maxHeight: "90vh",
              margin: "0 auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Modal>
    </Box>
  )
}

export default Certificate
