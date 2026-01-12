import React, { useState } from "react";

const CreateTicket = () => {
  const [open, setOpen] = useState(null);

  const data = [
    {
      title: "Account Opening",
      icon: "fa-user-plus",
      items: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "fa-user",
      items: [
        "Login credentials",
        "Your Profile",
        "Account modification and segment addition",
        "CMR & DP ID",
        "Nomination",
        "Transfer and conversion of shares",
      ],
    },
    {
      title: "Kite",
      icon: "fa-chart-line",
      items: [
        "IPO",
        "Trading FAQs",
        "Charts and orders",
        "Margins",
        "Alerts and Nudges",
        "GTT",
      ],
    },
    {
      title: "Funds",
      icon: "fa-indian-rupee-sign",
      items: [
        "Add money",
        "Withdraw money",
        "Add bank accounts",
        "eMandates",
      ],
    },
    {
      title: "Console",
      icon: "fa-file-lines",
      items: ["Reports", "Ledger", "Portfolio", "Tax P&L", "Downloads"],
    },
    {
      title: "Coin",
      icon: "fa-coins",
      items: [
        "Understanding mutual funds",
        "Coin app",
        "Coin web",
        "Transactions and reports",
        "NPS",
      ],
    },
  ];

  const handleClick = (title) => {
    setOpen(open === title ? null : title);
  };

  return (
    <div className="support-layout">
      {/* LEFT */}
      <div className="support-left">
        {data.map((section) => (
          <div key={section.title} className="accordion">
            <div
              className="accordion-header"
              onClick={() => handleClick(section.title)}
            >
              <i
                className={`fa-solid ${section.icon} section-icon`}
              ></i>
              <span>{section.title}</span>
              <span className="arrow">
                {open === section.title ? "⌃" : "⌄"}
              </span>
            </div>

            {open === section.title && (
              <ul className="accordion-body">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="support-right">
        <div className="notice">
          <ul>
            <li>Offer for sale (OFS) – January 2026</li>
            <li>Rights Entitlements listing in January 2026</li>
          </ul>
        </div>

        <div className="quick-links">
          <h4 >Quick links</h4>
          <ul>
            <li>Track account opening</li>
            <li>Track segment activation</li>
            <li>Intraday margins</li>
            <li>Kite user manual</li>
            <li>Learn how to create a ticket</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
