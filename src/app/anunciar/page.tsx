'use client'
import { useEffect, useState } from 'react'
import Card from '../components/Card'

type PokemonDetails = {
  id: number
  name: string
  url: string
}

type Task = {
  id: number
  title: string
  description?: string
  completed?: boolean
}

const fetchPokemonList = async (quantity: number) => {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${quantity}`
  ).then((res) => res.json())

  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon: PokemonDetails) => {
      const res = await fetch(pokemon.url).then((res) => res.json())
      return {
        id: res.id,
        name: res.name,
        url: res.sprites.front_default
      }
    })
  )

  return pokemonDetails
}

export default function Anunciar() {
  const [quantity, setQuantity] = useState(0)
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([])
  const [tasks, setTasks] = useState<Task[]>([])

  const handlePokemonList = async () => {
    const data = await fetchPokemonList(quantity)
    setPokemonDetails(data)
  }

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('../api/tasks')
      if (!response.ok) {
        throw new Error('Error al obtener las tareas')
      }
      const data = await response.json()
      setTasks(data)
    }

    fetchTasks()
  }, [])

  return (
    <>
      <div className="mb-8 flex w-full flex-col justify-start gap-4">
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
        <p>Cuantos quieres traer?</p>
        <div className="flex items-center gap-2">
          <input
            className="rounded-xl px-4 py-3"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button
            className="rounded-xl bg-lime-400 px-3 py-2"
            onClick={handlePokemonList}
          >
            Traer pokemon
          </button>
        </div>
      </div>
      <section className="grid grid-cols-1 gap-4 pb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pokemonDetails.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              title={pokemon.name}
              imageUrl={pokemon.url}
            />
          )
        })}
      </section>
    </>
  )
}
