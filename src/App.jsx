import { useRoutes } from "react-router"
import routes from "./routes"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap"
import "./styles/Global.css"
function App() {
  const routeToPages = useRoutes(routes);
  return (
    <>
       {routeToPages}
    </>
  )
}

export default App
