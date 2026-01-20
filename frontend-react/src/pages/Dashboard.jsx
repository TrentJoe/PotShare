/**
 * Dashboard Page - Main expense tracking interface
 */
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { expenseService } from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState({ owes: 0, is_owed: 0, net_balance: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Form state
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    split_with: '',
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [expensesData, balanceData] = await Promise.all([
        expenseService.getExpenses(),
        expenseService.getBalance(),
      ]);
      setExpenses(expensesData);
      setBalance(balanceData);
      setError('');
    } catch (err) {
      setError('Failed to load dashboard data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      await expenseService.createExpense({
        description: formData.description,
        amount: parseFloat(formData.amount),
        split_with: formData.split_with,
      });

      // Reset form and reload data
      setFormData({ description: '', amount: '', split_with: '' });
      await loadDashboardData();
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to add expense');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (expenseId) => {
    if (!confirm('Are you sure you want to delete this expense?')) return;

    try {
      await expenseService.deleteExpense(expenseId);
      await loadDashboardData();
    } catch (err) {
      setError('Failed to delete expense');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome back, {user?.username}! 👋</h1>
        <p className="subtitle">Track your shared expenses and settle up</p>
      </div>

      {error && <div className="alert alert-error">{error}</div>}

      {/* Balance Cards */}
      <div className="balance-cards">
        <div className="balance-card card-owes">
          <div className="card-icon">💸</div>
          <div className="card-content">
            <p className="card-label">You Owe</p>
            <p className="card-amount">{formatCurrency(balance.owes)}</p>
          </div>
        </div>

        <div className="balance-card card-owed">
          <div className="card-icon">💰</div>
          <div className="card-content">
            <p className="card-label">You Are Owed</p>
            <p className="card-amount">{formatCurrency(balance.is_owed)}</p>
          </div>
        </div>

        <div className={`balance-card card-net ${balance.net_balance >= 0 ? 'positive' : 'negative'}`}>
          <div className="card-icon">{balance.net_balance >= 0 ? '✅' : '⚠️'}</div>
          <div className="card-content">
            <p className="card-label">Net Balance</p>
            <p className="card-amount">{formatCurrency(Math.abs(balance.net_balance))}</p>
            <small>{balance.net_balance >= 0 ? 'in your favor' : 'you owe'}</small>
          </div>
        </div>
      </div>

      {/* Add Expense Form */}
      <div className="add-expense-section">
        <h2>➕ Add New Expense</h2>
        <form onSubmit={handleSubmit} className="expense-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="e.g., Groceries, Dinner, Rent"
              />
            </div>

            <div className="form-group">
              <label htmlFor="amount">Amount (£)</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                min="0.01"
                step="0.01"
                placeholder="0.00"
              />
            </div>

            <div className="form-group">
              <label htmlFor="split_with">Split With (Username)</label>
              <input
                type="text"
                id="split_with"
                name="split_with"
                value={formData.split_with}
                onChange={handleChange}
                required
                placeholder="Enter username"
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Adding...' : 'Add Expense'}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Expenses List */}
      <div className="expenses-section">
        <h2>📋 Recent Expenses</h2>
        {expenses.length === 0 ? (
          <div className="empty-state">
            <p>No expenses yet. Add your first expense above! 🎉</p>
          </div>
        ) : (
          <div className="expenses-list">
            {expenses.map((expense) => (
              <div key={expense.id} className="expense-item">
                <div className="expense-main">
                  <div className="expense-info">
                    <h3>{expense.description}</h3>
                    <p className="expense-meta">
                      Paid by <strong>{expense.payer}</strong> • Split with <strong>{expense.split_with}</strong>
                    </p>
                    <p className="expense-date">{formatDate(expense.date)}</p>
                  </div>
                  <div className="expense-amount">
                    <p className="amount">{formatCurrency(expense.amount)}</p>
                    <p className="split">
                      You {expense.payer === user?.username ? 'are owed' : 'owe'}{' '}
                      {formatCurrency(expense.amount / 2)}
                    </p>
                  </div>
                </div>
                {expense.payer === user?.username && (
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(expense.id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
