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

export const useWinner = (): Player | null => {
  return useGameStore((state) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (const [a, b, c] of lines) {
      if (
        state.squares[a] &&
        state.squares[a] === state.squares[b] &&
        state.squares[a] === state.squares[c]
      ) {
        return state.squares[a]
      }
    }

    return null
  })
}
