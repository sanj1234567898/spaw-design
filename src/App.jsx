import "./scss/app.scss";
import Header from "./Header";
import Welcome from "./Welcome";
import Work from "./Work";
import Footer from "./Footer";
import ModuleWindow from "./ModuleWindow";
import React, { useState } from "react";

function App() {
  const [openModule, setOpenModule] = useState(true);

  const handleModuleWindow = () => {
    setOpenModule((prev) => !prev);
  };

  return (
    <>
      <Header handleModuleWindow={handleModuleWindow} />
      <Welcome />
      <Work />
      <Footer />
      {openModule && <ModuleWindow handleModuleWindow={handleModuleWindow} />}
    </>
  );
}

export default App;
