import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const initialForm = { name: '', breed: '', adopted: false }

export default function DogForm({ dog, setCurrentDogId, postDog, putDog }) {
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

  const onSubmit = (event) => {
    event.preventDefault()
    let method = dog ? 'PUT' : 'POST'
    let url = dog ? `/api/dogs${values.id}` : '/api/dogs'
    fetch(url, {
      method,
      body: JSON.stringify(values),
    })
      .then(() => {
        navigate('/')
      })
      .catch(err => console.error(err))
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
        {dog && <button onClick={() => setCurrentDogId(null)}>Reset</button>}
      </form>
    </div>
  )
}
