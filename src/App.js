import React, { Component } from 'react';
import './App.css';
import Data from './Data'
import Slide from './Slide'

let games = Data()
class App extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.goToPageOne = this.goToPageOne.bind(this);
        this.goToPageTwo = this.goToPageTwo.bind(this);
        this.goToPageThree = this.goToPageThree.bind(this);
        this.state = {
          page: 1,
        };
      }


      nextPage() {
        if(this.state.page < 3){
        this.setState({ page: this.state.page + 1 } )
      }
    else return null 
    }

      prevPage(){
        if(this.state.page !==1){
        this.setState({ page: this.state.page - 1 } )

      }
      else return null 

    }

      goToPageOne(){
        this.setState({ page: 1 } )

      }
      goToPageTwo(){
        this.setState({ page: 2 } )
      }
      goToPageThree(){
        this.setState({ page: 3 } )
      }
      

      

    render() {  
      const { page } = this.state;

        return (
          

          <div className = 'App' >
          <h1>{games.profile.name}</h1>
          <h2>{games.profile.title}</h2>
					<p>{games.profile.title}</p>

          {page === 1 ? <ul >
                            <li ><button>{games.gameOne.name}</button></li>
                            <li ><button onClick = {this.goToPageTwo}>{games.gameTwo.name}</button></li>
                            <li ><button onClick = {this.goToPageThree}>{games.gameThree.name}</button></li>
                          </ul>: 
            page === 2 ? <ul >
                            <li ><button onClick = {this.goToPageOne}>{games.gameOne.name}</button></li>
                            <li ><button>{games.gameTwo.name}</button></li>
                            <li ><button onClick = {this.goToPageThree}>{games.gameThree.name}</button></li>
                         </ul>:
                         <ul >
                            <li ><button onClick = {this.goToPageOne}>{games.gameOne.name}</button></li>
                            <li ><button onClick = {this.goToPageTwo}>{games.gameTwo.name}</button></li>
                            <li ><button >{games.gameThree.name}</button></li>
                          </ul>} 
            
            {page === 1 && <Page name={games.gameOne.name} description={games.gameOne.description} instructions={games.gameOne.instructions}/>} 
            {page === 2 && <Page  name={games.gameTwo.name} description={games.gameTwo.description} instructions={games.gameTwo.instructions}/>}
            {page === 3 && <Page  name={games.gameThree.name} description={games.gameThree.description} instructions={games.gameThree.instructions}/> }

            <button onClick = {this.prevPage}>previous page</button>
            <button onClick = {this.nextPage}>next page</button> 


        </div>
        
      );
    }
  }

function Page(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <Slide />
      <p>{props.instructions}</p>

    </div>
  )
}
  
  
  export default App;






