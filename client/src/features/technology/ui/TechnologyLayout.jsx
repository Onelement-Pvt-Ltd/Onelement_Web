import { Outlet } from "react-router"
import Technology from "./Technology"

const TechnologyLayout = () => {
  return (
    <div className="pt-16">
        <Outlet/>
    </div>
  )
}

export default TechnologyLayout