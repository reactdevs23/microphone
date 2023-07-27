import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { BiMicrophoneOff, BiMicrophone } from "react-icons/bi";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const backendUrls = [
    { label: "Space Holding", value: "wss://dev1.thyself.ai/conversation" },
    { label: "Belief Work", value: "wss://dev2.thyself.ai/conversation" },
    {
      label: "Space Holding - Mobile Safari",
      value: "wss://dev3.thyself.ai/conversation",
    },
    { label: "[Developer Mode]", value: "ws://localhost:3000/conversation" },
  ];
  const [backendUrl, setBackendUrl] = useState(backendUrls[0]);
  const [connected, setConnected] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false);
  const handleConnected = () => {
    setConnected((prev) => !prev);
  };

  return (
    <div>
      <Header />

      <main>
        <div className="processWrapper">
          <p className="processTitle">Process</p>
          <div className="processContainer">
            <p className="currentProcess process">{backendUrl.label}</p>
            {showDropDown ? (
              <BsChevronDown
                className="arrow"
                onClick={() => setShowDropDown((prev) => !prev)}
              />
            ) : (
              <BsChevronUp
                className="arrow"
                onClick={() => setShowDropDown((prev) => !prev)}
              />
            )}
            {showDropDown && (
              <div className="dropdownContainer">
                {backendUrls.map((el, i) => (
                  <p
                    key={i}
                    className="process"
                    onClick={() => {
                      setBackendUrl(el);
                      setShowDropDown((prev) => !prev);
                    }}
                  >
                    {backendUrls[i].label}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="buttonContainer">
          <button className="button">
            {connected ? (
              <BiMicrophone size={80} onClick={handleConnected} />
            ) : (
              <BiMicrophoneOff size={80} onClick={handleConnected} />
            )}
          </button>
        </div>
        <p className="info">
          Select a Processing type and click the microphone to start.
        </p>
        <p className="info">
          If at any point it pauses and you’d like it to continue, just say:
          “continue”
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
