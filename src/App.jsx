const { useState } = React;

export function EventRSVPform () {

  const [text, setText] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [submit, setSubmit] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
    setSubmit(true)
  }

  return (
    <>

    <form onSubmit={handleChange}>
      
      <label htmlFor="name">Name:</label>
     <input type="text" 
     onChange = {(e) => setText()} required/>
     value={text}
     
     <label htmlFor="email">Email:</label>
     <input type="email" 
     onChange = {(e) => setEmail()}
     value={email}
      required/>

     <label htmlFor="number">Number of attendes:</label> 
     <input type="number"
     onChange = {(e) => setNumber()} 
     value={number}
      required/>
      
      <p>Bringing additional guests?</p>
     <input type="checkbox"
     onChange = {(e) => setCheckbox(true)}
      required/>
    </form>

    </>

  )
  
}