export type MsgType = 'warning' | 'normal';

export interface IEvent {
  message: string;
  label?: string;
  action?: () => void;
}
export interface IUser {
  auth_token: string
}
export interface INewVacancy{
  title: string,
  description: any,
  salary_min: number,
  salary_max: number,
  location: {
    country: string,
    city: string
  },
  busyness: number,
  remote_work: boolean,
  keywords: string[],
  category: number,
}
export interface INotification{
  message: string;
  type: MsgType;
  hideDuration?: number;
  action?: {
    label: string,
    onClick: () => void;
  }
}