import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAuthor: {}
    };
    this.selectAuthor = this.selectAuthor.bind(this);
    this.reset = this.reset.bind(this);
  }
  selectAuthor(author) {
    this.setState({ currentAuthor: author });
  }

  currentView() {
    if (this.state.currentAuthor.first_name)
      return <AuthorDetail author={this.state.currentAuthor} />;
    else {
      return <AuthorsList authors={authors} selectAuthor={this.selectAuthor} />;
    }
  }

  reset() {
    this.setState({ currentAuthor: {} });
  }

  render() {
    console.log(this.state.currentAuthor);
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar reset={this.reset} />
          </div>
          <div className="content col-10">{this.currentView()}</div>
        </div>
      </div>
    );
  }
}

export default App;
