import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { dashboardreducer } from "./Dashboard/reducer";
import { AuthReducer } from "./Auth/AuthReducer";
import { carreducer } from "./RentalSec/carreducer";
import { Bookreducer } from "./Booking/bookingReducer";
import { carPriceReducer } from "./carPrice/carPriceReducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  dashboard: dashboardreducer,
  mycars: carreducer,
  mybookcars: Bookreducer,
  price: carPriceReducer,
});

const customThunks = (store) => (next) => (action) => {
  return typeof action === "function" ? action(store.dispatch) : next(action);
};

// Setting up Redux DevTools
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f;

const composedEnhancer = compose(
  applyMiddleware(customThunks),
  devTools
);

const store = createStore(rootReducer, composedEnhancer);

export { store };
