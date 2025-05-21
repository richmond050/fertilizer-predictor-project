import React, { useState } from 'react';
import '../styles/FertilizerPrediction.css';

function FertilizerPrediction() {
  const [formData, setFormData] = useState({
    Year: '',
    Arable_Land_ha: '',
    Crop_Production_Index: '',
    crop_Index_per_Ha: '',
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const response = await fetch('https://fertilizer-predictor-project.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Year: Number(formData.Year),
          Arable_Land_ha: Number(formData.Arable_Land_ha),
          Crop_Production_Index: Number(formData.Crop_Production_Index),
          crop_Index_per_Ha: Number(formData.crop_Index_per_Ha),
        }),
      });

      if (!response.ok) throw new Error('API error');

      const data = await response.json();
      setPrediction(data.predicted_fertilizer_kg_per_ha);
    } catch (err) {
      setError('Failed to get prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fertilizer-prediction-container">
      <h2>Fertilizer Usage Prediction</h2>
      <form onSubmit={handleSubmit} className="fertilizer-form">
        <input 
          type="number" name="Year" placeholder="Year" value={formData.Year} onChange={handleChange} required 
        />
        <input 
          type="number" name="Arable_Land_ha" placeholder="Arable Land (ha)" value={formData.Arable_Land_ha} onChange={handleChange} required 
        />
        <input 
          type="number" name="Crop_Production_Index" placeholder="Crop Production Index" value={formData.Crop_Production_Index} onChange={handleChange} required 
        />
        <input 
          type="number" name="crop_Index_per_Ha" placeholder="Crop Index per Ha" value={formData.crop_Index_per_Ha} onChange={handleChange} required 
        />
        <button type="submit" disabled={loading}>{loading ? 'Predicting...' : 'Predict'}</button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {prediction !== null && <p className="prediction-result">Predicted Fertilizer Usage: <strong>{prediction.toFixed(3)} kg/ha</strong></p>}
    </div>
  );
}

export default FertilizerPrediction;
