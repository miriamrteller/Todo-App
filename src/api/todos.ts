export type Todo = { title: string; completed: boolean };

export type TodoList = {
  userId: number;
  todos: Todo[];
};

export const todos: TodoList[] = [
  {
    userId: 1,
    todos: [
      { title: 'Fix bugs', completed: false },
      { title: 'Plan solution', completed: true },
      { title: 'Publish', completed: false },
    ],
  },
  {
    userId: 4,
    todos: [
      { title: 'Buy Ingredients', completed: false },
      { title: 'Make Dinner', completed: false },
    ],
  },
  {
    userId: 5,
    todos: [
      { title: 'Take kids', completed: true },
      { title: 'Write chapter', completed: false },
      { title: 'Send edits', completed: true },
      { title: 'Review comments', completed: false },
      { title: 'Pick up kids', completed: false },
    ],
  },
  {
    userId: 3,
    todos: [
      { title: 'Create course overview', completed: false },
      { title: 'Comment on test paper', completed: true },
      { title: 'Collate quiz', completed: false },
    ],
  },
  {
    userId: 2,
    todos: [
      { title: 'Write list', completed: true },
      { title: 'Save document', completed: false },
      { title: 'Print labels', completed: false },
    ],
  },
  {
    userId: 6,
    todos: [
      { title: 'Return item', completed: false },
      { title: 'Write card', completed: false },
    ],
  },
  {
    userId: 7,
    todos: [
      { title: 'Wrap gift', completed: false },
      { title: 'Take out trash', completed: false },
    ],
  },
  {
    userId: 8,
    todos: [
      { title: 'Sew on buttons', completed: false },
      { title: 'Cut new pattern', completed: true },
    ],
  },
  {
    userId: 9,
    todos: [
      { title: 'Choose restaurant', completed: false },
      { title: 'Send invitations', completed: true },
      { title: 'Count RSVPs', completed: false },
    ],
  },
];
