import { styled, Box } from "@mui/material";

const ContainerModal = styled(Box)(({ theme, open }) => ({
  position: "fixed",
  left: "0",
  right: "0",
  top: "0",
  bottom: "0",
  backgroundColor: "rgba(17,17,17,.4)",
  opacity: open ? 1 : 0,
  visibility: open ? "visible" : "hidden",
  transition: "opacity .5s ease-in-out, visibility 1s ease-in-out",
  zIndex: "40",
  display:open? "flex":"none",
}));

export const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <ContainerModal open={isOpen} onClick={closeModal} sx={{opacity:isOpen ? "1":"0"}}>
      {children}
    </ContainerModal>
  );
};
