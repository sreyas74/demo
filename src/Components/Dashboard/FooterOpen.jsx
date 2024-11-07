import React from "react";
import styles from "./FooterOpen.module.css";
import { Button } from "@material-ui/core";
function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__Top}>
        <div className={styles.Footer__Top__Cities}>
          <div className={styles.Footer__Top__Cities__Column}>
            <h5>Top 7 Hyundai Car Subscription Cities</h5>
            <button>Car Rental in Bengaluru</button>
            <button>Car Rental in Hydrabad</button>
            <button>Car Rental in Mumbai</button>
            <button>Car Rental in Delhi-NCR</button>
            <button>Car Rental in Chennai</button>
            <button>Car Rental in Pune</button>
            <button>Car Rental in Kolkata</button>
          </div>
          <div className={styles.Footer__Top__Cities__Column}>
            <h5>Top 7 Mahindra Car Subscription Cities</h5>
            <button>Car Rental in Bhubaneshwar</button>
            <button>Car Rental in Chandigarh</button>
            <button>Car Rental in Coimbator</button>
            <button>Car Rental in Jaipur</button>
            <button>Car Rental in Kochi</button>
            <button>Car Rental in Mangalore</button>
            <button>Car Rental in Mysore</button>
          </div>
          <div className={styles.Footer__Top__Cities__Column}>
            <h5>Top 7 Revv Car Subscription Cities</h5>
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
            <img src="https://www.revv.co.in/imgs/revvLogo.png" alt="logo" />
            <p className={styles.Footer__Bottom__Column__Top__Text}>
              Sanitised. Safe
            </p>
          </div>
          <p style={{ width: "500px", marginTop: "20px" }}>
            2021 Primemover Mobility Technologies Pvt Ltd. All rights reserved
          </p>
        </div>
        <div className={styles.Footer__Bottom__Column}>
          <button>Home</button>
          <button>Open subscription</button>
          <button>How it works?</button>
          <button>Subscribe Vs Buy</button>
          <button>FAQs</button>
        </div>
        <div className={styles.Footer__Bottom__Column}>
          <h5>Social</h5>
          <div className={styles.Footer__Bottom__Column__Mid}>
            <button>
              <img
                src="https://raw.githubusercontent.com/sreyas74/trysample-/80516b97c81f9b28ee63ea1b8642fe2aba61b9e2/download%20(1).svg"
                alt="facebook"
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
                src="https://raw.githubusercontent.com/sreyas74/trysample-/ec7015115814a791d52cb2e491a8708122b071eb/icons8-instagram-logo-512.svg"
                alt="Instagram"
              />
            </button>
            <button>
              <img
                src="https://raw.githubusercontent.com/sreyas74/trysample-/44960de433f6e9613cbd6a14321ca67d6c1c76bc/YYuuu.svg"
                alt="Youtube"
              />
            </button>
            <button>
              <img
                src="https://raw.githubusercontent.com/sreyas74/trysample-/ee68485263f463330cad8b110fe341fe1a3322f2/download%20(2).svg"
                alt="linkedin"
              />
            </button>
          </div>
          <h5>Download the Revv App</h5>
          <br />
          <Button
            style={{
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI5MS41MzggMjkxLjUzOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNMTg4LjM3Myw0NC4zMDhjMTAuOTctMTEuNzQ0LDE4LjM5LTI4LjA0OSwxNi4zNTktNDQuMzA4Yy0xNS44MDQsMC41NjQtMzQuOTU4LDkuMjc3LTQ2LjMwMiwyMS4wMiAgIGMtMTAuMTY5LDEwLjM5Ni0xOS4wNzIsMjcuMDExLTE2LjY5Niw0Mi45NTFDMTU5LjM2OSw2NS4xNjQsMTc3LjM4NSw1Ni4wMzMsMTg4LjM3Myw0NC4zMDh6IE0yMjIuMDMsMTU2LjU5MyAgIGMtMC4zMzctMzYuNDUxLDI4Ljg1OS01My45NTgsMzAuMTUyLTU0LjgwNGMtMTYuNDE0LTI0Ljc1My00MS45NzctMjguMTQtNTEuMDgxLTI4LjUyMmMtMjEuNzY3LTIuMjg1LTQyLjQ0MiwxMy4xODItNTMuNDkzLDEzLjE4MiAgIGMtMTEuMDA2LDAtMjguMDMtMTIuODgyLTQ2LjA4My0xMi41MzZjLTIzLjczMywwLjM5MS00NS42MDEsMTQuMjExLTU3Ljc5LDM2LjExNEMxOS4wODEsMTU0LjA5LDM3LjQxNiwyMTkuMzYzLDYxLjQ0LDI1NS4xMDQgICBjMTEuNzQ0LDE3LjQ5NywyNS43MjcsMzcuMTI1LDQ0LjA4OSwzNi40MTVjMTcuNzI1LTAuNzEsMjQuNDA3LTExLjc4OSw0NS43OTItMTEuNzg5YzIxLjM5NCwwLDI3LjM4NCwxMS43ODksNDYuMTAxLDExLjQzNCAgIGMxOS4wNDUtMC4zNTUsMzEuMDk4LTE3LjgzNCw0Mi43NDItMzUuMzg2YzEzLjQ3My0yMC4yOTIsMTkuMDI3LTM5LjkzOCwxOS4zNDUtNDAuOTMgICBDMjU5LjEsMjE0LjYxMSwyMjIuNDIxLDIwMC4xODIsMjIyLjAzLDE1Ni41OTN6IiBmaWxsPSIjY2NkMGQyIiBkYXRhLW9yaWdpbmFsPSIjY2NkMGQyIj48L3BhdGg+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
              alt="applelogo"
              width="20"
              style={{ marginRight: "5px" }}
            />
            Download App Store
          </Button>
          <Button
            style={{
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45OTkgNTExLjk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNMzgyLjM2OSwxNzUuNjIzQzMyMi44OTEsMTQyLjM1NiwyMjcuNDI3LDg4LjkzNyw3OS4zNTUsNi4wMjggICBDNjkuMzcyLTAuNTY1LDU3Ljg4Ni0xLjQyOSw0Ny45NjIsMS45M2wyNTQuMDUsMjU0LjA1TDM4Mi4zNjksMTc1LjYyM3oiIGZpbGw9IiMzMmJiZmYiIGRhdGEtb3JpZ2luYWw9IiMzMmJiZmYiPjwvcGF0aD4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik00Ny45NjIsMS45M2MtMS44NiwwLjYzLTMuNjcsMS4zOS01LjQwMSwyLjMwOEMzMS42MDIsMTAuMTY2LDIzLjU0OSwyMS41NzMsMjMuNTQ5LDM2djQzOS45NiAgIGMwLDE0LjQyNyw4LjA1MiwyNS44MzQsMTkuMDEyLDMxLjc2MWMxLjcyOCwwLjkxNywzLjUzNywxLjY4LDUuMzk1LDIuMzE0TDMwMi4wMTIsMjU1Ljk4TDQ3Ljk2MiwxLjkzeiIgZmlsbD0iIzMyYmJmZiIgZGF0YS1vcmlnaW5hbD0iIzMyYmJmZiI+PC9wYXRoPgoJPHBhdGggc3R5bGU9IiIgZD0iTTMwMi4wMTIsMjU1Ljk4TDQ3Ljk1Niw1MTAuMDM1YzkuOTI3LDMuMzg0LDIxLjQxMywyLjU4NiwzMS4zOTktNC4xMDMgICBjMTQzLjU5OC04MC40MSwyMzcuOTg2LTEzMy4xOTYsMjk4LjE1Mi0xNjYuNzQ2YzEuNjc1LTAuOTQxLDMuMzE2LTEuODYxLDQuOTM4LTIuNzcyTDMwMi4wMTIsMjU1Ljk4eiIgZmlsbD0iIzMyYmJmZiIgZGF0YS1vcmlnaW5hbD0iIzMyYmJmZiI+PC9wYXRoPgo8L2c+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTIzLjU0OSwyNTUuOTh2MjE5Ljk4YzAsMTQuNDI3LDguMDUyLDI1LjgzNCwxOS4wMTIsMzEuNzYxYzEuNzI4LDAuOTE3LDMuNTM3LDEuNjgsNS4zOTUsMi4zMTQgIEwzMDIuMDEyLDI1NS45OEgyMy41NDl6IiBmaWxsPSIjMmM5ZmQ5IiBkYXRhLW9yaWdpbmFsPSIjMmM5ZmQ5Ij48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTc5LjM1NSw2LjAyOEM2Ny41LTEuOCw1My41Mi0xLjU3Nyw0Mi41NjEsNC4yMzlsMjU1LjU5NSwyNTUuNTk2bDg0LjIxMi04NC4yMTIgIEMzMjIuODkxLDE0Mi4zNTYsMjI3LjQyNyw4OC45MzcsNzkuMzU1LDYuMDI4eiIgZmlsbD0iIzI5Y2M1ZSIgZGF0YS1vcmlnaW5hbD0iIzI5Y2M1ZSI+PC9wYXRoPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik0yOTguMTU4LDI1Mi4xMjZMNDIuNTYxLDUwNy43MjFjMTAuOTYsNS44MTUsMjQuOTM5LDYuMTUxLDM2Ljc5NC0xLjc4OSAgYzE0My41OTgtODAuNDEsMjM3Ljk4Ni0xMzMuMTk2LDI5OC4xNTItMTY2Ljc0NmMxLjY3NS0wLjk0MSwzLjMxNi0xLjg2MSw0LjkzOC0yLjc3MkwyOTguMTU4LDI1Mi4xMjZ6IiBmaWxsPSIjZDkzZjIxIiBkYXRhLW9yaWdpbmFsPSIjZDkzZjIxIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTQ4OC40NSwyNTUuOThjMC0xMi4xOS02LjE1MS0yNC40OTItMTguMzQyLTMxLjMxNGMwLDAtMjIuNzk5LTEyLjcyMS05Mi42ODItNTEuODA5bC04My4xMjMsODMuMTIzICBsODMuMjA0LDgzLjIwNWM2OS4xMTYtMzguODA3LDkyLjYtNTEuODkyLDkyLjYtNTEuODkyQzQ4Mi4yOTksMjgwLjQ3Miw0ODguNDUsMjY4LjE3LDQ4OC40NSwyNTUuOTh6IiBmaWxsPSIjZmZkNTAwIiBkYXRhLW9yaWdpbmFsPSIjZmZkNTAwIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTQ3MC4xMDgsMjg3LjI5NGMxMi4xOTEtNi44MjIsMTguMzQyLTE5LjEyNCwxOC4zNDItMzEuMzE0SDI5NC4zMDNsODMuMjA0LDgzLjIwNSAgQzQ0Ni42MjQsMzAwLjM3OSw0NzAuMTA4LDI4Ny4yOTQsNDcwLjEwOCwyODcuMjk0eiIgZmlsbD0iI2ZmYWEwMCIgZGF0YS1vcmlnaW5hbD0iI2ZmYWEwMCI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
              alt="googleplay"
              width="20"
              style={{ marginRight: "5px" }}
            />
            Download Google Play
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
