import { FormEvent } from 'react';
import axios from 'axios';
import './App.css'

export default function Form() {

  const addSurfSpot = (event: FormEvent): void => {
    event.preventDefault();
    const form: HTMLFormElement = event.target as HTMLFormElement;
    const surfSpotInput = form.elements.namedItem('surfSpotName') as HTMLInputElement;
    axios.post('/api/add', {name: surfSpotInput.value})
    .then(({data})=>console.log(data))
    .catch((error)=>console.log(error));
  }

  return (
    <form onSubmit={addSurfSpot}>
      <input type='text' placeholder='Input surf spot...' name='surfSpotName'/>
      <input type='submit' />
    </form>
  )
}