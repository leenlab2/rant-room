# main.py
from flask import Flask
from flask import url_for, render_template, request
from test_database import insert_user_message
import os

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/foo', methods=['POST'])
def foo():
    thoughts = request.form['thoughts']
    print(thoughts)
    insert_user_message(thoughts)
    return render_template('index.html')


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(port=port, debug=True, host='0.0.0.0')
