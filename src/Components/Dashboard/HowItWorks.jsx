import React from "react";
import styles from "./Process.module.css";
function Process() {
  return (
    <div id="howitworks" className={styles.Process}>
      <h3>How it works</h3>
      <div className={styles.Process__Circle__Container}>
        <div>
          <button>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTUxMiAxNjN2LTI3YzAtMzAuOTI4LTI1LjA3Mi01Ni01Ni01NmgtNDAwYy0zMC45MjggMC01NiAyNS4wNzItNTYgNTZ2MjdjMCAyLjc2MSAyLjIzOSA1IDUgNWg1MDJjMi43NjEgMCA1LTIuMjM5IDUtNXoiIGZpbGw9IiNmZmZlZmUiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMCAyMDV2MTcxYzAgMzAuOTI4IDI1LjA3MiA1NiA1NiA1Nmg0MDBjMzAuOTI4IDAgNTYtMjUuMDcyIDU2LTU2di0xNzFjMC0yLjc2MS0yLjIzOS01LTUtNWgtNTAyYy0yLjc2MSAwLTUgMi4yMzktNSA1em0xMjggMTMxYzAgOC44MzYtNy4xNjQgMTYtMTYgMTZoLTE2Yy04LjgzNiAwLTE2LTcuMTY0LTE2LTE2di0xNmMwLTguODM2IDcuMTY0LTE2IDE2LTE2aDE2YzguODM2IDAgMTYgNy4xNjQgMTYgMTZ6IiBmaWxsPSIjZmZmZWZlIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
              alt="credit-card"
            />
          </button>

          <div>
            <h4>Book & Pay</h4>
            <p>Pick your favourite bike, time and place</p>
          </div>
        </div>

        <div>
          <button>
            <img
              src="https://raw.githubusercontent.com/sreyas74/trysample-/402aea38dbfc0d74010b9f62a651cd417ba982b2/colorkit%20(1).svg"
              alt="bike"
            />
          </button>

          <div>
            <h4>Receive</h4>
            <p>We will deliver the bike to your doorstep</p>
          </div>
        </div>

        <div>
          <button>
            <img
              src="https://raw.githubusercontent.com/sreyas74/trysample-/e24a9696a9e061805dd23f15f761254f43c01028/Method%20Draw%20Image%20(2)%20(1).svg"
              alt="rider"
            />
          </button>

          <div>
            <h4>Ryde</h4>
            <p>Enjoy your ryde with Rydeeasy </p>
          </div>
        </div>

        <div>
          <button>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDMxNy44NzggMzE3Ljg3OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTMxNS42MDcsNzAuMjM3Yy0yLjY1My0zLjA4Ni03LjE4OS0zLjg4MS0xMS43MjktMS45MjhsLTM4LjA0MiwxNi4zNjlDMjQwLjY3NCw0My4zMTQsMTk1LjE2MywxNS42MywxNDMuMzA5LDE1LjYzICBDNjQuMjg4LDE1LjYzLDAsNzkuOTE4LDAsMTU4LjkzOXM2NC4yODgsMTQzLjMwOSwxNDMuMzA5LDE0My4zMDljMTEuMDQ2LDAsMjAtOC45NTQsMjAtMjBzLTguOTU0LTIwLTIwLTIwICBDODYuMzQ0LDI2Mi4yNDcsNDAsMjE1LjkwMyw0MCwxNTguOTM5Uzg2LjM0NCw1NS42MywxNDMuMzA5LDU1LjYzYzM1LjM3OSwwLDY2LjY1NywxNy44OCw4NS4yODQsNDUuMDc0bC0zNi4yNzEsMTUuNjA3ICBjLTMuODg1LDEuNjcyLTYuMzE0LDQuNjI5LTYuNjY2LDguMTEzYy0wLjM1MSwzLjQ4MywxLjQ0LDYuODY2LDQuOTEzLDkuMjc5bDkzLjUwMyw2NC45NzljMi4xMjksMS40NzksNC40NDgsMi4yNjIsNi43MDYsMi4yNjIgIGMwLjAwMSwwLDAuMDAxLDAsMC4wMDEsMGM1LjAyOCwwLDguOTgtMy43Nyw5LjgzMi05LjM3OWwxNy4xMDMtMTEyLjU3MkMzMTguMjM5LDc1LjUzOCwzMTcuNDkxLDcyLjQyOSwzMTUuNjA3LDcwLjIzN3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
              alt="refresh"
            />
          </button>

          <div>
            <h4>Return</h4>
            <p>
              Get the bike back to your preferred return location, and we will
              take it from there
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
