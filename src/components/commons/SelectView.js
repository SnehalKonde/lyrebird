import React, { Component } from 'react';

class SelectView extends Component {
  constructor(props) {
      super();
      this.state = {
        setterValue: props.setterValue,
      };
      this.onChangeHandler.bind(this);
  }
  onChangeHandler(event){
      let value = event.target.value;
      this.setValue(value);
  }
  setValue(val) {
      this.setState({
          setterValue: val
      });
  }
  render() {

        const dropDownOptions = this.props.options && this.props.options.map((option) =>
			<option 
				key={option.id} 
				value={option.id}
				>{option.name}
			</option>
		);
		return (
            <select 
                className={this.props.className} 
                value={this.state.setterValue}
                disabled={(this.state.disabled === true || this.state.disabled === 'true') ? true : false} 
                onChange={(event) => this.onChangeHandler(event)}
                >
                <option>{this.props.placeholder}</option>
                {dropDownOptions}
            </select>
		);
  }
}

export default SelectView;