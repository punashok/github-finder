import Navbar from "./components/layouts/Navbar";
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User"
import NotFound from "./pages/Not Found";
import Footer from "./components/layouts/Footer";
import { GitHubProvider } from "./Context/github/GitHubContext";
import { AlertProvider } from "./Context/alert/AlertContext";
import Alert from "./components/layouts/Alert";

function App() {
  return (
    <GitHubProvider>
      <AlertProvider>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Alert />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="user/:login" element={<User />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </main>
        <Footer />
        </div>
        </AlertProvider>
      </GitHubProvider>
  );
}

export default App;
