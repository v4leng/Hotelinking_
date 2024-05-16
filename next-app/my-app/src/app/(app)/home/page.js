import Header from '@/app/(app)/Header'
import CardList from '@/components/CardList'
import { Box, Grid } from '@mui/material'

export const metadata = {
    title: 'App - Home',
}

const Dashboard = () => {
    return (
        <>
            <Header title="Home" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <CardList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
