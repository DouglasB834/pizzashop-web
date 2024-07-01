
import { Building, ChevronDown, LogOut } from 'lucide-react'

import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'

import { Button } from './ui/button'
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel } from './ui/dropdown-menu'
import { Separator } from './ui/separator'

export const AccountMenu = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline"
            className='flex items-center gap-2 select-none'>
                Pizza Shop
                <ChevronDown className='h-4 w-4'/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className='w-56'>
            <DropdownMenuLabel className='flex flex-col'>
               <p>Douglas Borges</p>
               <span>Douglas_borges@teste</span>
            </DropdownMenuLabel>
            <Separator/>
            <DropdownMenuItem  >
                <Building className='w-4 h-4 mr-2'/>
                Perfil da loja 
            </DropdownMenuItem>
            <DropdownMenuItem className='text-rose-500 dark:text-rose-400'  >
                <LogOut className='w-4 h-4 mr-2'/>
                Sair
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

                {/* <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}