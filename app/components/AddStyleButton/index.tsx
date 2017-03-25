import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';
import Icon from '../Icon'

import TooltipWrapper from '../TooltipWrapper';


interface Props{
  icon: string,
  styleType: string;
  active: boolean;
  size?: number;
  style?: any;
  label: string;
  onToggle(style: string)
};

class AddStyleButton extends React.Component<Props, null>{
  onMouseDown = e =>{
    e.preventDefault();
    this.props.onToggle(this.props.styleType);
  };
  render(){
    return(
      <TooltipWrapper label={this.props.label} >
        <Icon onMouseDown={this.onMouseDown} active={this.props.active} icon={this.props.icon}/>
      </TooltipWrapper>
    )
  }
}

export default AddStyleButton;