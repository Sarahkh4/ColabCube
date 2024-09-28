import Header from "./components/common/Header"
import SideBar from "./components/common/SideBar"
import Dashboard from "./pages/Dashboard"


function App() {

  return (
    <>
    <div className="flex">
    <SideBar/>
     
      <div className="ml-96">
      <Header/>
        <Dashboard/>
      </div>
    </div>

    </>
  )
}

export default App
