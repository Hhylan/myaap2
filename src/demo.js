
import React, {Component} from 'react';

import MathJax from './MathJax'

export  default  class Demo  extends Component {

  constructor (props){
     super(props);
     this.state={
      math:'When $a \\ne 0$, there are two solutions to \\(ax^2 + bx + c = 0\\)'
     }
  }

  handleChange = (e) => {
    this.setState({
      math: e.target.value
    })
  }

  render(){
    return(
      <div>
        <textarea
          row='10'
          cols='30'
          value={this.state.math}
          onChange={this.handleChange}>
        </textarea>

        <br/><br/>
          <MathJax  math={this.state.math}/>
      </div>
    )
  }

}