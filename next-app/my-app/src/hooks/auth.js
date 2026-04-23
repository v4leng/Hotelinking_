import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()
    const params = useParams()

    const { data: user, error, mutate } = useSWR(
        middleware !== 'guest' ? '/api/user' : null, 
        () => axios.get('/api/user').then(res => res.data).catch(error => {
            if (error.response?.status !== 409) throw error
            router.push('/verify-email')
        })
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const login = async ({ setErrors, setStatus, ...props }) => {
        await csrf()
        setErrors([])
        setStatus(null)

        axios.post('/api/login', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response?.status !== 422) throw error
                setErrors(error.response.data.errors)
            })
    }

    const register = async ({ setErrors, ...props }) => {
        await csrf()
        setErrors([])
        axios.post('/api/register', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response?.status !== 422) throw error
                setErrors(error.response.data.errors)
            })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()
        setErrors([])
        setStatus(null)
        axios.post('/api/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response?.status !== 422) throw error
                setErrors(error.response.data.errors)
            })
    }

    const logout = async () => {
        if (!error) {
            await axios.post('/api/logout').then(() => mutate())
        }
        window.location.pathname = '/login'
    }

    const code = async ({ ...props }) => {
        try {
            await axios.post('/api/code-create', props)
            toast.success('Offer obtained')
        } catch (error) {
            toast.error('The code has already been taken')
        }
    }

    const codeUpdate = async ({ codeId }) => {
        try {
            await axios.put(`/api/codes/${codeId}`)
            toast.success('Redeemed')
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated)
        if (window.location.pathname === '/verify-email' && user?.email_verified_at) router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return { user, register, login, forgotPassword, logout, code, codeUpdate }
}