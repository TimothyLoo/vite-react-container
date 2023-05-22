import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import List from './List';
import { SurfSpot } from './types';


export default function Form() {

  const [spots, setSpots] = useState<SurfSpot[]>([]);
  const [error, setError] = useState('');

  const displayError = (eMessage: string) => {
    setError(eMessage);
    setTimeout(()=>{
      setError('');
    }, 5000);
  }

  const getSurfSpots = (): void => {
    axios.get('/api/get')
    .then(({data})=>setSpots(data))
    .catch(({message})=>displayError(message));
  }

  const addSurfSpot = (event: FormEvent): void => {
    event.preventDefault();
    const form: HTMLFormElement = event.target as HTMLFormElement;
    const surfSpotInput = form.elements.namedItem('surfSpotName') as HTMLInputElement;
    axios.post('/api/add', {name: surfSpotInput.value})
    .then(({data})=>{
      getSurfSpots();
      surfSpotInput.value = '';
    })
    .catch(({message})=>displayError(message));
  }

  useEffect(()=>{
    getSurfSpots();
  }, [])

  return (
    <>
    <form onSubmit={addSurfSpot}>
      <input type='text' placeholder='Input surf spot...' name='surfSpotName'/>
      <input type='submit' />
    </form>
    <List spots={spots} getSurfSpots={getSurfSpots}/>
    {error.length > 0 && <div>{error}</div>}
    </>
  )
}