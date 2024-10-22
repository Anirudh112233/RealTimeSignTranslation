import React, { useRef, useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import './App.css';
import About from './about'; // Import the About component

const App = () => {
  const webcamRef = useRef(null);
  const [capturedText, setCapturedText] = useState('No translation yet.');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const capture = useCallback(async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log('Captured image:', imageSrc);
      setLoading(true);
      setError(null);

      try {
        // Simulate a translation API call with a timeout
        // Replace this with your actual translation logic/API call
        const simulatedTranslation = await new Promise((resolve) =>
          setTimeout(() => resolve('Hello (simulated translation)'), 2000)
        );
        setCapturedText(simulatedTranslation);
      } catch (err) {
        setError('Failed to translate. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  }, [webcamRef]);

  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header className="app-header">
          <h1>Signify</h1>
          <button className="text-button">Text</button>
        </header>

        <Routes>
          {/* Main Page Route */}
          <Route
            path="/"
            element={
              <>
                <button
                  className="capture-button"
                  onClick={capture}
                  disabled={loading}
                >
                  {loading ? 'Translating...' : 'Translate'}
                </button>

                {/* Main Content */}
                <div className="main-content">
                  <div className="video-section">
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      width="100%"
                      height="100%"
                    />
                  </div>

                  <div className="output-section">
                    <h2>Translated Text:</h2>
                    {error ? (
                      <p className="error-message">{error}</p>
                    ) : (
                      <p>{capturedText}</p>
                    )}
                  </div>
                </div>
              </>
            }
          />

          {/* About Page Route */}
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Footer */}
        <footer className="app-footer">
          <Link to="/about">
            <button className="footer-button">About</button>
          </Link>
          <button className="footer-button">Settings</button>
        </footer>
      </div>
    </Router>
  );
};

export default App;
