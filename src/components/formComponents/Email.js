import React from 'react'
import { Form } from "react-bootstrap";

export default function Email({handleInputChange}) {
    return (
        <>
        <Form.Group controlId='formEmail'>
            <Form.Label
            className='form-label-ps'
            >
                E-mail
            </Form.Label>
            <Form.Control
            className='form-input-ps'
            name='email'
            onChange={handleInputChange}
            type='email'
            placeholder=''
            required
            />
        </Form.Group>
        </>
    )
}
