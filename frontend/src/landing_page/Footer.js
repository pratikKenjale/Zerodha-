import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row row-cols-1 row-cols-md-5 mt-5 gx-5">
          <div className="col">
            <img src="media/logo.svg" style={{ width: "50%" }} />
            <p>
              &copy; 2010 - 2024,  Zerodha Broking Ltd. All rights reserved.
            </p>

            <div className="mt-3">
              <a href="#" className="me-3 text-muted">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="me-3 text-muted">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="me-3 text-muted">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="me-3 text-muted">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>

          </div>

          {/* Company */}
          <div className="col">
            <p className="fw-bold">Company</p>
            <a className="footer-link" href="#">About</a><br />
            <a className="footer-link" href="#">Products</a><br />
            <a className="footer-link" href="#">Pricing</a><br />
            <a className="footer-link" href="#">Referral programme</a><br />
            <a className="footer-link" href="#">Careers</a><br />
            <a className="footer-link" href="#">Zerodha.tech</a><br />
            <a className="footer-link" href="#">Press & media</a><br />
            <a className="footer-link" href="#">Zerodha cares (CSR)</a><br />
          </div>

        {/* Support */}
          <div className="col">
            <p className="fw-bold">Support</p>
            <a className="footer-link" href="#">Contact</a><br />
            <a className="footer-link" href="#">Support portal</a><br />
            <a className="footer-link" href="#">Z-Connect blog</a><br />
            <a className="footer-link" href="#">List of charges</a><br />
            <a className="footer-link" href="#">Downloads & resources</a><br />
          </div>

          {/* Account */}
          <div className="col">
            <p className="fw-bold">Account</p>
            <a className="footer-link" href="#">Open an account</a><br />
            <a className="footer-link" href="#">Fund transfer</a><br />
            <a className="footer-link" href="#">60 day challenge</a><br />
          </div>

        {/* ✅ Quick Links */}
          <div className="col">
            <p className="fw-bold">Quick links</p>
            <a className="footer-link" href="#">Upcoming IPOs</a><br />
            <a className="footer-link" href="#">Brokerage charges</a><br />
            <a className="footer-link" href="#">Market holidays</a><br />
            <a className="footer-link" href="#">Economic calendar</a><br />
            <a className="footer-link" href="#">Calculators</a><br />
            <a className="footer-link" href="#">Markets</a><br />
            <a className="footer-link" href="#">Sectors</a><br />
          </div>

        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;