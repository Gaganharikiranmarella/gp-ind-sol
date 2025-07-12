import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <main className="projects-container">
      <h1>Our Projects</h1>

      {/* Project 1 */}
      <div className="project-card">
        <div className="project-text">
          <h2>Calendar Agent</h2>
          <p>
            Calendar Agent is an intelligent scheduling assistant designed to
            simplify event management. It allows users to book meetings,
            appointments, or reminders with ease, and uses AI to automatically
            notify them when the event date approaches. The agent ensures users
            never miss important tasks, adapts to scheduling preferences, avoids
            conflicts, and streamlines calendar operations across devices or
            platforms.
          </p>
          <p>
            <a
              href="https://github.com/Gaganharikiranmarella/Gaganharikiranmarella.ai/tree/main/calendar_agent"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View on GitHub
            </a>
          </p>
        </div>
      </div>

      <div className="red-divider"></div>

      {/* Project 2 */}
      <div className="project-card">
        <div className="project-text">
          <h2>Drone Strike Simulator</h2>
          <p>
            Drone Strike Simulator is a strategic simulation system that mimics
            military-grade drone targeting workflows. It allows users to select
            target coordinates using satellite imagery, simulating real-time
            drone strike decisions. The system integrates AI for marker
            detection, Google Maps for spatial visualization, and simulates
            strike execution with visual feedback. It is designed for research,
            training, or scenario planning in defense tech and strategic
            operations. .
          </p>
          <p>
            <a
              href="https://github.com/Gaganharikiranmarella/Gaganharikiranmarella.ai/tree/main/drone_strike_sim"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View on GitHub
            </a>
          </p>
        </div>
      </div>

      <div className="red-divider"></div>

      {/* Project 3: Calendar Agent */}
      <div className="project-card">
        <div className="project-text">
          <h2>Player Detection ML Model</h2>
          <p>
            Player detection ML model is a computer vision system designed to
            identify and track players in sports videos or live feeds. It uses
            machine learning techniques to detect player positions, classify
            team members, and follow movement patterns in real time. The model
            is often trained on labeled sports footage and integrated with
            analytics tools for performance tracking, tactical analysis, and
            automated highlight generation.
          </p>
          <p>
            <a
              href="https://github.com/Gaganharikiranmarella/Gaganharikiranmarella.ai/tree/main/player_detection_model"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View on GitHub
            </a>
          </p>
        </div>
      </div>

      <div className="red-divider"></div>

      <div className="project-card">
        <div className="project-text">
          <h2>Face Description Analyzer</h2>
          <p>
            Face description analyzer is an AI system that analyzes human faces
            to generate descriptive attributes such as age, gender, emotion, and
            facial features. It uses deep learning models trained on large
            facial datasets to extract visual cues and convert them into
            meaningful text-based outputs. This tool is useful in surveillance,
            accessibility tech, interactive applications, and personalized user
            experiences.
          </p>
          <p>
            <a
              href="https://github.com/Gaganharikiranmarella/Gaganharikiranmarella.ai/tree/main/face_description_analyser"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View on GitHub
            </a>
          </p>
        </div>
      </div>

      <div className="red-divider"></div>

      <div className="project-card">
        <div className="project-text">
          <h2>3D Image Viewer</h2>
          <p>
            Gesture 3D viewer is an interactive system that allows users to
            control and manipulate 3D objects using hand gestures. It leverages
            real-time gesture recognition, typically using AI models and
            computer vision libraries like MediaPipe or OpenCV, to detect hand
            movements and convert them into commands such as rotate, zoom, or
            color change. The system enables touchless control, making it ideal
            for virtual demos, education, and immersive design environments.
          </p>
          <p>
            <a
              href="https://github.com/Gaganharikiranmarella/Gaganharikiranmarella.ai/tree/main/gesture_3d_viewer"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View on GitHub
            </a>
          </p>
        </div>
      </div>

      <div className="red-divider"></div>

      <div className="project-card">
        <div className="project-text">
          <h2>Persona Chatbot</h2>
          <p>
            Persona chatbot uses the af1tang/personaGPT model, a fine-tuned
            version of GPT designed to maintain consistent personalities during
            conversations. It enables the bot to role-play specific characters,
            respond with emotionally aware messages, and provide contextually
            rich, coherent dialogue. This makes it especially effective for
            applications like therapist bots, virtual companions, or
            personalized learning assistants, where user trust and empathy are
            essential.
          </p>
          <p>
            <a
              href="https://github.com/Gaganharikiranmarella/Gaganharikiranmarella.ai/tree/main/persona_chatbot"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View on GitHub
            </a>
          </p>
        </div>
      </div>

      <div className="red-divider"></div>

      <div className="project-card">
        <div className="project-text">
          <h2>Sign To Speech Translator</h2>
          <p>
            Sign to speech translator is an AI-based system that converts hand
            signs into spoken language. It uses computer vision to recognize
            sign gestures in real time, typically leveraging models like
            MediaPipe or custom-trained neural networks. Once a gesture is
            identified, the corresponding text is generated and passed through a
            text-to-speech engine to produce audible speech. This system aids
            communication for the hearing and speech impaired, enabling more
            inclusive and accessible interactions.
          </p>
          <p>
            <a
              href="https://github.com/Gaganharikiranmarella/Gaganharikiranmarella.ai/tree/main/sign_to_speech_translator"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View on GitHub
            </a>
          </p>
        </div>
      </div>

      <div className="red-divider"></div>
    </main>
  );
};

export default Projects;
