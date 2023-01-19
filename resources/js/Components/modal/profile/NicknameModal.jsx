import { useScreenResolution } from "@/hooks/useScreeResolution";
import {
    changeNicknameModalState,
    changeProfileImage,
    changeUsername,
    resetProfileImage,
    setProfileColorStore,
} from "@/redux/profile/profileSlice";
import { styled } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "../Modal";
import xIcon from "../../../../../public/images/svg/xicon.svg";
import Text from "@/Components/Text/Text";
import userimg from "../../../../../public/images/user/useravatar.png";
import pencilIcon from "../../../../../public/images/svg/pencil.svg";
import { Flex } from "@/Components/UtilComponents/Flex";
import BcButton from "@/Components/Button/Button";
import { dataURItoBlob, sleep } from "@/utils/util";
import { toast } from "react-toastify";
import { useFilePicker } from "use-file-picker";
const NicknameModalWrapper = styled("div")(({ isMobile }) => ({
    background: "#1D2036",
    position: "relative",
    borderRadius: "10px",
    border: "transparent",
    width: isMobile ? "90vw" : "450px",
    // height: isMobile && "80vh",
    overflowY: "hidden",
    padding: "12px",
    margin: "0 auto",
    outline: "none",
}));

const CloseIcon = styled("div")(({ isMobile }) => ({
    position: "absolute",
    cursor: "pointer",
    top: "20px",
    right: "20px",
    zIndex: 3030303,
}));

const UsernameAndProfile = styled("div")(({ editable }) => ({
    background: "linear-gradient(119.77deg, #282D56 2.99%, #444AC6 100%)",
    borderRadius: "10px",
    padding: "15px",
    display: "flex",
    alignItems: "center",
    gap: "25px",
    margin: "20px 0",

    "& input": {
        background: "transparent",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
        border: "none",
        borderBottom: editable && "1px solid white",
        width: "fit-content",
    },
}));

const UserImage = styled("div")(({ size, background }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: background,
    borderRadius: "50%",
    width: size || "45px",
    height: size || "45px",
    cursor: "pointer",

    "& img": {
        borderRadius: "50%",
        width: "100%",
        height: "100%",
    },
}));

const ProfileColorWrapper = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    // alignItems: "center",
    // justifyContent: "center",
    background: "linear-gradient(119.77deg, #282D56 2.99%, #444AC6 100%)",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "30px",
}));

const NicknameModal = () => {
    const { nicknameModalState, profile } = useSelector(
        (state) => state.profile
    );
    const { isMobile } = useScreenResolution();
    const dispatcher = useDispatch();
    const [profileColor, setProfileColor] = useState("#64A2FF");
    const [editable, makeEditable] = useState(false);
    const [username, setUsername] = useState(profile?.username || "");
    const inputRef = useRef(null);
    const fileRef = useRef(null);
    const COLORS = ["#64A2FF", "#64FFE3", "#FF9C64", "#FF6480", "#A8FF64"];
    const [submitted, setSubmitted] = useState(false);
    const [newImage, setNewImage] = useState(null);
    const [profileImage, setProfileImage] = useState(profile?.image || userimg);
    // const [openFileSelector, { filesContent }] = useFilePicker({
    //     readAs: "DataURL",
    //     accept: "image/*",
    //     maxFileSize: 10,
    // });
    const [rawFile, setRawFile] = useState(null);
    // useEffect(() => {
    //     if (filesContent[0]) {
    //         setNewImage(filesContent[0]);
    //     }
    // }, [filesContent]);
    // let profileImage = profile?.image || userimg;
    return (
        <CustomModal
            open={nicknameModalState?.open}
            handleClose={() =>
                dispatcher(changeNicknameModalState({ open: false }))
            }
            shouldHaveBorder={true}
            styles={{ borderRadius: "10px", border: "1px solid #000" }}
        >
            <NicknameModalWrapper isMobile={isMobile}>
                <CloseIcon
                    onClick={() =>
                        dispatcher(
                            changeNicknameModalState({
                                open: !nicknameModalState.open,
                            })
                        )
                    }
                    isMobile={isMobile}
                >
                    <img src={xIcon} alt="" />
                </CloseIcon>

                <Text
                    type="p"
                    text="Change Nickname"
                    color="#3586FF"
                    fontSize="20px"
                    fontWeight="bold"
                    textAlign="center"
                />

                <UsernameAndProfile editable={editable}>
                    <UserImage
                        size={"70px"}
                        background={profileColor}
                        onClick={() => fileRef.current.click()}
                    >
                        <img
                            src={newImage?.content || profileImage}
                            alt="user image"
                            style={{ height: "100%", borderRadius: "50%" }}
                        />
                    </UserImage>
                    <input
                        type="file"
                        name=""
                        id=""
                        accept="image/*"
                        onChange={async (e) => {
                            const file = e.target.files[0];
                            setRawFile(file);
                            const reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = () => {
                                setNewImage({
                                    content: reader.result,
                                    name: file.name,
                                });
                            };
                            // await dispatcher(
                            //     changeProfileImage({ image: file })
                            // );
                        }}
                        ref={fileRef}
                        style={{ display: "none" }}
                    />
                    <Flex gap="10px">
                        <img
                            src={pencilIcon}
                            alt="edit"
                            // onClick={() => makeEditable(!editable)}
                            onClick={() => {
                                makeEditable(!editable);
                                if (editable) inputRef.current.focus();
                            }}
                            style={{ cursor: "pointer" }}
                        />
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={!editable}
                            ref={inputRef}
                            onBlur={() => makeEditable(false)}
                        />
                        {/* <Text
                            type="p"
                            text={profile?.username || "uswer23se"}
                            color="white"
                            fontSize="18px"
                            fontWeight="bold"
                        /> */}
                    </Flex>
                </UsernameAndProfile>
                <ProfileColorWrapper>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <Flex
                            justifyContent="space-between"
                            width="100%"
                            key={i}
                        >
                            {COLORS.map((color, i) => (
                                <UserImage
                                    size={"70px"}
                                    background={color}
                                    key={i}
                                    onClick={() => {
                                        setProfileColor(color);
                                        setProfileImage(userimg);
                                        setNewImage(null);
                                    }}
                                >
                                    <img
                                        src={userimg}
                                        alt="user image"
                                        style={{ height: "100%", borderRadius: "50%" }}
                                    />
                                </UserImage>
                            ))}
                        </Flex>
                    ))}
                </ProfileColorWrapper>
                <Flex alignItems="center" justifyContent="center" gap="20px">
                    <BcButton
                        text="Leave"
                        background="#384183"
                        padding="8px 30px"
                        textTransform="capitalize"
                        fontWeight="bold"
                        fontSize="17px"
                        onSubmit={() =>
                            dispatcher(
                                changeNicknameModalState({ open: false })
                            )
                        }
                    />
                    <BcButton
                        text={submitted ? "Saving..." : "Save"}
                        background="#3586FF"
                        padding="8px 30px"
                        textTransform="capitalize"
                        fontWeight="bold"
                        fontSize="17px"
                        onSubmit={async () => {
                            setSubmitted(true);
                            if (username !== profile?.username) {
                                await dispatcher(changeUsername({ username }));
                            }
                            if (rawFile && newImage) {
                                const res = await dispatcher(
                                    changeProfileImage({ image: rawFile })
                                );
                                if (res?.payload?.status === 200) {
                                    toast.success("Profile image updated");
                                    return dispatcher(
                                        changeNicknameModalState({
                                            open: false,
                                        })
                                    );
                                }
                            }

                            if (profileImage === userimg) {
                                dispatcher(resetProfileImage(userimg));
                            }
                            // await sleep(2000);
                            dispatcher(setProfileColorStore(profileColor));
                            dispatcher(
                                changeNicknameModalState({ open: false })
                            );
                            toast.info("Profile updated");
                            setSubmitted(false);
                        }}
                    />
                </Flex>
            </NicknameModalWrapper>
        </CustomModal>
    );
};

export default NicknameModal;
