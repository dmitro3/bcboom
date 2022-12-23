import { setDrawerState } from "@/redux/app-state/app-slice";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";

const Sidedrawer = () => {
    const { drawerState } = useSelector((state) => state.app);
    console.log("drawerState", drawerState);
    const dispatcher = useDispatch();
    return (
        <Drawer
            anchor={"left"}
            open={drawerState.open}
            onClose={() =>
                dispatcher(
                    dispatcher(setDrawerState({ open: !drawerState.open }))
                )
            }
        >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
        </Drawer>
    );
};

export default Sidedrawer;
