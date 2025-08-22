const { useState } = React;

export function EventRSVPform () {

  const [text, setText] = useState('')
  const [number, setNumber] = useState('')
  const [checkbox, setCheckbox] = useState(false)

  

  return (
    <>

    <form>
     <input type="text" required/>
     <input type="text"  required/>
     <input type="number"  required/>
     <input type="checkbox" required/>
    </form>

    </>

  )
  
}