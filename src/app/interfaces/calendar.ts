export interface Calendar {
  monthIntRef: number;
  month: string;
  days: { day: string; listFunci: any[]; weekday: string }[];
  updatedAt: any
}
