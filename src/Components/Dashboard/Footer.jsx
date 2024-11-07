import React from "react";
import styles from "./Footer.module.css";
function Footer() {
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
          <button>
              <img
                src="https://raw.githubusercontent.com/sreyas74/trysample-/80516b97c81f9b28ee63ea1b8642fe2aba61b9e2/download%20(1).svg"
                alt="facebook"
              />
            </button>
            <button>
              <img
                src="https://raw.githubusercontent.com/sreyas74/trysample-/ec7015115814a791d52cb2e491a8708122b071eb/icons8-instagram-logo-512.svg"
                alt="instagram"
              />
            </button>
            <button>
              <img
                src="https://raw.githubusercontent.com/sreyas74/trysample-/a0175e5d0e76645da2ffd79d79c16a1a66831bda/X%20Twitter%20logo%20PNG%2C%20vector%20files%20free%20download%20-%20Brandlogos_net%20makelogos.svg"
                alt="twitter"
              />
            </button>
            <button>
              <img
                src="https://raw.githubusercontent.com/sreyas74/trysample-/44960de433f6e9613cbd6a14321ca67d6c1c76bc/YYuuu.svg"
                alt="youtube"
              />
            </button>
            <button>
              <img
                src="https://raw.githubusercontent.com/sreyas74/trysample-/ee68485263f463330cad8b110fe341fe1a3322f2/download%20(2).svg"
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
