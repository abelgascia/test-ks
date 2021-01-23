import React from "react";
import { Table, Container } from "reactstrap";
import { TableButton } from "../styles/styled";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Moment from "react-moment";
import { Trash, Edit, RefreshCw } from "react-feather";

const ListTable = (props) => {
  /**
   * Funcion encargada de redirigir hacia el formulario basado en la propiedad name del item.
   * @param {string} name Propiedad name del ítem a ser modificado.
   */
  function updateItem(name) {
    props.history.push(`/edit/${name}`);
  }

  /**
   * Funcion encargada de remover un item de la store de redux.
   * @param {number} id ID del item a ser removido.
   */
  function removeItem(id) {
    props.removeItem(id);
  }

  /**
   * Funcion encargada de iterar el array de items y devolver el componente de vista.
   * @param item - Item a ser convertido y devuelto como componente.
   * @param index - Indice del item para que sea único en la tabla.
   * @returns Componente hijo para la tabla de items.
   */

  const itemsList = props.items.map((item, index) => {
    return (
      <tr key={index}>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.ontologist}</td>
        <td>{item.plates}</td>
        <td>
          <Moment format="DD/MM/YY hh:mm">{item.initTime}</Moment>
        </td>
        <td>
          <Moment format="DD/MM/YY hh:mm">{item.endTime}</Moment>
        </td>
        <td>
          <TableButton color="green" onClick={() => updateItem(item.name)}>
            <Edit />
          </TableButton>
          <TableButton onClick={() => removeItem(item.id)}>
            <Trash />
          </TableButton>
        </td>
      </tr>
    );
  });

  return (
    <Container>
      <button className="reload" onClick={() => props.reloadData()}>
        <RefreshCw />
      </button>
      <Table striped style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Paciente</th>
            <th>Odontólogo</th>
            <th>Cant. de Placas</th>
            <th>Inicio de Tratam.</th>
            <th>Fin de Tratam.</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>{itemsList}</tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setItems: (items) => {
      dispatch({
        type: "SET",
        payload: { items },
      });
    },
    removeItem: (id) => {
      dispatch({
        type: "REMOVE",
        payload: { id },
      });
    },
    reloadData: () => {
      dispatch({
        type: "RELOAD",
      });
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ListTable)
);
