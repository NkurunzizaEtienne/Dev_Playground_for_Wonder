import { Outlet, NavLink, Link } from "react-router-dom";

const RootLayout = () => {
    return ( 
        <div>
            <header className="px-3 py-2">
               <nav className="flex space-x-80 p-3">
                <h1>Josia</h1>
                <div  className="flex space-x-3 ">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                </div>
               </nav>             
            </header>

            <main className="py-3 min-h-96">
                <Outlet />
            </main>

            <footer className="grid grid-cols-4 gap-3 mt-4 bg-slate-500 p-3 ">
                <div>
                    sponsors
                </div>
                <div>
                    shareholders
                </div>
                <div>
                    partners
                </div>
                <div>
                    Board of directors
                </div>
            </footer>
        </div>
     );
}
 
export default RootLayout;