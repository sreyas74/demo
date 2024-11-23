import React from "react";
import style from "./SearchboxOpen.module.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch } from "react-redux";  // Removed useSelector as it's not being used
import { useHistory } from "react-router-dom"; 
import { setUserRequest } from "../../Redux/Dashboard/action";

const cities = [
  { value: "Kochi", label: "Kochi" },
  { value: "Tirur", label: "Tirur" },

];

function Searchboxopen() {
  const [city, setCity] = React.useState("Kochi");
  const [start_date, setStartDate] = React.useState("");
  const [duration, setDuration] = React.useState(0);
  const [end_date, setEndDate] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const currentDate = new Date();

  React.useEffect(() => {
    if (start_date && end_date) {
      const start = new Date(start_date);
      const end = new Date(end_date);
      setDuration((end - start) / (1000 * 3600 * 24));
    }
  }, [start_date, end_date]);

  // Memoize handleSubmit using useCallback to prevent unnecessary re-renders
  const handleSubmit = React.useCallback(() => {
    const payload = { city, start_date, end_date };
    if (duration >= 0) dispatch(setUserRequest(payload));
  }, [city, start_date, end_date, duration, dispatch]);

  React.useEffect(() => {
    handleSubmit();
  }, [city, start_date, end_date, handleSubmit]); // Added handleSubmit to the dependencies array

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={style.SearchBox}>
      <div className={style.SearchBox__TopRow}>
        <button
          style={buttonStyle}
          onClick={() => history.push("/")}
        >
          Cars
        </button>
        <button style={bikeButtonStyle}>Bikes</button>
      </div>

      <div className={style.SearchBox__MidRow}>
        <img src="https://www.revv.co.in/imgs/logo-rentals.svg" alt="Banner" />
        <h5>Self ryde Bike rental in {city}</h5>
      </div>

      <div className={style.SearchBox__Dropdowns}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Select your city</DialogTitle>
          <DialogActions className={style.SearchBox__Dropdowns__List}>
            {cities.map((option) => (
              <Button
                key={option.value}
                onClick={() => {
                  setCity(option.value);
                  handleClose();
                }}
              >
                {option.label}
              </Button>
            ))}
          </DialogActions>
        </Dialog>

        <h5 style={{ color: "grey" }}>City</h5>
        <Button
          onClick={handleClickOpen}
          style={cityButtonStyle}
          disableAnimation={true}
        >
          {city}
        </Button>
      </div>

      <div className={style.SearchBox__Dropdowns__Date}>
        <div>
          <label>
            <h5 style={{ color: "grey" }}>Start Date</h5>
          </label>
          <input
            type="datetime-local"
            className={style.DateTime}
            onChange={(e) => setStartDate(e.target.value)}
            min={getMinDate(currentDate)}
          />
        </div>
        <div>
          <label>
            <h5 style={{ color: "grey" }}>End Date</h5>
          </label>
          <input
            type="datetime-local"
            className={style.DateTime}
            onChange={(e) => setEndDate(e.target.value)}
            min={start_date}
          />
        </div>
      </div>

      <div className={style.SearchBox__Submit}>
        {duration >= 0 && start_date && end_date && (
          <p>
            Duration:{" "}
            {duration === 1
              ? `${duration} Day`
              : duration === 0
              ? "Today"
              : `${duration} Days`}
          </p>
        )}
        <button onClick={() => history.push(`/subscription/${city}`)}>
          Search
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  width: 180,
  margin: "1%",
  fontSize: "18px",
  fontWeight: "bold",
  height: "50px",
  borderRadius: "15px",
  border: "none",
  backgroundColor: "transparent",
  boxShadow: "0 0 2px",
};

const bikeButtonStyle = {
  ...buttonStyle,
  backgroundImage: "linear-gradient(270deg, #FFA500 0%, #FF7300 100% )",
  color: "white",
};

const cityButtonStyle = {
  width: "100%",
  borderBottom: "2px solid black",
  justifyContent: "flex-start",
  borderRadius: 0,
};

const getMinDate = (date) => {
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}T00:00:00`;
};

export default Searchboxopen;
