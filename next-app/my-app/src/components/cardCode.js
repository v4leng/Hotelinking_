import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import ButtonCommon from './buttonCommon'

const ButtonStyled = styled(ButtonCommon)({
    color: 'white',
    backgroundColor: '#715aff',
    '&:hover': {
        backgroundColor: '#5830f7',
    },
})

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        •
    </Box>
)

export default function CardCode({ ofertaId, code, handleClick }) {
    return (
        <Card>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom>
                            {ofertaId}
                        </Typography>
                        <Typography variant="body2">{code}</Typography>
                    </CardContent>
                    <CardActions>
                        <ButtonStyled
                            handleClick={handleClick}
                            style={{ width: 150, height: 40, marginBottom: 20 }}
                            size="small"
                            variant={'contained'}
                            title={'Swap'}
                        />
                    </CardActions>
                </Card>
            </Box>
        </Card>
    )
}
