import { Navbar } from "../components//Navbar/Navbar"




export const AppLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}
