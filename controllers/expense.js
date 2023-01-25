
const Expense = require('../models/expense');

exports.getExpenses = (req,res,next)=>{

    Expense.findAll()
    .then(Expenses => {
       res.json(Expenses);
    })
    .catch(err => console.log(err));
};

exports.postExpense = (req,res,next)=>{

    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;

    Expense.create({
        amount:amount,
        description:description,
        category:category
    })
    .then((results)=> {
        res.json(results);
    })
    .catch((err) =>console.log(err));
};

exports.deleteExpense = (req,res,next)=>{

     const id = req.params.ExpenseId;

     Expense.findByPk(id)
     .then(Expense => {
        return Expense.destroy();
     })
     .then((result) => {
        res.json({key:"successfully deleted"});
     })
     .catch(err => console.log(err))
}; 

exports.editExpense = (req,res,next) => {

    const id = req.params.ExpenseId;

    
}