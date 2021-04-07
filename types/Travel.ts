/* eslint-disable camelcase */

interface Travel {
  id: number;
  institution_id: number;
  institution_dependency_id: number | null;
  enabled: Boolean;
  marked: Boolean;
  name: string;
  officer_name: string;
  officer_position: string;
  destination: string;
  passage_amount: string;
  viatical_amount: string;
  expenses_amount: string;
  departure_date: string;
  return_date: string;
  objective: string;
  created_at: string;
  updated_at: string;
  observations: string;
  passage_payer: string|null;
  viatical_payer: string|null;
  expenses_payer: string|null;
  passage_payer_comments: string;
  viatical_payer_comments: string;
  expenses_payer_comments: string;
}

export default Travel
