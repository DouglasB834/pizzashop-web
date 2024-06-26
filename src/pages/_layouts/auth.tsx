
import { Pizza } from "lucide-react";
import { Outlet } from "react-router-dom";

export function AuthLayout(){

return (
    <div className="min-h-screen grid md:grid-cols-2  antialiased">
        <div className="hidden md:flex h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex-col justify-between ">
            <div className="flex items-center gap-3 text-lg font-medium text-foreground">
                <Pizza  className="h5 w-5 "/>
                <span className="font-semibold">pizza.shop</span>
            </div>
            <footer className="text-sm">
                Painel do parceiro - $Copy :{" "}                
                <a href="#" target="_blank">
                    PizzaShop
                </a>{" "}                
                Todos os direitos reservados.{" "}
                
                {new Date().getFullYear()}
            </footer>
        </div>

        <div className="flex items-center justify-center">
            <Outlet/>            
        </div>
    </div>
)

}