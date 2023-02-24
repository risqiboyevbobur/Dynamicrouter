import About from "../About/About";
import Create from "../CreatePage/Create";
import Home from "../Home/Home";
import Hotel from "../Hotel/Hotel";
import TableoneRow from "../Table/Table";
import Tableone from "../Table/Table";
 

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
        title: "Github users"
    }, 
     {
        path: "/work",
        element : <About/>,
        title: "Work"
    },
    {
        path: "/create",
        element : <Create/>,
        title: "Create page"
    },
    {
        path: "/hotel",
        element : <Hotel/>,
        title: "Search Hotel"
    },
    {
        path: "/tableone",
        element : <TableoneRow/>,
        title: "Result"
    }
]

export default MenuRouter