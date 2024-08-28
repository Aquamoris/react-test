import AppRouter from "./routes/AppRouter.tsx";
import {useEffect, useState} from "react";
import ViteConfig from "../../vite.config.ts";

const App = () => {
    return (
        <AppRouter />
    );
};

export default App;