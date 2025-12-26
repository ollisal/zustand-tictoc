import { create } from 'zustand'
import { combine } from 'zustand/middleware'

type SquareValue = 'X' | 'O' | null
type Squares = SquareValue[]

export const useGameStore = create(
  combine(
    {
      squares: Array<SquareValue>(9).fill(null),
    },
    (set) => ({
      setSquares: (squares: Squares | ((squares: Squares) => Squares)) => {
        set((state) => ({
          squares: typeof squares === 'function' ? squares(state.squares) : squares,
        }))
      },
    })
  )
)
