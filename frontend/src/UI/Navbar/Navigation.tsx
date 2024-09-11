

import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/shadcn/ui/navigation-menu'
import { Link } from 'react-router-dom'


interface NavigationProps {
    title: string;
    path: string;
}

export const Navigation = ({ title, path }: NavigationProps) => {

    return (

        <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to={path} >
                    {title}
                </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    )
}
