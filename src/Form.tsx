import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import List from './List';
import { SurfSpot } from './types';


export default function Form() {

  const [spots, setSpots] = useState<SurfSpot[]>([]);

  const getSurfSpots = (): void => {
    axios.get('/api/get')
    .then(({data})=>setSpots(data))
    .catch(error=>console.log(error));
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
    .catch((error)=>console.log(error));
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
    <List spots={spots} setSpots={setSpots} getSurfSpots={getSurfSpots}/>
    </>
  )
}