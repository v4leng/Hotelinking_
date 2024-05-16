'use client'

import axios from '@/lib/axios'
import CardCommon from './cardCommon'
import { Box, Grid } from '@mui/material'
import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/auth'
import { v4 as uuidv4 } from 'uuid'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CardList = () => {
    const { user } = useAuth({ middleware: 'auth' })
    const { code } = useAuth()
    const [list, setList] = useState([])
    const codeUnique = uuidv4()

    useEffect(() => {
        axios
            .get('/api/list_offers')
            .then(response => {
                // Actualizar el estado con los datos de las ofertas recibidas
                setList(response.data)
            })
            .catch(error => {
                console.error('Error fetching offers:', error)
            })
    }, [])

    const handleCode = selectedOfferId => {
        const selectedOffer = list.find(offer => offer.id === selectedOfferId)

        if (selectedOffer) {
            code({
                code: codeUnique,
                user_id: user.id,
                offer_id: selectedOffer.id,
                redeemed: false,
            })
        }
    }

    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                }}>
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    alignItems="center">
                    {list.map(offer => (
                        <Grid item key={offer.id} xs={12} sm={6} md={4} lg={3}>
                            <CardCommon
                                title={offer.name}
                                discount={offer.discount}
                                image={offer.image_url}
                                description={offer.description}
                                buttonText={'Get'}
                                handlerClick={() => handleCode(offer.id)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <ToastContainer />
        </>
    )
}

export default CardList
