// import React from "react";
import React, { Component } from "react";
import './App.css';
import pictures from './pictures.json'
import Card from './components/Card/Card'
import Navbar from "./components/Navbar";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'




class App extends Component {
  state = {
    picture: pictures,
    playerScore: 0,
    topScore : 0
    // computerScore: 0

  }

  handleclick = (clicked, id) => {
    let currState = this.state.picture;
    currState[id].clicked = true;
    this.setState({ picture: currState });

    console.log("image clicked");
    console.log(id);
    console.log(clicked);
    console.log("playerscore: " + this.state.playerScore);

    if (clicked === true) {
      if (this.state.playerScore > this.state.topScore) 
      {
        let finalScore = this.state.playerScore;
        this.setState({
          topScore: finalScore,
          playerScore:0
          
        })
      alert("you got new highscore!")
      console.log("topscore" + this.state.topScore)
      ;
      this.shuffleData(this.state.picture)}
      else {
        alert("do better");
        this.shuffleData(this.state.picture);
        console.log("topscore" + this.state.topScore)

      } 

        
    } else {
      let newScore = this.state.playerScore + 1;
      this.setState({playerScore:newScore}) 
    }
    this.shuffleData(this.state.picture);
    this.setState({playerScore: this.state.playerScore});
    this.setState({topScore: this.state.topScore})


    // scoreChange();

  }

  // scoreChange = (playerScore, computerScore) => {
  //   // playerScore = 0;
  //   // computerScore = 0;
  //   if (clicked == true) {
  //     alert("you lost")
  //   } else {playerScore +=1}

  //   console.log("Player Score" + playerScore);
  //   console.log("Computer Score" + computerScore);
    

  //   // if (currState[id].clicked = true) {
  //   //   setState(computerScore) +=1
  //   // }

  // }

  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  render() {
//  <Navbar></Navbar>
    return (
    //  <Navbar/>
    // <div>
    <div>
    <Navbar
    playerScore = {this.playerScore}
    />
    <div>
    <Container>
                <Row>
      {this.state.picture.map(picture => (
        <Card 
        src={picture.src} 
        alt={picture.alt} 
        handleclick={this.handleclick} 
        key={picture.id} 
        id={picture.id} 
        clicked={picture.clicked} />
        ))}
        </Row>
        </Container>
 </div>
 </div>
    )
  }


}

export default App;
