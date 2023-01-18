import { Suspense } from "react"
import { useRoutes } from "react-router"
import routes from "./routes"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import "./styles/Global.css"
import Loader from "./assets/Loader"
import { Provider } from "react-redux"
import store from "./redux/store"

function App() {
  const routeToPages = useRoutes(routes);
  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          {routeToPages}
        </Suspense>
      </Provider>
    </>
  )
}

export default App
