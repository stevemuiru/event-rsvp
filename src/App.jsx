import React, { useState } from 'react';

export default function EventRSVPform () {

  const [text, setText] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [diet, setDiet] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [submitted, setSubmit] = useState(false)

  const handleChange = (event) => {
    event.preventDefault()
    setSubmit(true)
  }

  return (
    <>

    <form onSubmit={handleChange}>
      
      <label htmlFor="name">Name:</label>
     <input type="text" 
     onChange = {(e) => setText(e.target.value)} 
     placeholder="Your name"
     required/>
     
     <label htmlFor="email">Email:</label>
     <input type="email" 
     onChange = {(e) => setEmail(e.target.value)}
     placeholder="Your email"
      required/>

     <label htmlFor="number">Number of attendes:</label> 
     <input type="number"
     onChange = {(e) => setNumber(e.target.value)} 
     placeholder="Number of attendes"
      required/>

      <label htmlFor="diet">Dietary Preferences:</label>
      <input type="text" 
      onChange={(e) => setDiet(e.target.value)}
      placeholder="Dietary Preferences (optional)" />
      
      <p>Bringing additional guests?</p>
     <input type="checkbox"
     checked={checkbox}
     onChange = {(e) => setCheckbox(e.target.checked)}
      required/>

      <button type="submit">Submit RSVP</button>
    </form>

    {submitted && (
      <div class="confirmation">
        <h2>RSVP submitted:</h2>
        <p><strong>Name:</strong> {text}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Attendes:</strong> {number}</p>
        <p><strong>Dietary Preference:</strong> {diet}</p>
        <p><strong>Bringing additional guests?</strong> {checkbox ? 'Yes' : 'No'}</p>
      </div>
    )}

    </>

  )
  
}