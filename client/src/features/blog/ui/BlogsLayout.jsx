import { Outlet } from "react-router"

const BlogsLayout = () => {
  return (
    <div className="pt-16">
        <Outlet/>
    </div>
  )
}

export default BlogsLayout