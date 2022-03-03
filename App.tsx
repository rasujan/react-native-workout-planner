import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { AppNavigation } from "~/navigation";
import { useCachedResources } from "~/hooks";

const App = () => {
  const isResourcesLoaded = useCachedResources();
  if (isResourcesLoaded) {
    return (
      <>
        <AppNavigation />
        <StatusBar style="auto" />
      </>
    );
  } else {
    return null;
  }
};

export default App;
