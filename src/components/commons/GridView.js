import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'

class GridView extends Component {
  render() {
    const listingComponent = this.props.listingData.map((val) => 
      <tr>
        <td>{val.type}</td>
        <td>{val.tag}</td>
        <td>{val.path}</td>  
      </tr>
    )
    return(
      <Grid striped bordered condensed hover>
        <tbody>
            {listingComponent}
        </tbody>
      </Grid>
    );
  }
}

export default GridView;