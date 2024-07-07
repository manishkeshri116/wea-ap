// components/ErrorBoundary.js
import React, { Component } from 'react';
import { Alert } from '@mui/material';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Alert severity="error">
          There was an error loading weather data. Please try again later.
        </Alert>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
