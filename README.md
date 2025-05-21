# 🌾 Fertilizer Demand Predictor – Ghana

This project is a full-stack data science and web development application that predicts fertilizer usage (kg/ha) in Ghana based on agricultural indicators like crop production index and arable land.

- 🔗 **Live Web App:** [View on Netlify](https://fertilizer-usage-predictor.netlify.app)
- 🔗 **Backend API:** [View on Render](https://fertilizer-predictor-project.onrender.com)
- 📊 **Data Science Report:** [Add report link here]

---

## 📌 Project Overview

This app uses a machine learning model trained on Ghanaian agricultural data to predict fertilizer usage. It is built with:

- **Frontend:** React + Vanilla CSS
- **Backend:** Flask + Scikit-Learn
- **Deployment:** Netlify (Frontend) and Render (Backend)

Users input agricultural parameters and receive a real-time prediction of expected fertilizer needs.

---

## 🔍 Data Science

### ✔️ Dataset

The model is trained on a custom dataset that includes:
- Year
- Arable Land (ha)
- Crop Production Index
- Crop Index per Ha
- Fertilizer Usage (target variable)

### ✔️ Models Used
- Linear Regression
- Random Forest
- Support Vector Regression (SVR)

The final model was selected based on validation performance.

### ✔️ Preprocessing
- Feature scaling using `MinMaxScaler`
- Model persistence via `joblib` and `pickle`

### ✔️ Notebook
The full EDA, model training, and evaluation process can be found here: [📄 Fertilizer_Demand_Forecasting_Ghana.ipynb](#) *(Add link to notebook on GitHub)*

---

## 🖥 Web App (Frontend)

The React frontend allows users to:
- Enter relevant agricultural data
- Receive real-time fertilizer usage predictions
- Enjoy a clean, responsive UI

### 📂 Key Files
- `/src/components/FertilizerPrediction.jsx`: Main input and output logic
- `App.jsx`: Main routing structure

---

## ⚙️ Backend (Flask API)

The Flask server:
- Loads a pre-trained model and scaler
- Exposes a `/predict` endpoint
- Accepts JSON POST requests
- Returns fertilizer prediction in kg/ha

### 📂 Key Files
- `app.py`: Flask server with CORS
- `fertilizer_predictor_model.pkl`: Serialized ML model
- `scaler.pkl`: Serialized `MinMaxScaler`

---

## 🚀 Deployment

### ✅ Frontend (Netlify)
- React app is built and deployed via Netlify.
- Set `build` command to `npm run build`
- `publish` directory: `dist`

### ✅ Backend (Render)
- Flask backend deployed as a web service on Render
- Ensure `requirements.txt` exists
- Bind to `0.0.0.0` and use `port=os.environ.get("PORT", 5000)`

---

## 📦 Setup (Local Development)

### 1. Clone the repo
```bash
git clone https://github.com/your-username/fertilizer-predictor-app.git
cd fertilizer-predictor-app


