import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { BootLoader } from "./components/device/BootLoader";
import { TabletFrame } from "./components/device/TabletFrame";
import { Toaster } from "./components/ui/toaster";
import AppPage from "./pages/AppPage";
import HomeScreen from "./pages/HomeScreen";
import NotFound from "./pages/not-found";
import React from "react";


function Router() {
  return (
    <Switch>
      <Route path="/" component={HomeScreen} />
      <Route path="/app/:appId" component={AppPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isBooting, setIsBooting] = useState<boolean>(true);

// Mock storage to remember if the boot animation has been shown
  useEffect(() => {
    const hasBooted = sessionStorage.getItem('hasBooted');
    if (hasBooted) {
      setIsBooting(false);
    } else {
      // First visit in this session, show boot animation
      sessionStorage.setItem('hasBooted', 'true');
    }
  }, []);

  const handleBootComplete = () => {
    setIsBooting(false);
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      <TabletFrame>
        {isBooting ? (
          <BootLoader onComplete={handleBootComplete} />
        ) : (
          <Router />
        )}
      </TabletFrame>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
