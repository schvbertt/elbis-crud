import React from 'react'
import { Form } from "react-bootstrap";

export default function Checkbox({handleCheckbox, isChecked}) {
    return (
        <>
        <Form.Group controlId='formCheckbox'>
            <Form.Check
            type='checkbox'
            name='checkbox'
            checked={isChecked}
            onChange={handleCheckbox}
            label='Akceptuję regulamin oraz politykę prywatności'
            required
            />
        </Form.Group>  
        </>
    )
}
