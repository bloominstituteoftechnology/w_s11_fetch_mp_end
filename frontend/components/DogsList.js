import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DogsList({ dogs, setCurrentDogId, deleteDog }) {
  const navigate = useNavigate()
  const onEdit = id => {
    setCurrentDogId(id)
    navigate('form')
  }
  const onDelete = id => {
    deleteDog(id)
  }
  return (
    <div>
      <h2>Dogs Shelter</h2>
      <ul>
        {dogs.map(dog => (
          <div key={dog.id}>
            {dog.name}, breed {dog.breed}, {dog.adopted ? ' ' : 'NOT '}adopted
            <div>
              <button onClick={() => onEdit(dog.id)}>Edit</button>
              <button onClick={() => onDelete(dog.id)}>Delete</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}
