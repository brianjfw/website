import React from "react";
import "./PartnerTicker.css";

const partnerLogos = [
  {
    name: "Buy-Low Foods",
    url: "https://zorbasfoods.com/wp-content/uploads/2023/06/Buy-Low-Foods-150x150.png",
  },
  {
    name: "Choices Markets",
    url: "https://zorbasfoods.com/wp-content/uploads/2023/06/Choices-Markets-150x150.png",
  },
  {
    name: "IGA",
    url: "https://zorbasfoods.com/wp-content/uploads/2023/06/IGA-150x150.png",
  },
  {
    name: "Loblaws",
    url: "https://zorbasfoods.com/wp-content/uploads/2023/06/Loblaws-150x150.png",
  },
  {
    name: "Safeway",
    url: "https://zorbasfoods.com/wp-content/uploads/2023/06/Safeway-150x150.png",
  },
  {
    name: "Save On Foods",
    url: "https://zorbasfoods.com/wp-content/uploads/2023/06/Save-On-Foods-150x150.png",
  },
  {
    name: "Whole Foods Market",
    url: "https://zorbasfoods.com/wp-content/uploads/2023/06/Whole-Foods-Market-150x150.png",
  },
];

function PartnerTicker() {
  return (
    <section className="partner-ticker-fw">
      <h2 className="partner-ticker-title">As Seen In</h2>
      <div className="partner-ticker">
        <div className="partner-ticker-track">
          {partnerLogos.concat(partnerLogos).map((logo, idx) => (
            <div className="partner-ticker-logo" key={logo.name + idx}>
              <img src={logo.url} alt={logo.name} title={logo.name} />
            </div>
          ))}
        </div>
      </div>
      <a className="partner-ticker-btn" href="https://zorbasfoods.com/where-to-buy-zorbas/" target="_blank" rel="noopener noreferrer">
        View Locations
      </a>
    </section>
  );
}

export default PartnerTicker; 