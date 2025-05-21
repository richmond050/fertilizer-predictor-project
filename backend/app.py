from flask import Flask, request, jsonify
import pickle
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import joblib
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# Load the saved model
with open('fertilizer_predictor_model.pkl', 'rb') as f:
    model = joblib.load('fertilizer_predictor_model.pkl')

# Load the saved scaler (assuming you saved it as 'scaler.pkl')
with open('scaler.pkl', 'rb') as f:
    scaler = pickle.load(f)

@app.route('/')
def home():
    return "Fertilizer demand prediction API is running."

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    
    # Extract features from input JSON
    year = data.get('Year')
    arable_land = data.get('Arable_Land_ha')
    crop_index = data.get('Crop_Production_Index')
    crop_index_per_ha = data.get('crop_Index_per_Ha')
    
    # Put features into a numpy array in the correct order
    features = np.array([[year, arable_land, crop_index, crop_index_per_ha]])
    
    # Scale features using the saved scaler
    features_scaled = scaler.transform(features)
    
    # Predict fertilizer demand using the model
    prediction = model.predict(features_scaled)
    
    # Return prediction as JSON
    return jsonify({'predicted_fertilizer_kg_per_ha': float(prediction[0])})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
