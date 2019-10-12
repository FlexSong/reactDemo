import React,{Component} from 'react'
import style from './App.less'
class App extends Component{
  constructor(){
    super()
    this.state={
      name:"S&Z",
      content:''
    }
  }
  clickChange(){
    this.setState({
      name:"xixi"
    })
    this.test.style.color='blue'
  }
  changeInput(e){
    this.setState({
      content:e.target.value,
    })
  }
  render(){
    return(
      <div>
        <h2 style={{color:'#CC6666'}} ref={dom =>this.test =dom}>{this.state.name}</h2>
        <button onClick={this.clickChange.bind(this)}>点击</button> <br/>

        <input type='text' onChange={this.changeInput.bind(this)}></input>
        <p className={style.firstP}>{this.state.content?this.state.content:"请输入内容"}</p>
        
      </div>
    )
  }
}

export default App
