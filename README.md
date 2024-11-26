# Diabetic Retinopathy Detection

## Overview
Diabetic Retinopathy is a severe complication of diabetes that can lead to vision loss if not detected early. This project leverages **Artificial Intelligence (AI)** and **Deep Learning** techniques to automate the detection of Diabetic Retinopathy using **fundus images**. It employs a custom **Convolutional Neural Network (CNN)** with **ResNet blocks** to provide accurate and efficient predictions.

## Features
- **Multi-Model Predictions**: Processes images through three machine learning models and displays predictions from each.
- **Image Preprocessing**: Resizes fundus images to (224, 224) for consistent input to the models.
- **Frontend-Backend Integration**: React.js frontend communicates with a Python backend hosted on Google Colab.
- **User-Friendly Interface**: Simple and intuitive web application for healthcare professionals and other users.

## Technology Stack
### Frontend
- **React.js**: For building a responsive and user-friendly web interface.

### Backend
- **Python**: Handles image preprocessing and model inference.
- **Flask**: REST API to serve the models and facilitate communication with the frontend.

### Machine Learning
- **TensorFlow/Keras**: Used for training and deploying the CNN models.
- **ResNet Architecture**: Improves feature extraction for enhanced prediction accuracy.

## How It Works
1. **Image Upload**: Users upload retinal fundus images via the frontend.
2. **Model Inference**: The backend processes the image and provides predictions from three pre-trained models.
3. **Result Display**: Predictions are displayed on the frontend for analysis and diagnosis.
4. **Diagnosis**: Helps in identifying the presence and severity of Diabetic Retinopathy.

## Data Pipeline
- **Input Data**: Fundus images of retinas from publicly available datasets.
- **Preprocessing**: Images are resized to (224, 224) and normalized.
- **Training**: A custom CNN with ResNet blocks is trained on labeled data.
- **Inference**: Models evaluate new images for Diabetic Retinopathy detection.

## Project Structure
Diabetic-Retinopathy-Detection/ ├── public/ ├── src/ │ ├── App.js │ ├── BlindnessDetection.js │ ├── Frame.js │ ├── Signup.js │ └── ... ├── backend/ │ ├── app.py │ ├── models/ │ │ ├── model1.h5 │ │ ├── model2.h5 │ │ └── model3.h5 │ └── utils.py ├── README.md ├── package.json └── ...


## Installation and Usage
### Prerequisites
- Node.js and npm installed for the frontend.
- Python 3.x and required dependencies for the backend.
- Pre-trained model files, e.g., `copy_of_retina_weights.keras`.

