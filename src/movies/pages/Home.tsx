import { Carrucel } from '../components'
import { MainLayout } from '../layout'

export const Home = () => {

    return (

        <MainLayout>
            <Carrucel titulo='Lo más visto' slug='/trending/all/week?' />
            <Carrucel titulo='Acción' slug='/discover/movie?with_genres=28&' />
            <Carrucel titulo='Aventura' slug='/discover/movie?with_genres=12&' />
            <Carrucel titulo='Drama' slug='/discover/movie?with_genres=18&' />
            <Carrucel titulo='Comedia' slug='/discover/movie?with_genres=16&' />
            <Carrucel titulo='Documentales' slug='/discover/movie?with_genres=99&' />
            <Carrucel titulo='Familia' slug='/discover/movie?with_genres=10751&' />
            <Carrucel titulo='Fantasia' slug='/discover/movie?with_genres=14&' />
            <Carrucel titulo='Terror' slug='/discover/movie?with_genres=27&' />
            <Carrucel titulo='Misterio' slug='/discover/movie?with_genres=9648&' />
            <Carrucel titulo='Romance' slug='/discover/movie?with_genres=10749&' />
        </MainLayout>

    )
}
