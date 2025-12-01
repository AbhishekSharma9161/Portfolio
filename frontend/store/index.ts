import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AppState {
  // Theme state
  theme: 'light' | 'dark' | 'system'
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  
  // Navigation state
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
  
  // Contact form state
  isContactFormOpen: boolean
  setIsContactFormOpen: (isOpen: boolean) => void
  
  // Loading states
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  
  // User preferences
  preferences: {
    animations: boolean
    reducedMotion: boolean
  }
  setPreferences: (preferences: Partial<AppState['preferences']>) => void
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        // Theme
        theme: 'system',
        setTheme: (theme) => set({ theme }),
        
        // Navigation
        isMenuOpen: false,
        setIsMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
        
        // Contact form
        isContactFormOpen: false,
        setIsContactFormOpen: (isContactFormOpen) => set({ isContactFormOpen }),
        
        // Loading
        isLoading: false,
        setIsLoading: (isLoading) => set({ isLoading }),
        
        // Preferences
        preferences: {
          animations: true,
          reducedMotion: false,
        },
        setPreferences: (newPreferences) =>
          set((state) => ({
            preferences: { ...state.preferences, ...newPreferences },
          })),
      }),
      {
        name: 'app-store',
        partialize: (state) => ({
          theme: state.theme,
          preferences: state.preferences,
        }),
      }
    ),
    {
      name: 'app-store',
    }
  )
)