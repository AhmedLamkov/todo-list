export interface TodoItem {
  id: string;
  name: string;
  completed?: boolean;
}

export enum Filter {
  ALL = 'All',
  ACTIVE = 'Active',
  COMPLETED = 'Completed',
}