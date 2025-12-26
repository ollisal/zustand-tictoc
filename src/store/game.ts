import { create } from 'zustand'
import { combine } from 'zustand/middleware'

type Player = 'X' | 'O'
type SquareValue = Player | null

export const useGameStore = create(
  combine(
    {
      squares: Array<SquareValue>(9).fill(null),
      turn: 'X' as Player,
    },
    (set) => ({
      playTurn: (index: number) => {
        set((state) => {
          if (state.squares[index] !== null) {
            return {}
          }

          const nextSquares = state.squares.slice()
          nextSquares[index] = state.turn

          const nextTurn: Player = state.turn === 'X' ? 'O' : 'X'

          return {
            squares: nextSquares,
            turn: nextTurn,
          }
        })
      },
    })
  )
)
