import { Auditor } from "@features/auditors/interfaces/auditor";
import { Task } from "@features/tasks/interfaces/task";

export interface Agenda{
  id: number,
  name: string,
  auditor: Auditor | null,
  created_at: Date,
  updated_at: Date,
  tasks?: Array<Task> | null
}
