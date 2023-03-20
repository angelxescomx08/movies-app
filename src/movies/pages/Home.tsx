import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export const Home = () => {

    const [peliculas, setPeliculas] = useState<any[]>([])

    const obtenerPeliculas = async () => {
        const url = 'https://api.themoviedb.org/3/trending/all/week?api_key=a035f3066ffb501ea80d854f4ec7b9f2'
        const res = await fetch(url)
        const data = await res.json()
        setPeliculas(data.results)
    }

    useEffect(() => {
        obtenerPeliculas()
    }, [])

    return (
        <div>

            {
                peliculas.map(pelicula => (
                    <div key={pelicula.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.name} />
                        <Typography>{pelicula.name}</Typography>
                    </div>
                ))
            }

        </div>
    )
}
