import React from 'react'
import { Form, Col } from "react-bootstrap";

export default function Adress({handleInputChange}) {
    return (
        <>
        <Form.Group controlId='formAdress1'>
            <Form.Label
            className='form-label-ps'
            >
                Ulica i numer domu
            </Form.Label>
            <Form.Control
            className='form-input-ps'
            name='adress'
            onChange={handleInputChange}
            type='text'
            placeholder=''
            required
            />
        </Form.Group>
        <Form.Row>
            <Form.Group as={Col} sm='5' controlId='formAdress2'>
                <Form.Label
                className='form-label-ps'
                >
                    Kod pocztowy
                </Form.Label>
                <Form.Control
                className='form-input-ps'
                name='zip'
                onChange={handleInputChange}
                type='text'
                placeholder=''
                required
                />
            </Form.Group>
            <Form.Group as={Col} sm={{size: 5, offset: 1}} controlId='formAdress3'>
                <Form.Label
                className='form-label-ps'
                >
                    Miasto
                </Form.Label>
                <Form.Control
                className='form-input-ps'
                name='city'
                onChange={handleInputChange}
                type='text'
                placeholder=''
                required
                />
            </Form.Group>
        </Form.Row>
        </>
    )
}
