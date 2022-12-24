import { useRoutes } from "react-router"
import routes from "./routes"
import "../node_modules/materialize-css/dist/css/materialize.css"
function App() {
  const routeToPages = useRoutes(routes);
  return (
    <>
       {routeToPages}
    </>
  )
}

export default App
