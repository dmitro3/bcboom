import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux/es/exports";
import store from "./redux/store";

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
                <App {...props} />
            </Provider>
        );
    },
});



// Inertia.on("start", () => {
//     console.log("starteed!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
// });

// Inertia.on("progress", (event) => {
//     console.log("progress!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
// });
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
