# Real-Time Sign Language Translation for Indian Sign Language (ISL)

# Project Overview
This project is aimed at developing a real-time translation tool for Indian Sign Language (ISL). The primary goal is to facilitate communication for the deaf and hard-of-hearing communities by converting ISL gestures into text. The project involves two main parts: frontend website development and machine learning model training.

## Features
- Real-Time Translation: Translates ISL gestures into text for easier communication.
- User-Friendly Interface: Intuitive design for capturing and translating sign language.
- ISL Specific: Designed to recognize Indian Sign Language gestures accurately.

## Project Structure
The project consists of two main sections:
1. Website Development
2. Model Training and Dataset Refining

### 1. Website Development
The frontend acts as the user interface, capturing gestures and displaying translations.

- **Technologies Used**: Built using HTML, CSS, JavaScript, and React.
- **Video Input Handling**: Captures video for sign language translation.
- **Frontend Components**: Includes language selection, video capture, and output display sections.
- **Navigation and Routing**: Supports page switching (e.g., "About" and "Settings").

### 2. Model Training and Dataset Refining
Machine learning model training focuses on recognizing gestures and converting them to text.

- **Dataset Collection**: Compiling a dataset specific to ISL gestures, including videos and images.
- **Data Preprocessing**: Enhancing data quality through cleaning and augmentation.
- **Model Architecture**: Using CNNs and LSTM networks for video-based recognition.
- **Training and Tuning**: Continuous refinement to improve performance and generalization.
- **Integration with Frontend**: Once trained, the model will be integrated for real-time translation.

## Current Status
- Frontend development is nearing completion.
- Dataset collection and model training are in progress.
- Backend integration will begin after model training.

## Future Work
- Backend Development: Implementing server-side logic.
- Model Optimization: Improving accuracy and reducing latency.
- User Testing: Collecting feedback for further improvements.
