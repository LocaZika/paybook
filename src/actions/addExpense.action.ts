
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
  const postExpense = await fetch(`${process.env.NEXT_PUBLIC_HOST}/users`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(expenseInfo),
  });
  console.log(process.env.NEXT_PUBLIC_HOST);
  
  const res = await postExpense.json();
  return res;
} 