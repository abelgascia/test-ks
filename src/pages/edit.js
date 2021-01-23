import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Header, Section } from "../styles/styled";
import { Container, Breadcrumb, BreadcrumbItem } from "reactstrap";

import EditForm from "../components/EditForm";

import logo from "../assets/img/logo.png";
import "../styles/index.css";

/**
 * Componente funcional responsable de la vista y funcionalidad del formulario para editar ítems de la tabla.
 * @props Propiedades de los componentes padre para acceder a la store de redux.
 * @author Abel Gascia <https://github.com/abelgascia>
 */
const Edit = (props) => {
  const [item, setItem] = useState();

  useEffect(() => {
    let name = window.location.pathname.split("/")[2].replace("%20", " ");

    let itemToEdit = props.items.find((item) => {
      return item.name === name;
    });

    setItem(itemToEdit);
  }, []);

  /**
   * Funcion responsable del llamado al reducer para actualizar un item.
   * @param {object} item - Objeto con los datos nuevos del item a ser actualizado.
   */
  function handleUpdate(item) {
    props.updateItem(
      item.id,
      item.name,
      item.ontologist,
      item.plates,
      item.initTime,
      item.endTime
    );
    props.history.push("/");
  }

  return item === undefined ? null : (
    <div>
      <Header>
        <img src={logo} className="logo" alt="KeepSmiling Logo" />
      </Header>
      <main>
        <Section>
          <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Edit</BreadcrumbItem>
            </Breadcrumb>
            <EditForm item={item} update={handleUpdate} />
          </Container>
        </Section>
      </main>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateItem: (id, name, ontologist, plates, initTime, endTime) => {
      dispatch({
        type: "UPDATE",
        payload: {
          id,
          name,
          ontologist,
          plates,
          initTime,
          endTime,
        },
      });
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));
