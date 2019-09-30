import React, { Component } from 'react';
import './index.css';
import Data from './Data'

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
          

          <div className = 'main-page' >
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
            
            {page === 1 && <Page name={games.gameOne.name} description={games.gameOne.description} photos={games.gameOne.images} instructions={games.gameOne.instructions}/>} 
            {page === 2 && <Page  name={games.gameTwo.name} description={games.gameTwo.description} photos={games.gameTwo.images} instructions={games.gameTwo.instructions}/>}
            {page === 3 && <Page  name={games.gameThree.name} description={games.gameThree.description} photos={games.gameThree.images} instructions={games.gameThree.instructions}/> }

            <button onClick = {this.prevPage}>previous page</button>
            <button onClick = {this.nextPage}>next page</button> 


        </div>
        
      );
    }
  }

function Page(props){
  return (
    <div className = 'page'>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <div><Slider photos={props.photos}/></div>
      <p>{props.instructions}</p>

    </div>
  )
}
  

class Slider extends React.Component {  
  constructor(props) {
    super(props)

    this.state = {
      images: props.photos,
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0)
      return;
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {

    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
        </div>

        <LeftArrow
         goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
         goToNextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}


const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles}></div>
}




const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <i className='left'></i>
    </div>
  );
}


const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <i className='right'></i>
    </div>
  );
}
  
  export default App;






