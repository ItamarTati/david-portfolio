import React, { Component } from 'react';
import './App.css';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';



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
          <h1>David Bud</h1>
          <h2>Game Designer</h2>
					<p>Hi my name is David, I am a Passionate Games Designer that uses C#, JavaScript and Unity. I enjoy learning and challenging myself to be a better designer</p>
          <p>If you're intrested in working with me please find contact details on the about me page</p> 

          {page === 1 ? <ul >
                            <li ><button>Game 1</button></li>
                            <li ><button onClick = {this.goToPageTwo}>Game 2</button></li>
                            <li ><button onClick = {this.goToPageThree}>Game 3</button></li>
                          </ul>: 
            page === 2 ? <ul >
                            <li ><button onClick = {this.goToPageOne}>Game 1</button></li>
                            <li ><button>Game 2</button></li>
                            <li ><button onClick = {this.goToPageThree}>Game 3</button></li>
                         </ul>:
                         <ul >
                            <li ><button onClick = {this.goToPageOne}>Game 1</button></li>
                            <li ><button onClick = {this.goToPageTwo}>Game 2</button></li>
                            <li ><button >Game 3</button></li>
                          </ul>} 
            
          {page === 1 && <PageOne  />}
            {page === 2 && <PageTwo  />}
            {page === 3 && <PageThree  /> }
            <button onClick = {this.prevPage}>previous page</button>
            <button onClick = {this.nextPage}>next page</button> 


        </div>
        
      );
    }
  }


  
  
  export default App;



