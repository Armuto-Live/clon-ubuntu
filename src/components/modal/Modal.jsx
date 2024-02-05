import { styled, Box } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../context/Context";

const ContainerModal = styled(Box)(({ theme, open }) => ({
  position: "fixed",
  left: "0",
  right: "0",
  top: "0",
  bottom: "0",
  backgroundColor: "rgba(17,17,17,.4)",
  opacity: open ? 1 : 0,
  visibility: open ? "visible" : "hidden",
  transition: "opacity .3s ease-in-out, visibility 1s ease-in-out",
  zIndex: "-1",
  display:open? "flex":"none",
}));

export const Modal = () => {
  
  const {closeModal,isOpenModal} = useContext(DataContext);
  return (
    <ContainerModal open={isOpenModal} onClick={closeModal} sx={{opacity:isOpenModal ? "1":"0"}}>
    </ContainerModal>
  );
};
