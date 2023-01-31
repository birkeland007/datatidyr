from flask import Flask, request, jsonify, make_response
import pandas as pd
from flask_cors import CORS
import io
import os

from database.sheets import get_sheet_numbers, update_sheet_numbers

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    if not file:
        return jsonify({'error': 'No file provided'}), 400

    if file.filename.split('.')[-1] != 'csv':
        return jsonify({'error': 'Invalid file type'}), 400


    file_contents = file.read()
    df = pd.read_csv(io.StringIO(file_contents.decode()))
    file_size = len(file_contents)
    
    update_sheet_numbers(file_size)

    output = io.StringIO()
    df.to_csv(output,index=False)
    output.seek(0)

    response = make_response(output.getvalue())
    response.headers["Content-Disposition"] = "attachment; filename=data.csv"
    response.headers["Content-type"] = "text/csv"

    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'POST'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    
    return response

@app.route('/getstats', methods=['GET'])
def return_stats():
    stats = get_sheet_numbers()
    response = make_response(stats)
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response

if __name__ == '__main__':
    app.run(debug=True)
