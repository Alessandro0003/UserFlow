import { Box } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HomeLogin } from './pages/HomeLogin'
import { Account } from './pages/Account'
import { Register } from './pages/Register'

const queryClient = new QueryClient()

export function App() {
  return (
    <Box>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeLogin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Box>
  )
}
