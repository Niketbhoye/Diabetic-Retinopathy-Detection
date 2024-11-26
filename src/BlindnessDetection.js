import React, { useState } from "react";
import "./BlindnessDetection.css"; // Import the CSS file

function BlindnessDetection() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(""); // For displaying the uploaded image
  const [predictions, setPredictions] = useState({}); // Store predictions for all models

  // Handle image file selection
  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setImage(selectedFile);
      setImageUrl(URL.createObjectURL(selectedFile)); // Create a URL for the uploaded image
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Ensure that an image has been selected
    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      try {
        // Use the ngrok public URL instead of localhost
        const response = await fetch(
          "https://55da-34-70-161-158.ngrok-free.app/predict",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setPredictions({
            model1: data.prediction_model_1,
            model2: data.prediction_model_2,
            model3: data.prediction_model_3,
            model4: data.prediction_model_4,
          }); // Set the predictions for each model
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="blindness-detection-container">
      <h1 className="title">Diabetic Retinopathy System</h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="upload-section">
          <label htmlFor="image" className="upload-label">
            Upload Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            required
            className="file-input"
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>

      {/* Display the uploaded image and prediction results */}
      {imageUrl && (
        <div className="result-section">
          <h3>Uploaded Image:</h3>
          <img src={imageUrl} alt="Uploaded" className="uploaded-image" />

          {/* Display predictions in cards */}
          {Object.keys(predictions).length > 0 && (
            <div className="predictions-container">
              <div className="prediction-card">
                <h3>Model 1 (RestNet18) Prediction</h3>
                <p>{predictions.model1}</p>
              </div>
              <div className="prediction-card">
                <h3>Model 2 (restnet50) Prediction</h3>
                <p>{predictions.model2}</p>
              </div>
              <div className="prediction-card">
                <h3>
                  Model 3 <br />
                  (VGG) <br />
                  Prediction
                </h3>
                <p>{predictions.model3}</p>
              </div>
              <div className="prediction-card">
                <h3>Model 4 (Inception V3) Prediction</h3>
                <p>{predictions.model4}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default BlindnessDetection;
