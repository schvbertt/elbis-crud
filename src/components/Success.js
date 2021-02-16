import React from 'react'
import SuccessImg from '../img/success.png'

export default function Success() {
    return (
        <>
        <div className='success container'>
        <img src={SuccessImg} alt='success images' />
        <h1>Twoje zgłoszenie zostało wysłane poprawnie</h1>
        <h2>Skontaktujemy się z Tobą jak najszybciej będziemy mogli</h2>
        <h3>Ekipa <span>AGDPerfekt</span></h3>
        </div>
        </>
    )
}
