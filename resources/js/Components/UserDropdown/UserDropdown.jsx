import { setAuthModalState } from "@/redux/auth/auth-slice";
import React from "react";
import { useDispatch } from "react-redux";
import userimg from "../../../../public/images/user/useravatar.png";
import Button from "../Button/Button";
const UserDropdown = ({
    isLoggedIn,
    user = { avatar: userimg, rank: "Rank 1", balance: "2430.76" },
}) => {
    const dispatcher = useDispatch();
    if (!isLoggedIn)
        return (
            <>
                {[
                    { text: "Log In", link: "/login", bg: "#3586FF" },
                    { text: "Sign up", link: "/signup", bg: "#F93C56" },
                ].map((item, index) => (
                    <Button
                        text={item.text}
                        onSubmit={() =>
                            dispatcher(
                                setAuthModalState({
                                    open: true,
                                    type: item.link.replace("/", ""),
                                })
                            )
                        }
                        key={index}
                        background={item.bg}
                    />
                ))}
            </>
        );

    return <div>hi world</div>;
};

export default UserDropdown;
