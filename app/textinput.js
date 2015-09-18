import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value};

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onChange(event.target.value);
  }

  render() {
    var value = this.state.value;
    return <input type="text" value={value} onChange={this.handleChange} />;
  }
};
