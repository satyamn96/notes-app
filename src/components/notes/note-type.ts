
export type Priority = "high" | "medium" | "low";

export type NoteType = {
  id: string,
  text: string,
  author: string,
  priority: Priority
};

export enum ColorLight {
  high='#F4511E',
  medium='#FFEB3B',
  low='#4CAF50'
}
export enum ColorDark {
  high='#7f3e3c',
  medium='rgb(127 120 55)',
  low='rgb(35 75 37)'
}
