from flask import Blueprint, render_template, request, redirect, url_for, flash
from app.db import *
from flask import session


main = Blueprint('main', __name__)

# Home Page
@main.route('/')
def home():
    user_id = session.get("user_id")
    if not user_id:
        return redirect(url_for('main.login'))


    user_owes = calculate_user_owes(user_id)
    user_is_owed = calculate_user_is_owed(user_id)
    expenses = get_latest_expenses(user_id)

    return render_template("home.html",
                           user_owes=user_owes,
                           user_is_owed=user_is_owed,
                           expenses=expenses)

# Groups Page
@main.route('/groups')
def groups():
    return render_template('groups.html')

# Notifications Page
@main.route('/notifications')
def notifications():
    return render_template('notifications.html')

# Friends Page
@main.route('/friends')
def friends():
    return render_template('friends.html')

# Login Page
@main.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        user = validate_login(username, password)

        if user:
            session['user_id'] = user['id']
            session['username'] = user['username']
            flash('Logged in successfully!', 'success')
            return redirect(url_for('main.home'))
        else:
            flash('Invalid username or password.', 'error')

    return render_template('login.html')

@main.route('/logout')
def logout():
    session.clear()
    flash('Logged out successfully!', 'info')
    return redirect(url_for('main.login'))

@main.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        if create_user(username,password):
            flash('Account created! You can nopw log in.','success')
            return redirect(url_for('main.login'))
        else:
            flash('Username already taken.', 'error')
    return render_template('register.html')


# Add Expense (Handle form submission)
@main.route('/add-expense', methods=['POST'])
def add_expense():
    user_id = session.get("user_id")
    if not user_id:
        return redirect(url_for('main.login'))
    
    # Extract form data and process it
    description = request.form.get('description')
    amount = request.form.get('amount')
    group = request.form.get('group')
    split_with = request.form.get('split_with')
    date = request.form.get('date')

    if not description or not amount or not date:
        flash('Please fill in all required fields.', 'error')
        return redirect(url_for('main.home'))

    add_expense_to_db(description, float(amount), group, split_with, date, user_id)

    # Placeholder for saving logic
    flash('Expense added successfully!', 'success')
    return redirect(url_for('main.home'))