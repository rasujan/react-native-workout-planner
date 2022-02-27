import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    // fontFamily: "nunito",
  },
});

export default App;
