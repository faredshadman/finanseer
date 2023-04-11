export interface ExpenseByCategory {
  salaries: number;
  supplies: number;
  services: number;
}
export interface Month {
  id: string;
  _id: string;
  month: string;
  revenue: number;
  expenses: number;
  operationalExpenses: number;
  nonOperationalExpenses: number;
}
export interface Day {
  date: string;
  expenses: number;
  id: string;
  _id: string;
  revenue: number;
}
export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
  totalProfit: number;
  totalExpenses: number;
  totalRevenue: number;
  expensesByCategory: ExpenseByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
}
