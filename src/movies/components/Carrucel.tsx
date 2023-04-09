import { Typography, Box } from '@mui/material'
import { useEffect, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export const Carrucel = () => {
    const [peliculas, setPeliculas] = useState<any[]>([])

    const obtenerPeliculas = async () => {
        const url = `${import.meta.env.VITE_API_URL}/trending/all/week?api_key=${import.meta.env.VITE_KEY_API}`
        const res = await fetch(url)
        const data = await res.json()
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
                Lo más visto
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
                                alt={pelicula.name}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Box>
    )
}
