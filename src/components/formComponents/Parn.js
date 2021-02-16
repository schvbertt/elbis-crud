import React from 'react'
import { Form } from "react-bootstrap";

export default function Parn({handleInputChange}) {
    return (
        <>
        <Form.Group controlId='formParn'>
            <Form.Label
            className='form-label-ps'
            >
                Numer zamówienia lub paragonu/faktury
            </Form.Label>
            <Form.Control
            className='form-input-ps'
            name='parn'
            onChange={handleInputChange}
            type='text'
            placeholder='np. PARN/000000/20'
            required
            />
        </Form.Group>
        </>
    )
}
