import { Agenda } from "@features/agendas/interfaces/agenda";

export interface Auditor{
  id: number,
  name: string,
  email: string,
  created_at: string,
  updated_at: string,
  agendas?: Agenda
}
