import { Typography, Box } from '@mui/material'
import { useEffect, useState, FC } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { MovieShort, MoviesResponse } from '../interfaces';

interface Props {
    titulo: string;
    slug: string;
}

export const Carrucel: FC<Props> = ({ titulo, slug }) => {
    const [peliculas, setPeliculas] = useState<MovieShort[]>([])

    const obtenerPeliculas = async () => {
        const url = `${import.meta.env.VITE_API_URL}${slug}api_key=${import.meta.env.VITE_KEY_API}`
        const res = await fetch(url)
        const data: MoviesResponse = await res.json()
        setPeliculas(data.results)
    }

    useEffect(() => {
        obtenerPeliculas()
    }, [])

    return (
        <Box sx={{ marginBottom: 6 }}>
            <Typography
                fontWeight={600}
                sx={{ color: '#fff', fontSize: 20, marginBottom: 1 }}>
                {titulo}
            </Typography>
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={5}
                navigation
                onSlideChange={() => { }}
                onSwiper={(swiper) => { }}
            >
                {
                    peliculas.map(pelicula => (
                        <SwiperSlide key={pelicula.id}>
                            <img
                                style={{
                                    width: '100%',
                                    aspectRatio: '16/9',
                                    objectFit: 'cover',
                                    borderRadius: 10
                                }}
                                src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                                alt={pelicula.title}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Box>
    )
}
