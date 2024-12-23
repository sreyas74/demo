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
            <p>Pick your favourite car, time and place</p>
          </div>
        </div>

        <div>
          <button>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1OS42NDUgNDU5LjY0NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNNDU5LjY0NSwyMDUuMjAzaC0zNC41MjFsLTI2LjU4LTE3Mi4xMTlINjEuMDk5TDM0LjUyMSwyMDUuMjAzSDB2MTYxLjExM2gyOS42MTV2NjAuMjQ0aDgwLjU1N3YtNjAuMjQ0aDIzOS4zMDF2NjAuMjQ0ICAgaDgwLjU1N3YtNjAuMjQ0aDI5LjYxNVYyMDUuMjAzeiBNOTYuMzEsNzFoMjY3LjAyMmwxNS42MDQsMTAxLjA0MUg4MC43MDlMOTYuMzEsNzF6IE04Mi4zMzIsMzE4LjQ1NyAgIGMtMTguOTczLDAtMzQuMzU0LTE1LjM4Mi0zNC4zNTQtMzQuMzU0YzAtMTguOTc1LDE1LjM4MS0zNC4zNTQsMzQuMzU0LTM0LjM1NGMxOC45NzUsMCwzNC4zNTUsMTUuMzgyLDM0LjM1NSwzNC4zNTQgICBDMTE2LjY4NywzMDMuMDc1LDEwMS4zMDYsMzE4LjQ1Nyw4Mi4zMzIsMzE4LjQ1N3ogTTM3Ny4zMTIsMjQ5Ljc0OGMxOC45NzMsMCwzNC4zNTQsMTUuMzgxLDM0LjM1NCwzNC4zNTQgICBjMCwxOC45NzQtMTUuMzgxLDM0LjM1NC0zNC4zNTQsMzQuMzU0Yy0xOC45NzcsMC0zNC4zNTUtMTUuMzgyLTM0LjM1NS0zNC4zNTRTMzU4LjMzOCwyNDkuNzQ4LDM3Ny4zMTIsMjQ5Ljc0OHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
              alt="car"
            />
          </button>

          <div>
            <h4>Receive</h4>
            <p>We will deliver the car to your doorstep</p>
          </div>
        </div>

        <div>
          <button>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjU2IiBjeT0iMjcxIiByPSIxNSIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9jaXJjbGU+PHBhdGggZD0ibTI1NiAwYy0xNDAuOTU4IDAtMjU2IDExNS4wNDktMjU2IDI1NiAwIDE0MC45NjEgMTE1LjA0OSAyNTYgMjU2IDI1NiAxNDAuOTYgMCAyNTYtMTE1LjA0OSAyNTYtMjU2IDAtMTQwLjk1OC0xMTUuMDQ5LTI1Ni0yNTYtMjU2em0wIDYxYzk3LjMyMyAwIDE3OC4yMTkgNzEuNjY4IDE5Mi42OTIgMTY1aC01Mi4wMTljLTMyLjk4MiAwLTY0LjMxOC0xMy4yMzUtODUuOTczLTM2LjMxMS0yOS42LTMxLjU0Ni03OS43OTctMzEuNTU2LTEwOS40LS4wMDEtMjEuNjU1IDIzLjA3Ny01Mi45OTEgMzYuMzEyLTg1Ljk3NCAzNi4zMTJoLTUyLjAxOGMxNC40NzMtOTMuMzMyIDk1LjM2OS0xNjUgMTkyLjY5Mi0xNjV6bTAgMjU1Yy0yNC44MTIgMC00NS0yMC4xODYtNDUtNDVzMjAuMTg4LTQ1IDQ1LTQ1YzI0LjgxNCAwIDQ1IDIwLjE4NiA0NSA0NXMtMjAuMTg2IDQ1LTQ1IDQ1em0tMTgxLjU4IDExLjA5N2MxNy4xNy02LjczNiAyOS41NjgtMTEuMDk3IDQ2LjU4LTExLjA5NyA1NC42ODggMCA5Ny4yMTkgNDguNzM0IDg4Ljk4MSAxMDMuNDloLS4wMzVjLTEuMjI0IDguMzgxLTMuNjMyIDE2LjUwMi03LjEwNSAyNC4xNDUtNTguNzU5LTE2LjY3LTEwNi4zMS02MC4yNjItMTI4LjQyMS0xMTYuNTM4em0yMzQuNzUxIDExNi41MzRjLTMuNTY4LTcuODQ1LTUuOTI0LTE1Ljk2NS03LjExNy0yNC4xNDFoLS4wMzVjLTkuNTk5LTYzLjgwNSA0OS4zMDEtMTE2LjQ1MiAxMTAuMzU0LTEwMC45MzYgNi40MzYgMS42MzYgMTQuNDkgNC4zNCAyNS4yMDYgOC41NDQtMjIuMTA5IDU2LjI3MS02OS42NTUgOTkuODYxLTEyOC40MDggMTE2LjUzM3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
              alt="stearing"
            />
          </button>

          <div>
            <h4>Drive</h4>
            <p>Enjoy your Rydeeasy self drive</p>
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
              Get the car back to your preferred return location, and we will
              take it from there
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
