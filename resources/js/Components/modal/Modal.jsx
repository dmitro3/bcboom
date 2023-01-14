import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { useScreenResolution } from "@/hooks/useScreeResolution";

const style = (isMobile, isAuthModal) => {
    return {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: isAuthModal && "2px solid #000",
        background:  isAuthModal && "linear-gradient(#FFDE9F,#50ABFF)",
        padding: "1px",
        boxShadow: 24,
        borderRadius: "20px",
        outline: "none",
        maxHeight: '80vh',
        overflow: isMobile ? 'initial' : 'scroll'
        // padding: "20px 0",
        // overflowX: 'scroll'
        // overflowX: "hidden",
        // overflowY: "auto",
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
const CustomModal = ({ children, open, handleClose, isAuthModal = false }) => {
    const { isMobile } = useScreenResolution();

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style(isMobile, isAuthModal)}>
                    {isMobile && isAuthModal ? (
                        <div
                            style={{
                                maxHeight: "70vh",
                                overflow: "scroll",
                                borderRadius: "20px",
                            }}
                        >
                            {children}
                        </div>
                        ) : (
                        <div>{children} </div>
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default CustomModal;
