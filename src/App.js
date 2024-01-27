import Header from "./components/header"
import Navbar from "./components/navbar"
import PopupMsg from "./components/popupMsg"
import Heroimg from "./components/herosection"
import Boxes from "./components/boxes"
import Topics from "./components/topics"
import Boxtopic from "./components/secondbox"
import Footer from "./components/footer"

function App(){
    return(
            <>
            <Header></Header>
            <Navbar></Navbar>
            <PopupMsg></PopupMsg>
            <Heroimg></Heroimg>
            <Boxes></Boxes>
            <Topics></Topics>
            <Boxtopic></Boxtopic>
            <Footer></Footer>
            </>
    )
}
export default App