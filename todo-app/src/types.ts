export interface iTodoItem {
  id: number;
  title: string;
  isDone: boolean;
  isUrgent: boolean;
}

export interface ItodoItemProps {
  todo: iTodoItem;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}
