
interface IExpenseInfo {
  expenseName: string,
  payerId: string,
  cost: number,
}

export default async function addExpense(formData: FormData): Promise<void>{
  const expenseInfo: IExpenseInfo = {
    expenseName: formData.get('expenseName') as string,
    payerId: formData.get('payer') as string,
    cost: parseInt(formData.get('cost') as string),
  }
  if(expenseInfo.payerId == ""){
    return alert("Please choose the payer name!");
  }
} 