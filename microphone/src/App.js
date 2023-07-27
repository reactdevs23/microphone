import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { BiMicrophoneOff, BiMicrophone } from "react-icons/bi";
import "./App.css";
import Header from "./component/Header/Header";

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
  const TIPS_URL =
    "https://thyself.notion.site/Tips-for-talking-to-Thyself-3fd927c59df442718e0ad2c594a9f5f0?pvs=4";
  const handleCalendlyClick = (e) => {
    e.preventDefault();
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/d/yvc-2bj-g4n/discovery-session-with-jonathan-lawrence",
    });
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
      <div id="footer-links">
        <div className="footer-link-wrapper">
          <a href={TIPS_URL} target="_blank">
            ❓ Help &amp; Tips
          </a>
        </div>
        <div className="footer-link-wrapper">
          <a
            data-tally-open="w4BWdb"
            data-tally-layout="modal"
            data-tally-width="900"
            data-tally-emoji-text="💌"
            data-tally-emoji-animation="wave"
            data-tally-auto-close="2000"
          >
            💌 Share Feedback
          </a>
        </div>
        <div className="footer-link-wrapper">
          <a href="#" onClick={handleCalendlyClick}>
            🗓️ Schedule a Call
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
