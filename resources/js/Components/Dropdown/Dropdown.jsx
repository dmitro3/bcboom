import { styled } from "@mui/system";
import { Dropdown as AntDDropdown, Menu } from "antd";
import { useRef } from "react";
const Wrapper = styled(Menu)`
    max-height: 30vh;
    overflow-y: auto;
    border-radius: 20px;
`;

// const Border = styled("div")(({}) => ({
//     border: `1px solid ${({ border }) => border || "#bdbdbd"}`,
//     borderRadius: `${({ borderRadius }) => borderRadius || "100px"}`,
// }));

const menu = (data, setValue, customFunc = () => {}) => (
    <Wrapper>
        {data?.map((v, i) => (
            <Menu.Item
                onClick={() => {
                    setValue(v);
                    customFunc(v);
                }}
                key={i}
            >
                <img src={v.icon} alt="" />
                {/* <p className="py-3">{v}</p> */}
            </Menu.Item>
        ))}
    </Wrapper>
);

export default function Dropdown({
    label,
    labelstyle,
    data,
    setValue,
    children,
    customFunc,
    errors,
    errorMessage,
    padding,
    borderRadius,
}) {
    const dropdownRef = useRef(null);
    return (
        <div ref={dropdownRef}>
            {label && (
                <p className="text-md text-black mb-4" style={labelstyle}>
                    {label}
                </p>
            )}
            <AntDDropdown
                trigger={["click"]}
                menu={menu(data, setValue, customFunc && customFunc)}
                placement="bottomLeft"
                className="w-full"
            >
                {children}
            </AntDDropdown>
            {errors && (
                <p style={{ margin: "5px 0 0 0", color: "red" }}>
                    {errorMessage}
                </p>
            )}
        </div>
    );
}
