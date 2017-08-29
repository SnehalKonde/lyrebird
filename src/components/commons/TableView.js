import React, { Component } from 'react';

class TableView extends Component {
  render() {
    const listingComponent = this.props.listingData.map((val) => 
      <tr>
        <td>{val.type}</td>
        <td>{val.tag}</td>
        <td>{val.path}</td>  
      </tr>
    )
    return(
      <table>
        {listingComponent}
      </table>
    );
  }
}

export default TableView;