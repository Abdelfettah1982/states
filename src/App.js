import './App.css';
import React, { Component } from "react";
import img from './image/jaabdel.png'
import logo from './logo.svg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Abdelfettah Jabri",
      bio: "Web developer",
      profession: "web developer engennering",
      imgSrc:img,
      hide: false,
      countshow: 0,
    };

    this.handleClick = () => {
      this.setState({ hide: !this.state.hide });
    };
  }
  render() {
    if (this.state.hide) {
      return (
        <div className="app">
          <div className="header-app">
            
                <>
                  
                
    <div className={App}>
      <header className="App-header">
     
     <p>  <img src={logo} className="App-logo" alt="logo" /></p> 
        
      
      </header><br/>

    </div>


                </>
              
             


 <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"  onClick={this.handleClick}>
                {this.state.hide ? "Show" : "Hide"}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>


              </button>
            
          </div>
        </div>
      );
    }else {
      return (
        
        <Profil
          {...this.state}
          click={this.handleClick}
          changeCounter={this.setState}
        />
      );
    }
  }
}
class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countshow: 0
    };
  }
  render() {
    return (
      
        <div className={App}>
      <header className="App-header">
     
     <p>  <img src={logo} className="App-logo" alt="logo" /></p> 
        
      
      </header><br/>

      <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full"
              
              src={this.props.imgSrc}
              alt="profilephoto"
            />
            <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2"><h1 style={{ color: "blue" }}>{this.props.fullName}</h1></div>
    </div>
                
    <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><h5>{this.props.profession}</h5></span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><h5>{this.props.bio}</h5></span>        
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><h5 style={{ color: "Blue" }}>
                  Mounted since: {this.state.countshow} s
                </h5></span>                    
                
                </div>
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={this.props.click}>
                {this.props.hide ? "Show" : "Hide"}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>

              </button>
          
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log("did mount");
    if (!this.props.hide) {
      setInterval(() => {
        this.setState({ countshow: this.state.countshow + 1 });
      }, 1000);
    }
  }
  }

export default App;
