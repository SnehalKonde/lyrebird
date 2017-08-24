import React, { Component } from 'react';

class SelectView extends Component {
  constructor(props) {
      super();
      this.options = props.options;
      this.label =  props.label;
      this.placeholder = props.placeholder;
      this.className = props.className;
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
        const dropDownOptions = this.options && this.options.map((option) =>
			<option 
				key={option.id} 
				value={option.id}
				selected={(this.state.setterValue === option.id) ? "selected" : false}
				>{option.name}
			</option>
		);
		return (
            <select 
                className={this.className} 
                value={this.state.setterValue}
                disabled={(this.state.disabled === true || this.state.disabled === 'true') ? true : false} 
                onChange={(event) => this.onChangeHandler(event)}
                >
                <option selected="selected">{this.placeholder}</option>
                {dropDownOptions}
            </select>
		);
  }
}

export default SelectView;