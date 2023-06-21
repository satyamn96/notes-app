
export type Priority = "high" | "medium" | "low";

export type NoteType = {
  id: string,
  text: string,
  author: string,
  priority: Priority
};

export enum Color {
  high='#F4511E',
  medium='#FFEB3B',
  low='#4CAF50'
}
