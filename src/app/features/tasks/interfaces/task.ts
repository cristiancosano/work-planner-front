
export interface Task{
  id: number,
  name: string,
  agenda: number,
  review: string | null,
  start_date: Date | null,
  end_date: Date | null,
  created_at: Date,
  updated_at: Date
}
