import React from 'react'
import { Form } from "react-bootstrap";

export default function Tel({handleInputChange}) {
    return (
        <>
        <Form.Group controlId='formPhone'>
            <Form.Label
            className='form-label-ps'
            >
                Numer telefonu
            </Form.Label>
            <Form.Control
            className='form-input-ps'
            name='tel'
            onChange={handleInputChange}
            type='tel'
            placeholder=''
            required
            />
        </Form.Group>
        </>
    )
}
