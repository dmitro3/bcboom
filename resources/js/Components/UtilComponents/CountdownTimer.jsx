import { format } from "date-fns";
import dayjs from "dayjs";
import React from "react";
import Text from "../Text/Text";
import { Flex } from "./Flex";

const CountdownTimer = () => {
    const PrimaryText = ({ text }) => (
        <Text
            type="p"
            text={text}
            color="white"
            fontSize="15px"
            fontWeight="bold"
            padding="0 2px 0 3px"
        />
    );
    const SecondaryText = ({ text }) => (
        <Text
            type="p"
            text={text}
            color="#A6AFE0"
            fontSize="12px"
            fontWeight="light"
        />
    );
    return (
        <Flex margin="0 0 0 20px" gap='2px'>
            <div>
                <PrimaryText text="04" />
                <SecondaryText text="Day" />
            </div>
            <span style={{ color: "#A6AFE0" }}>:</span>
            <div>
                <PrimaryText text="20" />
                <SecondaryText text="Hr" />
            </div>
            <span style={{ color: "#A6AFE0" }}>:</span>
            <div>
                <PrimaryText text="58" />
                <SecondaryText text="Min" />
            </div>
            <span style={{ color: "#A6AFE0" }}>:</span>
            <div>
                <PrimaryText text="21" />
                <SecondaryText text="Sec" />
            </div>
        </Flex>
    );
};

export default CountdownTimer;
