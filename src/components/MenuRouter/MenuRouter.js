import About from "../About/About";
import Home from "../Home/Home";

const MenuRouter = [
    {
        path: "/",
        element : <Home/>,
        title: "SearchCountry"
    },
    {
        path: "/searchUser",
        element : <About/>,
        title: "SearchUser"
    },
    {
        path: "/learn",
        element : <About/>,
        title: "Learn"
    }, 
     {
        path: "/work",
        element : <About/>,
        title: "Work"
    }
]

export default MenuRouter