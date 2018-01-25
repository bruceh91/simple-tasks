class App extends Component {
    constructor(props) {
      super(props)
      this.state = {todos: [], todoValue: ''}
  
      this.addTodo = this.addTodo.bind(this)
      this.adjustValue = this.adjustValue.bind(this)
    }
  
    addTodo() {
      const {todos, todoValue} = this.state
      todos.push(todoValue)
      this.setState({todos})
    }
  
    adjustValue(e) {
      this.setState({todoValue: e.target.value})
    }
  
    render() {
      const {todos} = this.state
      return (
        <div className="App">
          <input type="text" id="balls" onChange={(e) => {this.adjustValue(e)}} />
          <button onClick={() => { this.addTodo() }}>POST</button>
          <div>
            {todos.map((todo) => (
              <div>{todo}</div>
            ))}
          </div>
        </div>
      );
    }
  }













//   import React from 'react';



// class App extends React.Component{
//     constructor(props){
//         super(props);

        
//         this.state = {
//             text: 'bo-bo', 
//             fullText: ['Your message should be here'], 
//             placeholder: 'Type Here',
//             loadedState: false,
//         }    
//     }

//     addValue(){
//         this.state.fullText.push('bo');

//     }

//     handleInput(e){
//         this.setState({text: e.target.value});
//     }

//     handleClick(e){
//         console.log('clicked');
//         this.addValue();
//     }

//         render(){
//             return (
//                 <React.Fragment>
//                     <h1>{this.state.fullText }</h1>
//                     <br />

//                     <input 
//                     type="text"
//                     onChange={(e) => {this.handleInput(e)}}
//                     placeholder={this.state.placeholder} />
//                     <br /><br />

//                     <button 
//                     onClick = {(e) => {this.handleClick(e)}}>Click here to post</button>
//                 </React.Fragment>
//             )
//         }


// }

// export default App;