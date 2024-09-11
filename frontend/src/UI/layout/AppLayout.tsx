import { Navbar } from "../Navbar/Navbar"




export const AppLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}
