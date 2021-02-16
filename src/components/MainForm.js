import React, { useState } from 'react'
import Axios from 'axios';
import { Container, Form, Col, Row } from "react-bootstrap";
import { useHistory } from 'react-router-dom';


// import ChooseType from './ChooseType'
// FORM COMPONENTS
import Name from './formComponents/Name'
import Adress from './formComponents/Adress'
import Description from './formComponents/Description'
import Parn from './formComponents/Parn'
import Email from './formComponents/Email'
import Tel from './formComponents/Tel'
import Checkbox from './formComponents/Checkbox'
import Submit from './formComponents/Submit'

export default function InputForm() {
    const initialState = {
        name: '',
        adress: '',
        zip: '',
        city: '',
        description: '',
        parn: '',
        email: '',
        tel: ''
    };

    // REDIRECT
    let history = useHistory();

    // STATE
    const [validated, setValidated] = useState(false);
    const [inputs, setInputs] = useState(initialState);
    const [isChecked, setIsChecked] = useState(false)

    // HANDLERS
    const handleInputChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleCheckbox = () => {
        setIsChecked(!isChecked);
    };


    // SUBMIT
    const handleSubmit = e => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            setValidated(true);
            return;
        }
        Axios.post('http://localhost:3001/api/insert', {
            inputs: inputs,
            isChecked: isChecked
        })
        e.preventDefault();
        setValidated(true);
        history.push('/success')
    };


    return (
        <>
            <Container className='form-container-ps'>
                <Row>
                    {/* <Col md={3}>
                    <ChooseType />
                </Col> */}
                    <Col md={6}>
                        <Form
                            className='return-form'
                            noValidate validated={validated}
                            onSubmit={handleSubmit}
                            method='POST'
                        >
                            <Name handleInputChange={handleInputChange} />
                            <Adress handleInputChange={handleInputChange} />
                            <hr className='mt-2 mb-4' />
                            <Description handleInputChange={handleInputChange} />
                            <Parn handleInputChange={handleInputChange} />
                            <hr className='mt-4 mb-4' />
                            <Email handleInputChange={handleInputChange} />
                            <Tel handleInputChange={handleInputChange} />
                            <Checkbox handleCheckbox={handleCheckbox} isChecked={isChecked} />
                            <Submit />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
