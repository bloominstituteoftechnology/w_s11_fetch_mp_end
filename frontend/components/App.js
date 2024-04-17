import React, { useState, useEffect } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import DogForm from './DogForm'
import DogsList from './DogsList'

export default function App() {
  const [dogs, setDogs] = useState([])
  const [currentDogId, setCurrentDogId] = useState(null)
  useEffect(() => {
    getDogs()
  }, [])
  const getDogs = () => {
    fetch('/api/dogs')
      .then(res => res.json())
      .then(setDogs)
      .catch(err => console.error(err))
  }
  const postDog = dog => {
    fetch('/api/dogs', {
      method: 'POST',
      body: JSON.stringify(dog),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Problem POSTing dog')
      })
      .catch(err => console.error(err))
  }
  const putDog = changes => {
    fetch('/api/dogs', {
      method: 'PUT',
      body: JSON.stringify(changes),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Problem PUTing dog')
      })
      .catch(err => console.error(err))
  }
  const deleteDog = id => {
    fetch(`/api/dogs/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (!res.ok) throw new Error('Problem DELETEing dog')
        else getDogs()
      })
      .catch(err => console.error(err))
  }
  return (
    <div>
      <nav>
        <NavLink to="/">Dogs</NavLink>
        <NavLink to="/form">Form</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<DogsList
          dogs={dogs}
          deleteDog={deleteDog}
          setCurrentDogId={setCurrentDogId}
        />} />
        <Route path="/form" element={<DogForm
          dog={currentDogId && dogs.find(d => d.id == currentDogId)}
          setCurrentDogId={setCurrentDogId}
          postDog={postDog}
          putDog={putDog}
        />} />
      </Routes>
    </div>
  )
}
