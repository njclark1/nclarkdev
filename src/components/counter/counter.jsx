import React, { Component } from "react";

//counter
class Counter extends Component {
  state = {
    count: this.props.value,
  };

  //  constructor() {
  //    super();
  //    this.handleIncrement = this.handleIncrement.bind(this);
  //  }

  handleIncrement = () => {
    console.log("Increment Clicked", this);
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    console.log("Increment Clicked", this);
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    let classes = this.formatBadge();

    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
      </div>
    );
  }

  formatBadge() {
    let classes = "badge bg-";
    classes +=
      this.state.count === 0
        ? "warning"
        : this.state.count > 0
        ? "primary"
        : "danger";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
