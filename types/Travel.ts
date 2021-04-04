/* eslint-disable camelcase */

interface Travel {
  id: Number;
  institution_id: Number;
  institution_dependency_id: Number|null;
  enabled: Boolean;
  marked: Boolean;
  name: String;
  officer_name: String;
  officer_position: String;
  destination: String;
  passage_amount: String;
  viatical_amount: String;
  expenses_amount: String;
  departure_date: String;
  return_date: String;
  objective: String;
  created_at: String;
  updated_at: String;
  observations: String;
  passage_payer: String|null;
  viatical_payer: String|null;
  expenses_payer: String|null;
  passage_payer_comments: String;
  viatical_payer_comments: String;
  expenses_payer_comments: String;
}

export default Travel
