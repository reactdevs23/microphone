import React from "react";

const Footer = () => {
  const TIPS_URL =
    "https://thyself.notion.site/Tips-for-talking-to-Thyself-3fd927c59df442718e0ad2c594a9f5f0?pvs=4";
  const handleCalendlyClick = (e) => {
    e.preventDefault();
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/d/yvc-2bj-g4n/discovery-session-with-jonathan-lawrence",
    });
  };
  return (
    <div id="footer-links">
      <div className="footer-link-wrapper">
        <a href={TIPS_URL} target="_blank">
          <img src="/tips.png" alt="#" /> Help &amp; Tips
        </a>
      </div>
      <div className="footer-link-wrapper">
        <a
          data-tally-open="w4BWdb"
          data-tally-layout="modal"
          data-tally-width="900"
          data-tally-emoji-text=""
          data-tally-emoji-animation="wave"
          data-tally-auto-close="2000"
        >
          <img src="/heart.png" alt="#" /> Share Feedback
        </a>
      </div>
      <div className="footer-link-wrapper">
        <a href="#" onClick={handleCalendlyClick}>
          <img src="/calender.png" alt="#" /> Schedule Call
        </a>
      </div>
    </div>
  );
};

export default Footer;
