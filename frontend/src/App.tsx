
import { useEffect } from 'react';
import './App.css'
import { useAuthStore } from './auth/store/auth.store';
import { ThemeProvider } from './components/shadcn/theme-provider'
import { AppRouter } from './router/AppRouter'
import { AppLayout } from './UI/layout/AppLayout'
import { Toaster } from 'react-hot-toast';
import { useCategoryStore } from './Categories/store/CategoryStore';

function App() {

  const checkAuth = useAuthStore((state) => state.checkAuth);
  const categories = useCategoryStore((state) => state.getCategories);

  useEffect(() => {
    checkAuth();
    categories();
   
  }, [checkAuth]);
 

  return (
    <ThemeProvider>
       <Toaster
        position="bottom-left"
        toastOptions={{
          duration: 3000,
        }}
      />
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </ThemeProvider>

  )
}

export default App
