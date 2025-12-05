import { create } from 'zustand/react'

interface CounterState {
  count: number
  increment: () => void
}

export const useCounter = create<CounterState>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))
