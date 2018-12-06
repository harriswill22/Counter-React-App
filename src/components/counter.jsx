import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag 1", "tag2", "tag3"]
  };
  styles = {
    fontSize: "10px",
    fontWeight: "bold"
  };

//   constructor(){
//       super();
//       this.handleIncrement = this.handleIncrement.bind(this);
      
//   }
  
  handleIncrement = () => {
    this.setState({count: this.state.count +1 })

  }

  doHandleIncrement = () => {
    this.handleIncrement({id: 1})
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no tags!</p>;

    return (
      <ul>
        <li>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </li>
      </ul>
    );
  }
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={ () => this.handleIncrement({id: 1})}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={this.handleDelete} className="btn btn-danger btn-sm m-2">Delete</button>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {/* {this.renderTags()} */}
      
      </div>
    );
  }

  getBadgeClasses() {
    let classes = " badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
