/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import AnimateControls from "./Components/AnimateControls";
import DarkLightMode from "./Components/DarkLightMode";
import FramerMotion from "./Components/FramerMotion";
import Gestures from "./Components/Gestures";
import ScrollBasedAnimation from "./Components/ScrollBasedAnimation";
import ViewBasedMotion from "./Components/ViewBasedMotion";
import { useTheme } from "./Hooks/useTheme";
import { ThemeProvider } from "./Contexts/ThemeProvider";
/* import TestStore from './Components/TestStore'
import ViewStore from './Components/ViewStore' */

function App() {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <>
      {/* <TestStore />
      <ViewStore /> */}
      {/* <FramerMotion /> */}
      {/* <Gestures /> */}
      {/* <AnimateControls /> */}
      {/* <ViewBasedMotion /> */}
      {/* <ScrollBasedAnimation /> */}
      <ThemeProvider>
        <DarkLightMode themeMode={themeMode} toggleTheme = {toggleTheme}/>
      </ThemeProvider>
    </>
  );
}

export default App;
