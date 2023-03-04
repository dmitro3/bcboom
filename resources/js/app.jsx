import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux/es/exports";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Lines } from "react-preloaders";
import GuestLayout from "./Layouts/GuestLayout";
// import Preloader from "./Components/UtilComponents/Preloader";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText ||
    "BcBoom Casino";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Provider store={store}>
                {/* <Preloader /> */}
                <PersistGate loading={null} persistor={persistor}>
                    <GuestLayout>
                        <App {...props} />
                    </GuestLayout>
                    {/* <Lines background="#272C4B" color={"#f7f7f7"} /> */}
                </PersistGate>
            </Provider>
        );
    },
});

// Inertia.on("start", () => {
//     console.log("starteed!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
// });

// Inertia.on("progress", (event) => {
//     console.log("progress!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
// });-
// Inertia.on("finish", (event) => {
//     console.log("finish!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
// });

InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 50,

    // The color of the progress bar.
    color: "#29d",

    // Whether to include the default NProgress styles.
    includeCSS: true, //this

    // Whether the NProgress spinner will be shown.
    showSpinner: true,
});
