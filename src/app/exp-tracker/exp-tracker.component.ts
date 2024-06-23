import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-exp-tracker',
  templateUrl: './exp-tracker.component.html',
  styleUrl: './exp-tracker.component.css'
})
export class ExpTrackerComponent {


  expenseTitle:string="";
  expenseDate:Date=new Date();
  expenseAmount: any = ""; // Changed to 'any' to handle string initially
  totalAmount: any = "";   // Changed to 'any' to handle string initially
  remAmount:number=0;
  totalExpenses:number=0;

  selectedCategory: string = ""; // New property for selected category

  categories: string[] = ['Food', 'Travel', 'Shopping', 'Utilities', 'Others']; // List of categorie


  allExpenses:Expenses[]=[];

  addIncome(){

    const income = parseFloat(this.totalAmount.toString());
    if (!isNaN(income)) {
      this.remAmount += income;
    }

    this.totalAmount="";
  }

  createExpense(){

    const expenseAmount = parseFloat(this.expenseAmount);

      let expense: Expenses = {
        id: this.getRandomTaskId(),
        title: this.expenseTitle,
        date: this.expenseDate,
        expenseAmount: expenseAmount,
        category: this.selectedCategory, // Include category

      };

    if(this.remAmount>=this.expenseAmount && this.remAmount>0 && this.expenseAmount!=""){
      const income = parseFloat(this.expenseAmount.toString());
      this.allExpenses.push(expense);
      this.remAmount=this.remAmount - this.expenseAmount;

      if(!isNaN(income)){
        this.totalExpenses=this.totalExpenses + income;
      }

    }



    localStorage.setItem("allTaskStore",JSON.stringify(this.allExpenses));

    console.log(this.allExpenses);
    this.expenseTitle = "";
    this.expenseDate = new Date();
    this.expenseAmount = "";

    this.selectedCategory = ""; // Reset the category
}


  getRandomTaskId():string
  {

     const characterSet = "abcdefghijklmnopqrstuvwxyz1234567890";
     let result="";

    for(let i=0;i<5;i++)
      {

         result = result + characterSet.charAt(Math.floor(Math.random()*characterSet.length));
       }

     return result;
  }
}

interface Expenses{

  id:string,
  title:string,
  date:Date,
  expenseAmount:number,
  category: string,

}
