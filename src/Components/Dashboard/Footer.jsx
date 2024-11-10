import React from "react";
import styles from "./Footer.module.css";

// Remove useHistory import since it's not being used
// import { useHistory } from 'react-router-dom';

function Footer() {
  // No need to define history as it's not used
  // let history = useHistory();

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/rydeeasy/", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/ryde_easy/", "_blank");
  };

  const handleXClick = () => {
    window.open("https://x.com/RydeEasy/", "_blank");
  };

  const handleYoutubeClick = () => {
    window.open("https://www.youtube.com/channel/UCj0R6qHnCVQnTcNe1LT3NKw", "_blank");
  };

  const handlelinkedinClick = () => {
    window.open("https://www.linkedin.com/company/rydeeasy-selfdrive/?originalSubdomain=in", "_blank");
  }

  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__Top}>
        <h4>Serviceable Cities</h4>
        <div className={styles.Footer__Top__Cities}>
          <div className={styles.Footer__Top__Cities__Column}>
            <button>Car Rental in Bengaluru</button>
            <button>Car Rental in Hydrabad</button>
            <button>Car Rental in Mumbai</button>
            <button>Car Rental in Delhi-NCR</button>
            <button>Car Rental in Chennai</button>
            <button>Car Rental in Pune</button>
            <button>Car Rental in Kolkata</button>
            <button>Car Rental in Ahemdabad</button>
          </div>
          <div className={styles.Footer__Top__Cities__Column}>
            <button>Car Rental in Bhubaneshwar</button>
            <button>Car Rental in Chandigarh</button>
            <button>Car Rental in Coimbator</button>
            <button>Car Rental in Jaipur</button>
            <button>Car Rental in Kochi</button>
            <button>Car Rental in Mangalore</button>
            <button>Car Rental in Mysore</button>
            <button>Car Rental in Nagpur</button>
          </div>
          <div className={styles.Footer__Top__Cities__Column}>
            <button>Car Rental in Surat</button>
            <button>Car Rental in Tirupati</button>
            <button>Car Rental in Trivendram</button>
            <button>Car Rental in Vadodara</button>
            <button>Car Rental in Vijaywada</button>
            <button>Car Rental in Vadodara</button>
            <button>Car Rental in Vizag</button>
          </div>
        </div>
      </div>
      <div className={styles.Footer__Bottom}>
        <div className={styles.Footer__Bottom__Column__One}>
          <div className={styles.Footer__Bottom__Column__Top}>
            <img src="https://raw.githubusercontent.com/sreyas74/trysample-/68ba0ecbb2e84573d79bca868624b3a6f41c9662/og%20logo%20(14).svg" alt="logo" />
          </div>
          <div className={styles.Footer__Bottom__Column__Mid}>
            <button onClick={handleFacebookClick}>
              <img
                src="https://raw.githubusercontent.com/sreyas74/trysample-/e88de68fb4786086033c8dff46b96efd546a4b41/fb%2029.svg"
                alt="facebook"
              />
            </button>
            <button onClick={handleInstagramClick}>
              <img
                src="https://raw.githubusercontent.com/sreyas74/trysample-/b319b14a208a3c0857c92823da4eb2a5ec1ec812/instu%20(1).svg"
                alt="instagram"
              />
            </button>
            <button onClick={handleXClick}>
              <img
                src="https://raw.githubusercontent.com/sreyas74/trysample-/86176a16775447d9c0593e4c7ed31fdab4269928/twituu%20(1).svg"
                alt="x"
              />
            </button>
            <button onClick={handleYoutubeClick}>
              <img
                src="https://raw.githubusercontent.com/sreyas74/trysample-/100512e81f82d1d8223b7c01379255fd2abb9f26/yyyu1%20(1).svg"
                alt="youtube"
              />
            </button>
            <button onClick={handlelinkedinClick}>
              <img
                src="https://raw.githubusercontent.com/sreyas74/trysample-/273c70061fd0ff18ecaa88d46615e71d33ff6c04/link%20(1).svg"
                alt="linkedin"
              />
            </button>
          </div>
          <div className={styles.Footer__Bottom__Column__Bottom}></div>
        </div>
        <div className={styles.Footer__Bottom__Column}>
          <button>Home</button>
          <button>Tarrifs</button>
          <button>FAQ</button>
          <button>Policy</button>
          <button>Blog</button>
        </div>
        <div className={styles.Footer__Bottom__Column}>
          <h4>Have Questions?</h4>
          <h5>24/7 Customer Support</h5>
          <br />
          <h4 className={styles.GreenFont}>Contact Us</h4>
          <h4 className={styles.GreenFont}>+91-9485555533</h4>
          <h4 className={styles.GreenFont}> care@revv.co.in</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
