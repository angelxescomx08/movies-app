import { ReactNode, FC } from 'react'
import { Header } from "../components"
import { Box } from '@mui/material'

interface Props {
    children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />

            <Box sx={{
                padding: '68px 1rem 1rem 1rem',
                backgroundColor: '#4A4A4A'
            }}>
                {children}
            </Box>

            {/**Footer */}
        </>
    )
}
