import React, { Component } from 'react';
import Posts from './Components/posts.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      post: [], //array to hold the list of image "url" and "title"
      url: " ", //Storage for URL input event
      name: " ",//Storage for Title input event
    }
  }

//---------Storing values from url input field-----------------
  urlHandler = (e) => this.setState({url: e.target.value}) 

//---------Storing values from Title input field---------------
  nameHandler = (e) => this.setState({name: e.target.value})

//---------Handling Click operation of "Post" Button---------------
  postHandler()
  {
    let temp = Object.assign([], this.state.post)
    
    //---------checking input is a valid url and title is of length greater than 1------------------------------ 
    if(this.state.url.match(/[\w-]+\.jpeg|jpg|gif|png|svg|tiff|bmp/g) === null || this.state.url.match(/^(http|https|www)/) === null)
      alert("Enter valid image url")
    else if (this.state.name.length <= 1)
      alert("Enter valid Name for image")
    else 
      temp.push({url:this.state.url, name:this.state.name}) //pushing the values to array
    this.setState({post:temp}) //updating the state
  }

  render() {
    return (
      <div className="App">
      {/*-------------- Fixed input field URL, Title and Post Button ----------------*/}
        <div className="inputfield"><br/>
          <input className="urlInput" type="text" placeholder="Image URL" onChange={this.urlHandler.bind(this)}/><br/>
          <input className="aboutInput" type="text" placeholder="Title" onChange={this.nameHandler.bind(this)}/>
          <input className="post" type="button" value="New Post" onClick={this.postHandler.bind(this)}/>
        </div>
      {/*-------------- Rendering the posts containing Image and its Title ----------*/}  
        <div>
          {
            this.state.post.map((item) =>{ return (<div className="list"><Posts url={item.url} name={item.name}/></div>) })
          }
        </div>
      </div>
    );
  }
}

export default App;
