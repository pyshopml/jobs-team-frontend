import React, { Component } from 'react';
import css from './style.scss'


interface Props{
  resultLength: number
};
interface State{};

class PostsListHeader extends Component<Props, State> {
  render() {
    return (
       <div className={css.header}>
         <span>{this.props.resultLength} результатов</span>
         <div>
           Сортировать по:
         </div>
       </div>
    );
  }
}

export default PostsListHeader;