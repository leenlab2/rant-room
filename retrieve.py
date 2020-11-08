"""
Test
"""
import psycopg2
from flask import Flask, render_template

app = Flask(__name__)
con = psycopg2.connect(database="suppliers", user="postgres", password="killua1304", host="localhost", port="5432")
cursor = con.cursor()


@app.route("/", methods=['post', 'get'])
def test():
    cursor.execute("select user_message from messages")
    result = cursor.fetchall()
    return render_template("Board.html", data=result)


if __name__ == "__main__":
    app.run(port=8080, debug=True)
