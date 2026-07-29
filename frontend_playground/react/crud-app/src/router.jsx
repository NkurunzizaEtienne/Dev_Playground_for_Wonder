import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./layout/rootLayout"
import ErrorPage from "./pages/404"
import Home from "./pages/home"
import About from "./pages/about"
import Products from "./pages/products"
import { productAction, productLoader, productPostAction, productsLoader } from "./api/products.api"
import Details from "./pages/details"
import Form from "./pages/form"

export const router = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        errorElement: <ErrorPage/>,
        children:[
            {index:true, element: <Home/>},
            {path: 'about', element: <About/>},
            {path: 'products',
             element: <Products/>,
             loader: productsLoader,
             action: productPostAction
            },
            {path: 'products/:id',
             element: <Details/>,
             loader: productLoader,
             action: productAction
            },
            {path: 'postProduct',
             element: <Form/>,
             
            },
        ]
    }
])