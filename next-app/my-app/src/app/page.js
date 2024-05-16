import LoginLinks from '@/app/LoginLinks'
import Image from 'next/image'
import { Box, colors } from '@mui/material'

export const metadata = {
    title: 'Laravel',
}

const Home = () => {
    return (
        <>
            <div
                style={{ background: '#f3f4f6' }}
                className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
                <LoginLinks />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Image
                        src="/hotel.png"
                        alt="Hotel"
                        width={180}
                        height={200}
                        style={{ position: 'relative', right: 20 }}
                    />
                    <Box
                        style={{
                            background: 'white',
                            textAlign: 'center',
                            marginTop: 50,
                            marginBottom: 150,
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                            maxWidth: '400px',
                        }}>
                        <h1
                            style={{ color: '#231650' }}
                            className="text-2xl font-bold mb-4">
                            Welcome to the Hotel App!
                        </h1>
                        <p className="text-lg mb-4">
                            Discover a unique experience during your stay in our
                            hotel. Explore our offers exclusives and redeem
                            special benefits designed specially for you.
                        </p>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default Home
