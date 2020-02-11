from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/form')
def form():
	return render_template('form.html')

app.run("127.0.0.1", 4444, debug=True)
