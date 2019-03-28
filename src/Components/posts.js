import React from 'react';
import '../App.css';

//---------Stateless Component----------
const Posts = (props) =>{

	return(
		<div className="imageHolder">
			<br/><span>{props.name}</span><br/><br/> {/*----Title----*/}
			<img className="postImage" src={props.url} /> {/*-----image from the url------*/}
		</div>)

} 

export default Posts;