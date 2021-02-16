import React from 'react'
import { Button } from "react-bootstrap";

export default function Submit() {
    return (
        <>
        <Button
        name='submit'
        variant='none'
        type="submit"
        className='send-form'
        >
            Wyślij zgłoszenie
        </Button>
        </>
    )
}
