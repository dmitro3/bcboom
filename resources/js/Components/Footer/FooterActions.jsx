import { styled } from "@mui/system";
import React from "react";
import { Flex } from "../UtilComponents/Flex";
import uparrow from "../../../../public/images/svg/uparrow.svg";
import bclogo from "../../../../public/images/brand/bcboom.svg";
import Text from "../Text/Text";
import { Inertia } from "@inertiajs/inertia";
const FooterActionsWrapper = styled("div")(({}) => ({
    position: "relative",
    width: "90%",
    zIndex: 20000,
    margin: "0 auto",
    paddinbBottom: "50px",
}));

const FooterActions = () => {
    return (
        <FooterActionsWrapper>
            <Flex justifyContent="space-between">
                <div onClick={() => Inertia.visit("/")}>
                    <img
                        src={bclogo}
                        alt="bcboom"
                        style={{ height: "50px", cursor: "pointer" }}
                    />
                </div>
                <div
                    onClick={() =>
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                    }
                    style={{ textAlign: "center" }}
                >
                    <img
                        src={uparrow}
                        alt="uparrow"
                        style={{ height: "45px", cursor: "pointer" }}
                    />
                    <Text type="p" text="UP" fontWeight='bold' />
                </div>
            </Flex>
        </FooterActionsWrapper>
    );
};

export default FooterActions;
