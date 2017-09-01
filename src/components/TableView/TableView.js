import React, { Component } from 'react';
import './table.scss'

class TableView extends Component {
  render() {
    let listingComponent = this.props.listingData.map((val) =>
      <tr>
        <td>{val.methodType}</td>
        <td>{(val.tags) ? val.tags[0] : ''}</td>
        <td>{val.path}</td>
      </tr>
    )
    if(this.props.listingData.length === 0){
      listingComponent = <tr><td>No Data To Display</td><td></td><td></td></tr>
    }
    return(
      <table className="table table-bordered table-responsive table-striped">
        <thead>
            <tr>
                <th>Type</th>
                <th>Tag</th>
                <th>Path</th>
            </tr>
        </thead>
        <tbody>
            {listingComponent}
        </tbody>
      </table>
    );
  }
}

export default TableView;
