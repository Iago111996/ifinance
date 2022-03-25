import { useState } from "react";
 
export const Home = () => {
    const [x, setX] = useState("");
    return <form>
        <input type="text" value={x} onChange={e => setX(e.target.value)}/>
    </form>
}