import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";



import Dashboard from "./pages/dashboard";
import Groups from "./pages/groups";
import Transactions from "./pages/transactions";
import Proposals from "./pages/proposals";
import Profile from "./pages/profile";
import Market from "./pages/market";
import Page1 from "./pages/page1";
import Page3 from "./pages/page3";
import Page2 from "./pages/page2";
import Vote from "./pages/vote";
import Page4 from "./pages/page4";

import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';


import '/Applications/GitHub/DAO2/my-app3/src/app.css';



const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  
  library.pollingInterval = 8000;
  return library;
};

function App() {
  const [theme, colorMode] = useMode();
  return (
<Web3ReactProvider getLibrary={getLibrary}>

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/groups" element={<Groups />} />
                <Route path="/proposals" element={<Proposals />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
                <Route path="/vote" element={<Vote />} />
                <Route path="/market" element={<Market />} />
                <Route path="/page4" element={<Page4 />} />
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>

</Web3ReactProvider>

  );
};

export default App;
