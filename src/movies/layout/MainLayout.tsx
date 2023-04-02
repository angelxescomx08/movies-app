import { ReactNode, FC } from 'react'
import { Header } from "../components"

interface Props {
    children: ReactNode;
}
 
export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />

            {children}

            {/**Footer */}
        </>
    )
}
