import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const initialForm = { name: '', breed: '', adopted: false }

export default function DogForm({ dog, reset, getDogs }) {
  const [values, setValues] = useState(initialForm)
  const [breeds, setBreeds] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (dog) setValues(dog)
    else setValues(initialForm)
  }, [dog])

  useEffect(() => {
    fetch('/api/dogs/breeds')
      .then(res => res.json())
      .then(breeds => setBreeds(breeds))
      .catch(err => console.error(err))
  }, [])

  const postDog = (dog) => {
    fetch('/api/dogs', {
      method: 'POST',
      body: JSON.stringify(dog),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Problem POSTing dog')
        else {
          getDogs()
          navigate('/')
        }
      })
      .catch(err => console.error(err))
  }

  const putDog = (changes) => {
    fetch(`/api/dogs/${changes.id}`, {
      method: 'PUT',
      body: JSON.stringify(changes),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Problem PUTing dog')
        else {
          getDogs()
          navigate('/')
          reset()
        }
      })
      .catch(err => console.error(err))
  }
  const onSubmit = (event) => {
    event.preventDefault()
    const action = dog ? putDog : postDog
    action(values)
  }

  const onChange = (event) => {
    const { name, value, type, checked } = event.target
    setValues({
      ...values, [name]: type === 'checkbox' ? checked : value
    })
  }

  return (
    <div>
      <h2>
        {dog ? "Edit Dog" : "Create Dog "}
      </h2>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          value={values.name}
          onChange={onChange}
          placeholder="Name"
        />
        <select
          name="breed"
          value={values.breed}
          onChange={onChange}
        >
          <option value="">---Select Breed---</option>
          {breeds.map(br => <option key={br}>{br}</option>)}
        </select>
        <label>
          Adopted: <input
            type="checkbox"
            name="adopted"
            checked={values.adopted}
            onChange={onChange}
          />
        </label>
        <button type="submit" disabled={values.name.trim().length < 3 || !values.breed}>
          {dog ? "Edit Dog" : "Create Dog"}
        </button>
        {dog && <button onClick={reset}>Reset</button>}
      </form>
    </div>
  )
}
