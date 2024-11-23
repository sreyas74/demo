import React from "react";
import styles from "./Footer.module.css";
import logo from "../Dashboard/images/logo2.svg";
import fb from "../Dashboard/images/fb.svg";
import instagram from "../Dashboard/images/instagram.svg"
import x from  "../Dashboard/images/x.svg"
import youtube from "../Dashboard/images/youtube.svg"
import linkedin from "../Dashboard/images/linkedin.svg"

// Remove useHistory import since it's not being used
// import { useHistory } from 'react-router-dom';

function FooterOpen() {
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
            <button style={{ position: 'relative', right: '470px'}}>Bike Rental in Kochi</button>
            <button style={{ position: 'relative', right: '470px'}}>Bike Rental in Aluva</button>
            <button style={{ position: 'relative', right: '470px'}}>Bike Rental in Ernakulam</button>
            <button style={{ position: 'relative', right: '470px'}}>Bike Rental in Angamaly</button>
            <button style={{ position: 'relative', right: '470px'}}>Bike Rental in Kakkanad</button>
            <button style={{ position: 'relative', right: '470px'}}>Bike Rental in Tirur</button>
            <button style={{ position: 'relative', right: '470px'}}>Bike Rental in Edappal</button>
            <button style={{ position: 'relative', right: '470px'}}>Bike Rental in Malappuram</button>
          </div>
        
        
        </div>
      </div>
      <div className={styles.Footer__Bottom}>
        <div className={styles.Footer__Bottom__Column__One}>
          <div className={styles.Footer__Bottom__Column__Top}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.Footer__Bottom__Column__Mid}>
            <button onClick={handleFacebookClick}>
              <img
                src={fb}
                alt="facebook"
              />
            </button>
            <button onClick={handleInstagramClick}>
              <img
                src={instagram}
                alt="instagram"
              />
            </button>
            <button onClick={handleXClick}>
              <img
                src={x}
                alt="x"
              />
            </button>
            <button onClick={handleYoutubeClick}>
              <img
                src={youtube}
                alt="youtube"
              />
            </button>
            <button onClick={handlelinkedinClick}>
              <img
                src={linkedin}
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
          <h4 className={styles.GreenFont}> Support@rydeeasy.com</h4>
        </div>
      </div>
    </div>
  );
}

export default FooterOpen;
