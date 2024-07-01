import { Home, PizzaIcon, UtensilsCrossed } from "lucide-react"

import { Separator } from "./ui/separator"
import { AccountMenu } from "./account-menu"
import { NavLink } from "./nav-link"
import { ThemeToggle } from "./theme-toogle"

export const Header = () => {
  return (
    <header className="border-b" >
        <div className="flex h-16 items-center gap-4  px-4">
            <PizzaIcon className="h-5 w-5"/>
            <Separator orientation="vertical" className="h-6" />

            <nav className="flex items-center space-x-4 lg:space-x-6">
                <NavLink to={"/"} >
                    <Home className="w-4 h-4"/>
                        Inicio 
                
                </NavLink>

                <NavLink to={"/orders"} >
                    <UtensilsCrossed className="w-4 h-4" />
                        Pedidos 
                </NavLink>
            </nav>

            <div className="ml-auto flex items-center gap-2">
                <ThemeToggle/>
                <AccountMenu/>
            </div>
    
        </div>        
    </header>
  )
}
