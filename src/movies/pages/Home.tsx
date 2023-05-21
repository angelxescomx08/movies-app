import { CarrucelSuspendido } from '../components'
import { MainLayout } from '../layout'

export const Home = () => {

    return (

        <MainLayout>
            <CarrucelSuspendido titulo='Lo más visto' slug='/trending/all/week?' />
            <CarrucelSuspendido titulo='Acción' slug='/discover/movie?with_genres=28&' />
            <CarrucelSuspendido titulo='Aventura' slug='/discover/movie?with_genres=12&' />
            <CarrucelSuspendido titulo='Drama' slug='/discover/movie?with_genres=18&' />
            <CarrucelSuspendido titulo='Comedia' slug='/discover/movie?with_genres=16&' />
            <CarrucelSuspendido titulo='Documentales' slug='/discover/movie?with_genres=99&' />
            <CarrucelSuspendido titulo='Familia' slug='/discover/movie?with_genres=10751&' />
            <CarrucelSuspendido titulo='Fantasia' slug='/discover/movie?with_genres=14&' />
            <CarrucelSuspendido titulo='Terror' slug='/discover/movie?with_genres=27&' />
            <CarrucelSuspendido titulo='Misterio' slug='/discover/movie?with_genres=9648&' />
            <CarrucelSuspendido titulo='Romance' slug='/discover/movie?with_genres=10749&' />
        </MainLayout>

    )
}
