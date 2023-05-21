import axios from 'axios';
import './App.css'
import { FaTrash } from 'react-icons/fa';
import { SurfSpot } from './types';

interface ListProps {
  spots: SurfSpot[]
  setSpots: React.Dispatch<React.SetStateAction<SurfSpot[]>>
  getSurfSpots: VoidFunction
}

export default function List ({spots, setSpots, getSurfSpots}: ListProps) {

  const deleteSurfSpots = (id: number): void => {
    axios.delete(`/api/delete/${id}`)
    .then(({data})=>getSurfSpots())
    .catch(error=>console.log(error));
  }

  return (
    <>
    {spots.map((spot: SurfSpot)=>
      <div key={`${spot.id}, ${spot.name}`} className='list'>
        <span>{spot.name}</span>
        <FaTrash onClick={()=>deleteSurfSpots(spot.id)} className='trash'/>
      </div>
    )}
    </>
  )
}