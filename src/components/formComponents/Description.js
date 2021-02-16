import React from 'react'
import { Form } from "react-bootstrap";

export default function Description({handleInputChange}) {
    return (
        <>
        <Form.Group controlId='formDescription'>
            <Form.Label
            className='form-label-ps'
            >
                Opisz usterkę/wadę
            </Form.Label>
            <Form.Control
            as='textarea'
            className='form-input-ps form-textarea-ps'
            name='description'
            onChange={handleInputChange}
            type='text'
            placeholder=''
            min='10'
            max='1000'
            required
            />
        </Form.Group>   
        </>
    )
}
