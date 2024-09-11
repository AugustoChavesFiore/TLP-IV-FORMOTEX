
import { useEffect } from 'react';
import './App.css'
import { useAuthStore } from './auth/store/auth.store';
import { ThemeProvider } from './components/shadcn/theme-provider'
import { AppRouter } from './router/AppRouter'
import { AppLayout } from './UI/layout/AppLayout'

function App() {

  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
 

  return (
    <ThemeProvider>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </ThemeProvider>

  )
}

export default App
