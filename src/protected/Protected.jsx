import { Navigate } from "react-router"

export const Protected = ({ children }) => {

    const user = localStorage.getItem('usermode')
    console.log(user)
    if (user) {
      return children
    }
    else {
      return <Navigate to={'/'}/>
    }
 }