import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "20px",
    // bordre: "transparent",

    // "&:before": {
    //     content: '""',
    //     position: "absolute",
    //     top: 0,
    //     right: 0,
    //     bottom: 0,
    //     left: 0,
    //     zIndex: -1,
    //     borderRadius: "inherit",
    //     background:
    //         "linear-gradient(90deg, #FFDE9F 0%, rgba(9,9,121,1) 0%, #50ABFF 100%)",
    // },
};

const CustomModal = ({ children, open, handleClose }) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>{children}</Box>
            </Modal>
        </div>
    );
};

export default CustomModal;
