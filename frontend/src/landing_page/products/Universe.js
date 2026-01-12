import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-5">
          <img src="media/zerodhaFundhouse.png" className="universe-logo mb-3" />
          <p className="text-muted ">
            Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
          </p>
        </div>

        <div className="  col-md-4 mb-5">
          <img src="media/sensibullLogo.svg" className="universe-logo mb-3" />
          <p className="text-muted ">
            Options trading platform that lets you create strategies, analyze positions, and examinedata points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className=" col-md-4 mb-5">
          <img src="media/tijoriLogo.png" className="universe-logo mb-3" />
          <p className="text-muted ">
            Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img src="media/streakLogo.png" className="universe-logo mb-3" />
          <p className="text-muted ">
            Systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img src="media/smallcaseLogo.png" className="universe-logo mb-3" />
          <p className="text-muted ">
            Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img src="media/dittoLogo.png" className="universe-logo mb-3" />
          <p className="text-muted">
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary px-4 py-2 fs-5">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
