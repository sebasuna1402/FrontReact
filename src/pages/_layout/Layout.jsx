import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

export const Layout = () => {
    const queryClient = new QueryClient()
    return (
        <>

            <Navbar />

            <main>
                <QueryClientProvider client={queryClient}>
                    <Outlet />
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </main>

            <h1>footer</h1>
        </>
    )
}

export default Layout