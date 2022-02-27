import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import Navigation from "~/navigation";
import { useCachedResources } from "~/hooks";

const App = () => {
  const isResourcesLoaded = useCachedResources();
  if (isResourcesLoaded) {
    return (
      <>
        <Navigation />
        <StatusBar style="auto" />
      </>
    );
  } else {
    return null;
  }
};

export default App;
