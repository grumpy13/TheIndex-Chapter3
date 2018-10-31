import React, { Component } from "react";

class AuthorDetail extends Component {
  render() {
    let book = this.props.author.books.map(b => (
      <tr>
        <td>{b.title}</td>
        <td>I SHOULD BE A STRING OF THIS BOOK'S AUTHORS</td>
        <td>
          <button className="btn" style={{ backgroundColor: b.color }} />
        </td>
      </tr>
    ));

    return (
      <div className="author col-xs-10">
        <div>
          <h3>
            {this.props.author.first_name + " " + this.props.author.last_name}
          </h3>
          <img src={this.props.author.imageUrl} className="img-thumbnail" />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{book}</tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
