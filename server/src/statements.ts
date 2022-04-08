export interface iStatementInfo {
  id: number;
  statementPeriod: string;
  statementPayload: string;
}

export const statements = [
  {
    id: 1,
    statementPeriod: 'Jan-2020',
    statementPayload: 'abc',
  },
  {
    id: 2,
    statementPeriod: 'Feb-2020',
    statementPayload: 'def',
  },
  {
    id: 3,
    statementPeriod: 'Mar-2020',
    statementPayload: 'abc',
  },
];
