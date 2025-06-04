from flask import Blueprint, render_template, request, redirect, url_for, flash

main = Blueprint('main', __name__)

# Home Page
@main.route('/')
def home():
    return render_template('home.html')

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
        # Add authentication logic here
        flash('Logged in successfully!', 'success')
        return redirect(url_for('main.home'))
    return render_template('login.html')

# Add Expense (Handle form submission)
@main.route('/add-expense', methods=['POST'])
def add_expense():
    # Extract form data and process it
    description = request.form.get('description')
    amount = request.form.get('amount')
    group = request.form.get('group')
    split_with = request.form.get('split_with')
    date = request.form.get('date')

    # Placeholder for saving logic
    flash('Expense added successfully!', 'success')
    return redirect(url_for('main.home'))