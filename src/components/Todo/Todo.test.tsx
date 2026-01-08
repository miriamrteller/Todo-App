import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import Todos from '../Todo/Todo'
import { useAppState } from '../../store/useAppState'

const mockTodos = [
  {
    userId: 1,
    todos: [
      { id: 1, title: 'Buy milk', completed: false },
    ],
  },
]

function setupStore() {
  useAppState.setState({
    allTodos: mockTodos,
    users: [],
    selectedUserId: 1,
    filtered: false,
  })
}

describe('Todos component', () => {
  beforeEach(() => {
    sessionStorage.clear()
    cleanup()
    setupStore()
  })

  it('displays a todo item', () => {
    render(<Todos />)

    expect(screen.getByText('Buy milk')).toBeInTheDocument()
  })

  it('marks a todo as completed when clicked', () => {
    render(<Todos />)

    const todoItem = screen.getByText('Buy milk')
    fireEvent.click(todoItem)

    expect(screen.getByText(/✓/)).toBeInTheDocument()
  })

  it('persists completed state after refresh', () => {
    const { unmount } = render(<Todos />)

    fireEvent.click(screen.getByText('Buy milk'))

    unmount()

    // simulate page refresh by reloading store from sessionStorage
    useAppState.persist.rehydrate()

    render(<Todos />)

    expect(screen.getByText(/✓/)).toBeInTheDocument()
  })
})
