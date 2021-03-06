import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';

class App extends Component {
constructor(props){
  super(props);

  this.state={
    newItem: "",
    list: []
  }
}

updateInput(key, value){
  //update react state
  this.setState({
    [key]: value
  });
}
addItem(){
  //create item with unique id
  const newItem={
    id: 1 + Math.random(),
    value: this.state.newItem.slice()
  };

  //copy of current list off items
  const list = [...this.state.list];

  //add new item to list
  list.push(newItem);

  //update state with new list and reset newItem input
  this.setState({
    list, 
    newItem:""
  });
}

deleteItem(id){
  //copy current list of items
  const list = [...this.state.list];

  //filter out item being deleted
  const updatedList = list.filter(item => item.id != id)

  this.setState({list: updatedList})
}
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-6 mx-auto text-center">




        <div>
       <h1 className="">Make A List</h1>
        <br/>
        
        <input className="form-control"
          type="text"
          placeholder="Type item here..."
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}/>
          <button className="btn btn-secondary mt-3 btn-lg"
            onClick={() => this.addItem()}
            >
              Add
            </button>
            <br/>
            <ol>
              {this.state.list.map(item => {
                return(
                  <li key={item.id}>
                     <h4> {item.value} </h4>
                      <button className="btn btn-primary" onClick={() => this.deleteItem(item.id)}>  
                      X
                      </button>
                    </li>
                )
              })}

            </ol>
              </div>
        </div>
      </div>
              </div>
                </div>
    )
  }




}

export default App;

























// import React from 'react';


// function App() {
//   return (
//     <div className="App">
//      <h1>Hello World</h1>
//     </div>
//   );
// }

// export default App;
