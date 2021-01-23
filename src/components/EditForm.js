import React, { useState, useEffect } from "react";
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import {FormTitle, FormButton} from '../styles/styled'

const EditForm = (props) => {

  const [state, setState] = useState()

  useEffect(() => {
    setState(props.item)
  }, []);

  function handleChange(e) {
    e.preventDefault()
    const {id, value} = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  return (
    <Form>
      <FormTitle>Editar datos del Cliente</FormTitle>
      <Row form>
        <Col md={12}>
          <FormGroup>
            <Label for="name">Nombre del Paciente</Label>
            <Input type="text" name="name" id="name" placeholder={props.item.name} onChange={handleChange} />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
            <Label for="ontologist">Nombre del Profesional</Label>
            <Input type="text" name="ontologist" id="ontologist" placeholder={props.item.ontologist} onChange={handleChange} />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={12}>
        <FormGroup>
          <Label for="plates">Número de Placas</Label>
          <Input type="number" name="plates" id="plates" placeholder={props.item.plates} onChange={handleChange} />
        </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="initTime">Inicio del Tratamiento</Label>
            <Input type="text" name="initTime" id="initTime" placeholder={props.item.initTime} onChange={handleChange} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="endTime">Fin del Tratamiento</Label>
            <Input type="text" name="endTime" id="endTime" placeholder={props.item.endTime} onChange={handleChange} />
          </FormGroup>
        </Col>
      </Row>
      <FormButton onClick={(e) => {
        e.preventDefault()
        props.update(state)
      }}>Actualizar</FormButton>
    </Form>
  );
}


export default EditForm;
