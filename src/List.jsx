import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component{
render() { 
    return(
            <ul>
                {this.props.items.map((e, index) => 
                <li className= 'list-group-item  list-group-item-action' key={index}>{e}</li>)}

            </ul>
    )
  }

}
List.propTypes = {
    items: PropTypes.array.isRequired
}
export default List;
