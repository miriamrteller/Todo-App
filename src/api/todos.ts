import { type TodoList } from '../Types/TodosTypes'

export const todosData: TodoList[] = [
  {
    userId: 1,
    todos: [
      { id: 11, title: 'Fix bugs', completed: false },
      { id: 12, title: 'Plan solution', completed: true },
      { id: 13, title: 'Publish', completed: false },
    ],
  },
  {
    userId: 4,
    todos: [
      { id: 14, title: 'Buy Ingredients', completed: false },
      { id: 15, title: 'Make Dinner', completed: false },
    ],
  },
  {
    userId: 5,
    todos: [
      { id: 16, title: 'Take kids', completed: true },
      { id: 17, title: 'Write chapter', completed: false },
      { id: 18, title: 'Send edits', completed: true },
      { id: 19, title: 'Review comments', completed: false },
      { id: 20, title: 'Pick up kids', completed: false },
    ],
  },
  {
    userId: 3,
    todos: [
      { id: 21, title: 'Create course overview', completed: false },
      { id: 22, title: 'Comment on test paper', completed: true },
      { id: 23, title: 'Collate quiz', completed: false },
    ],
  },
  {
    userId: 2,
    todos: [
      { id: 24, title: 'Write list', completed: true },
      { id: 25, title: 'Save document', completed: false },
      { id: 26, title: 'Print labels', completed: false },
    ],
  },
  {
    userId: 6,
    todos: [
      { id: 27, title: 'Return item', completed: false },
      { id: 28, title: 'Write card', completed: false },
    ],
  },
  {
    userId: 7,
    todos: [
      { id: 29, title: 'Wrap gift', completed: false },
      { id: 30, title: 'Take out trash', completed: false },
    ],
  },
  {
    userId: 8,
    todos: [
      { id: 31, title: 'Sew on buttons', completed: false },
      { id: 32, title: 'Cut new pattern', completed: true },
    ],
  },
  {
    userId: 9,
    todos: [
      // { id: 33, title: 'Choose restaurant', completed: false },
      // { id: 34, title: 'Send invitations', completed: true },
      // { id: 35, title: 'Count RSVPs', completed: false },
    ],
  },
];
