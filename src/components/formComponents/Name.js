import React from 'react'
import { Form } from "react-bootstrap";

export default function Name({handleInputChange}) {
    return (
        <>
        <Form.Group controlId='formName'>
                    <Form.Label
                    className='form-label-ps'
                    >
                        Imię i nazwisko lub nazwa firmy
                    </Form.Label>
                    <Form.Control
                    className='form-input-ps'
                    name='name'
                    onChange={handleInputChange}
                    type='text'
                    placeholder=''
                    required
                    />
        </Form.Group>  
        </>
    )
}
