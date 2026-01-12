// import React from "react";

// const Apps = () => {
//   return <h1>Apps</h1>;
// };

// export default Apps;

import React from "react";

const apps = [
  {
    name: "Kite",
    desc: "Trade and invest in stocks, derivatives, and mutual funds",
    icon: "📈",
  },
  {
    name: "Console",
    desc: "Reports, P&L, statements, and tax reports",
    icon: "📊",
  },
  {
    name: "Coin",
    desc: "Invest in direct mutual funds commission-free",
    icon: "🪙",
  },
  {
    name: "Varsity",
    desc: "Free stock market education",
    icon: "🎓",
  },
];

const Apps = () => {
  return (
    <div
      style={{
        padding: "32px",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "22px",
          fontWeight: 600,
          marginBottom: "6px",
        }}
      >
        Apps
      </h2>

      <p
        style={{
          color: "#6b7280",
          fontSize: "14px",
          marginBottom: "28px",
        }}
      >
        All Zerodha platforms, accessible from one place
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {apps.map((app) => (
          <div
            key={app.name}
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "22px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 10px 24px rgba(0,0,0,0.08)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                fontSize: "28px",
                marginBottom: "12px",
              }}
            >
              {app.icon}
            </div>

            <h3
              style={{
                fontSize: "16px",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              {app.name}
            </h3>

            <p
              style={{
                fontSize: "14px",
                color: "#4b5563",
                marginBottom: "12px",
              }}
            >
              {app.desc}
            </p>

            <span
              style={{
                color: "#387ed1",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Open →
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
