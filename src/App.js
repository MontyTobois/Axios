import React, { Component } from 'react';
import Title from './Components/Title';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0,10)
      })
    })
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className = 'post-card' key ={post.id}>
            <div className = 'card-content'>
              <span className = 'card-title'>{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className='center'>No post yet</div>)

    return (
      <div className="App">
        <div className = "Header">
          <Title />
        </div>
        <br />
          {postList}
      </div>
    );
  }
}

export default App;
