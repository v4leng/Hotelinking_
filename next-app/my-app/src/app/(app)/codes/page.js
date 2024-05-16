import Header from '../Header'
import { Box } from '@mui/material'
import CardCodeList from '@/components/carCodeList'
export const metadata = {
    title: 'App - Codes',
}

const Codes = () => {
    return (
        <>
            <Header title={'Codes'} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <Box>
                                <CardCodeList />
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Codes
