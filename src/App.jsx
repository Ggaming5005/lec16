import React from "react";
import Form from "./component/Form";
import "./App.css";
import "./index.css";

const App = () => {
  return (
    <main className="app-container">
      <div className="content-container">
        <div className="text-section">
          <h1>
            Learn to code by <br /> watching others
          </h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable
          </p>
        </div>
        <div className="form-section">
          <div className="trial-banner">
            <p>
              <span>Try it free 7 days</span> then $20/mo. thereafter
            </p>
          </div>
          <Form />
        </div>
      </div>
    </main>
  );
};

export default App;
