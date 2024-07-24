import "./App.css";
import ResponsiveAppBar from "./components/layouts/user_header";
import ColorInversionFooter from "./components/layouts/user_footer";
import { Outlet } from "react-router-dom";
import "./index.css";
function App() {
  return (
    <>
      <ResponsiveAppBar />
      <main className="chieucao">
        <Outlet />
      </main>
      <ColorInversionFooter />
    </>
  );
}

export default App;
