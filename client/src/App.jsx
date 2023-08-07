import { useState } from "react";
import "./App.css";
import Story from "./components/Story";

const text = "A massive and notoriously mischievous black bear has been captured after more than a year on the run following a string of break-ins in California. The 500lbs (227kg) bear, known to fans as Hank the Tank, is believed to have broken into 21 homes in the Lake Tahoe area since 2022.Hank - who is actually a female bear registered as 64F - will be moved to a sanctuary in Colorado. Her three cubs may be transferred to a facility in California's Sonoma County. In a statement released on Friday, the California Department of Fish and Wildlife (CDFW) said that biologists had safely immobilised the bear, who had been linked to 21 break-ins by DNA evidence."

function App() {
  return (
    <div>
      <Story text={text}/>
    </div>
  );
}

export default App;
