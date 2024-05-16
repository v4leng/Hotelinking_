'use client'

import axios from '@/lib/axios'
import { useState, useEffect } from 'react'
import CardCode from './cardCode'
import { useAuth } from '@/hooks/auth'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { toast, ToastContainer } from 'react-toastify'

const CardCodeList = () => {
    const { codeUptade } = useAuth()
    const [list, setList] = useState([])

    useEffect(() => {
        axios
            .get('/api/list_codes')
            .then(response => {
                setList(response.data)
            })
            .catch(error => {
                console.error('Error fetching offers:', error)
            })
    }, [])

    const codeIsRedeemed = async codeId => {
        try {
            const response = await axios.get(`/api/codes_verify/${codeId}`)
            return response.data.redeemed
        } catch (error) {
            console.error('Error fetching code:', error)
            return false
        }
    }

    const handlerCodeUptdate = async codeId => {
        try {
            const isRedeemed = await codeIsRedeemed(codeId)
            if (isRedeemed === 1) {
                // El código ya ha sido canjeado
                toast.error('The code has already been redeemed.')
            } else {
                // El código aún no ha sido canjeado, procede con la actualización
                await codeUptade({ codeId })
            }
        } catch (error) {
            console.error('Error updating code:', error)
            toast.error('An error occurred while updating the code.')
        }
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    alignItems="center">
                    {list.length > 0 ? (
                        list.map(code => (
                            <Grid
                                item
                                key={code.id}
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}>
                                <CardCode
                                    code={code.code}
                                    ofertaId={code.offer_id}
                                    handleClick={() =>
                                        handlerCodeUptdate(code.id)
                                    }
                                />
                            </Grid>
                        ))
                    ) : (
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minHeight: '50vh',
                                }}>
                                <Image
                                    src="/no-code.png"
                                    alt="no-code"
                                    width={180}
                                    height={200}
                                />
                                <Typography variant="h6" align="center">
                                    There are no codes yet
                                </Typography>
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </Box>
            <ToastContainer />
        </>
    )
}

export default CardCodeList
