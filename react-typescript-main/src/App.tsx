import { useState } from "react";
import { Page } from "./pages/Page"
import { Trial } from "./pages/Trial"
export const App = () => {

    const [visibilidad, setVisibilidad] = useState<boolean>(false);
    return (
        <>
            <button onClick={() => { setVisibilidad(!visibilidad) }}>Cambiar vista</button>
            {visibilidad ? <Page /> : <Trial />}
        </>
    )
}
