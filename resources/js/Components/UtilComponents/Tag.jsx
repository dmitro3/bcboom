import { useScreenResolution } from "@/hooks/useScreeResolution";
import React from "react";
import Text from "../Text/Text";
import { Flex } from "./Flex";

const Tag = ({ text, bg }) => {
    return (
        <Text
            text={text}
            type="p"
            background={bg}
            borderRadius="5px"
            padding="5px 10px"
            color="#4F95FF"
            fontWeight="bold"
            fontSize="14px"
            cursor='pointer'
        />
    );
};

export const RemovableTag = ({ text, bg, border, addon, onChange }) => {
    const {isMobile} = useScreenResolution()
    return (
        <Flex
            border={`1px solid ${border}`}
            borderRadius="20px"
            padding={isMobile ? '5px 8px' : "10px 13px"}
            cursor="pointer"
            onClick={onChange}
        >
            {addon && addon}
            <Text
                text={text}
                type="p"
                background={bg}
                borderRadius="5px"
                color="white"
                padding="0 0 0 12px"
                fontWeight="bold"
                fontSize="14px"
            />
        </Flex>
    );
};

export default Tag;
