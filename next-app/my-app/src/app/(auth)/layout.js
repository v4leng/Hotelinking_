import Link from 'next/link'
import AuthCard from '@/app/(auth)/AuthCard'
import ApplicationLogo from '@/components/ApplicationLogo'
import Image from 'next/image'

export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }) => {
    return (
        <div>
            <div className="font-sans text-gray-900 antialiased">
                <AuthCard
                    logo={
                        <Link href="/">
                            <Image
                                src="/hotel.png"
                                alt="Hotel"
                                width={120}
                                height={80}
                                style={{ position: 'relative', right: 20 }}
                            />
                        </Link>
                    }>
                    {children}
                </AuthCard>
            </div>
        </div>
    )
}

export default Layout
