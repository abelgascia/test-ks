import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import returnStoreAndPersistor from "./redux/store";

import Index from "./pages/index";
import Edit from "./pages/edit";

/**
 * Componente principal que contiene toda la aplicación.
 * @author Abel Gascia <https://github.com/abelgascia>
 */
const App = () => {
  const { store, persistor } = returnStoreAndPersistor();

  return (
    /** Componente contenedor para el acceso de los componentes hijos a la store de Redux y la persistencia de la misma. */
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/edit/:name" component={Edit} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
