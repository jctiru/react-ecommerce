import React from "react";

import "./error-boundary.styles.scss";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    // Process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error-image-overlay">
          <div className="error-image-container"></div>
          <h2 className="error-image-text">Something went wrong :(</h2>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
