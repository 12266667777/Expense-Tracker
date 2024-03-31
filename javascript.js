let expenses=[]
let totalAmount=0;
const categorySelection=document.getElementById("category-selection")
const amountInput=document.getElementById("amount-selection")
const dateInput=document.getElementById("date-selection")
const  addBtn=document.getElementById("but-add")
const expenceTbody=document.getElementById("expence-table-body")
const  totalAmountcell=document.getElementById("Total-amount")

adBtn.addEventListener('click',myFunction());
function myFunction()
{
    const category=categorySelection.value;
    const amount=Number(amountInput.value);
    const date=dateInput.value;
    expenses.push({category,amount,date})
    totalAmount+=amount;
    totalAmountcell.textContent=totalAmount;
    const newRow=expenceTbody.insertRow();
    const categoryCell=newRow.insertCell();
    const amountCell=newRow.insertCell();
    const datecell=newRow.insertCell();
    const deleteCell=newRow.insertCell();

    const deleteBtn=document.createElement("button");
     deleteBtn.textContent='Delete';
     deleteBtn.classList.add('delete-btn');
     deleteBtn.addEventListener('click',deleteFunction()){
        deleteFunction();
        const expense=expenses[expenses,length-1];
        categoryCell.textContent=expense.category;
        amountCell.textContent=expense.amount;
        datecell.textContent=expense.date;
        deleteCell.appendChild(deleteBtn)
     }
     function deleteFunction()
     {
         expenses.splioce(expenses.indexOf(expense),1);
          totalAmount-=expense.amount;
          totalAmountcell.textContent=totalAmount;

         expenceTbody.removeChild(newRow);
     }
}