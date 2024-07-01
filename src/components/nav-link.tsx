import { Link, LinkProps, useLocation } from 'react-router-dom'

type NavlinkProps = LinkProps

export const NavLink = (props: NavlinkProps) => {

    const { pathname } =useLocation()

  return (
    <Link
    data-active={pathname === props.to} {...props} className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground gap-1.5 data-[active=true]:text-foreground" />
  )
}
