import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducers/dataReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "primary",
  storage,
};

const persistReduce = persistReducer(persistConfig, dataReducer);

export default () => {
  let store = createStore(
    persistReduce,
    composeWithDevTools(applyMiddleware(thunk))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
