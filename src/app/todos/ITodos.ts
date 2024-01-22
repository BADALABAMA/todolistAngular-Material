export interface ITodos {
  date: Date;
  id: number;
  description: string;
  status: Status;
}

export enum Status {
  done = 'done',
  inProgress = 'inProgress',
  ToDo = 'ToDo',
}
