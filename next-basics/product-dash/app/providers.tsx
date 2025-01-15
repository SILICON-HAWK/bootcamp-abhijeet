'use client'

import { useRef } from 'react'
import { useFavoriteStore } from '@/store/favoriteStore'

export function Providers({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false)
  if (!initialized.current) {
    useFavoriteStore.getState().favorites
    initialized.current = true
  }
  return children
}

