import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, beforeEach, expect } from "vitest";
import Todos from "../../components/Todo/Todo";
import { useAppState } from "../../store/useAppState";
import { resetStore } from "../../utils/resetStore";

describe("Todos toggle persistence", () => {
  beforeEach(() => {
    sessionStorage.clear();
    resetStore();

    useAppState.setState({
      selectedUserId: 1,
      allTodos: [
        {
          userId: 1,
          todos: [
            { id: 1, title: "Test todo", completed: false },
          ],
        },
      ],
    });
  });

  it("toggles todo on click and persists to sessionStorage", () => {
    render(<Todos />);

    expect(screen.getByText("Test todo")).toBeInTheDocument();
    expect(screen.queryByText("✓")).toBeNull();

    fireEvent.click(screen.getByText("Test todo"));

    expect(screen.getByText("✓")).toBeInTheDocument();

    const state = useAppState.getState();
    expect(state.allTodos[0].todos[0].completed).toBe(true);

    const persisted = JSON.parse(
      sessionStorage.getItem("app-state")!
    );

    expect(
      persisted.state.allTodos[0].todos[0].completed
    ).toBe(true);
  });
});
