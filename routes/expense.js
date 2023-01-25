const express = require('express');

const router = express.Router();

const expenseController = require('../controllers/expense');

router.get('/Expense/:ExpenseId',expenseController.deleteExpense);

router.get('/Expenses',expenseController.getExpenses);

router.post('/Expense',expenseController.postExpense);

router.get('/Editexpense/:ExpenseId',expenseController.editExpense);

module.exports = router;