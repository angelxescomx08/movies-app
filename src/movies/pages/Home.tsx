import { Carrucel } from '../components'
import { MainLayout } from '../layout'

export const Home = () => {

    return (

        <MainLayout>
            <Carrucel titulo='Lo más visto' slug='/trending/all/week?' />
            <Carrucel titulo='Acción' slug='/discover/movie?with_genres=28&' />
            <Carrucel titulo='Aventura' slug='/discover/movie?with_genres=12&' />
            <Carrucel titulo='Drama' slug='/discover/movie?with_genres=18&' />
            <Carrucel titulo='Lo más visto' slug='/discover/movie?with_genres=16&' />
            <Carrucel titulo='Lo más visto' slug='/discover/movie?with_genres=16&' />
            <Carrucel titulo='Lo más visto' slug='/discover/movie?with_genres=16&' />
            <Carrucel titulo='Lo más visto' slug='/discover/movie?with_genres=16&' />
            <Carrucel titulo='Lo más visto' slug='/discover/movie?with_genres=16&' />
            <Carrucel titulo='Lo más visto' slug='/discover/movie?with_genres=16&' />
            <Carrucel titulo='Lo más visto' slug='/discover/movie?with_genres=16&' />
        </MainLayout>

    )
}
