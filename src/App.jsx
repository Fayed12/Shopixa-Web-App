// react router
import { Outlet } from "react-router"

// local
import NavBar from "./components/nav-bar/navBar"
import Footer from "./components/footer/footer"

function App() {

  return (
    <>
      <div className="all-page">
        <NavBar />
        <div className="w-full flex justify-center">
          <div className="container">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App
