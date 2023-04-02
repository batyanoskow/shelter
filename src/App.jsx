import { Header } from "./components/Header/Header";
import { Who } from "./components/Who";
import { Help } from "./components/Help";
import { VideoBlock } from "./components/Video"
import { Gallery } from "./components/Gallery"
import { Team } from "./components/Team";
import { Footer } from "./components/Footer"
import  "./scss/style.scss"

const App = () =>  {
    return (
     <>
        <div className="wrapper">
           <Header />
           <main className="page">
               <Who />
               <Help />
               <VideoBlock />
               <Gallery />
               <Team />
           </main>
           <Footer />
        </div>
     </>
    );
  }
  
  export {App};