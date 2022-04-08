import * as React from "react";
import { Component } from "react";

export default class SafeCompoennet extends Component {
  state: { hasError: boolean };
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {}

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <h1>Something went wrong..</h1>;
    }
    return this.props.children;
  }
}
