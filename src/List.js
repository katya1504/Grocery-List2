import { Component } from 'react';


export class List extends Component{
    state = {
 userInput: ' ',
 groceryList: []
        }

       onChangeEvent(e) {
        this.setState({userInput: e});
       }

       addItem(input){
        if(input === ''){
            alert('Добавь свое дело!')
        }
        else{
  let ListArray = this.state.groceryList;
ListArray.push(input);
this.setState({groceryList: ListArray, userInput: ''})
       }
    }

    deleteItem(){
        let ListArray = this.state.groceryList;  
        ListArray = [ ];
        this.setState({groceryList: ListArray})
    }

       crossedWord(event) {   
        const li = event.target;
        li.classList.toggle('cross');
       }

       onFormSubmit(e) {
        e.preventDefault();     
       }

      render(){
        return(
            <div className='container'>
            <form onSubmit={this.onFormSubmit}>   
            <div className='list'>
            <input type='text' placeholder='добавь дело' onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value={this.state.userInput}/>
            </div>

<div className='block'>
<button onClick ={()=>this.addItem(this.state.userInput)}>Добавь дело</button>
<button onClick={() => this.deleteItem()}>Удали дело</button>
</div>
</form>

<div  className='list'>
<ul>
    {this.state.groceryList.map((item, index) =>
<li onClick={this.crossedWord} key={index}>
    {item}
</li>
)}
</ul>
</div>
</div>
        )
      } 
}




export default List;