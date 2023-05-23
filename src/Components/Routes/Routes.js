import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Single from "../Pages/Single/Single";
import Main from "../Main/Main";
import Vewall_product from "../Pages/Home/Card_box/Vewall_product/Vewall_product";
import SingleProducts from "../Pages/Home/Card_box/Latest_product_order/SingleProducts/SingleProducts";
import Customers from "../Pages/Customers/Customers";
import Ragister from "../Pages/Ragister/Ragister";
import Privateroutes from "../Privateroutes/Privateroutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Privateroutes><Home></Home></Privateroutes>,
            },
            {
                path: 'product',
                element:<Vewall_product/> ,
                loader: () => {
                    return fetch('https://dummyjson.com/products')
                },
            },
            {
                path: '/details/:Id',
                element: <SingleProducts />,
                loader: ({ params }) => {
                    return fetch(`https://dummyjson.com/products/${params.Id}`)
                },
            },
            {
                path: 'customers',
                element: <Customers />
            },
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'single',
                element: <Single />
            },

        ]
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'ragister',
        element: <Ragister/>
    }
  
])