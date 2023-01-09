import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { useScreenResolution } from "@/hooks/useScreeResolution";

const style = (isMobile) => {
    return {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "2px solid #000",
        boxShadow: 24,
        borderRadius: "20px",
        outline: "none",
        // padding: "20px 0",
        maxHeight: isMobile ? "65vh" : '100%',

        overflowX: "hidden",
        overflowY: "auto",
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
};
const CustomModal = ({ children, open, handleClose }) => {
    const { isMobile } = useScreenResolution();
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style(isMobile)}>
                    <div>{children}</div>
                </Box>
            </Modal>
        </div>
    );
};

export default CustomModal;
