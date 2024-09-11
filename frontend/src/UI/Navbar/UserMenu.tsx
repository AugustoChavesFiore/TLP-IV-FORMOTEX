import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, } from '@/components/shadcn/ui/dropdown-menu'
import { Link } from 'react-router-dom'

interface UserMenuProps {
    handleLogout: () => void;
    firstName: string;
};

export const UserMenu = ({ handleLogout, firstName }: UserMenuProps) => {
    return (
        <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>{ firstName }</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem>
                   <Link to="settings">Configuraciones</Link>
                </DropdownMenuItem>
                <DropdownMenuItem 
                className='text-red-500'
                onClick={handleLogout}>
                            Cerrar Sesión
                    </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    )
}
