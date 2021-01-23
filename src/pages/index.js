import React from "react";
import ListTable from "../components/Table";
import { Header, Section } from "../styles/styled";

import logo from "../assets/img/logo.png";
import "../styles/index.css";

/**
 * Componente funcional responsable de la vista principal o el home de la aplicación.
 * @author Abel Gascia <https://github.com/abelgascia>
 */
const index = () => {
  return (
    <div>
      <Header>
        <img src={logo} className="logo" alt="KeepSmiling Logo" />
      </Header>
      <main>
        <Section>
          <ListTable />
        </Section>
      </main>
    </div>
  );
};

export default index;
