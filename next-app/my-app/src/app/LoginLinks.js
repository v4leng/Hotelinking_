'use client'

import { useAuth } from '@/hooks/auth'
import { styled } from '@mui/material/styles'
import ButtonCommon from '@/components/buttonCommon'
import Button from '@/components/Button'
import Link from 'next/link'

const ButtonStyled = styled(ButtonCommon)({
    color: 'white',
    backgroundColor: '#715aff',
    '&:hover': {
        backgroundColor: '#5830f7',
    },
})

const ButtonStyledRegister = styled(ButtonCommon)({
    color: 'white',
    backgroundColor: 'transparent',
    border: '1px solid #5830f7',
    '&:hover': {
        backgroundColor: '#5830f7',
    },
})

const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            {user ? (
                <Link href="/home">
                    <Button>Home</Button>
                </Link>
            ) : (
                <>
                    <Link href="/login">
                        <Button>Login</Button>
                    </Link>
                    <Link href="/register" className="ml-3">
                        <Button>Register</Button>
                    </Link>
                </>
            )}
        </div>
    )
}

export default LoginLinks
