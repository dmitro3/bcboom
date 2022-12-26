import { setWalletModalState } from "@/redux/wallet/wallet-slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "../Modal";

const WalletModal = () => {
    const { modalState } = useSelector((state) => state.wallet);
    const dispatcher = useDispatch();
    return (
        <CustomModal
            open={modalState.open}
            handleClose={() => dispatcher(setWalletModalState({ open: false }))}
        >
            wallet
        </CustomModal>
    );
};

export default WalletModal;
