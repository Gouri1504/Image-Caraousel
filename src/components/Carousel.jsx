import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(props){
    super(props)
    this.state={
        index:0

    }
  }
  render(){
    return(
        <div>
        <div className="bg"style={{backgroundImage:`url(${images[this.state.index].img})`}}>

        <div  className="left"
        onClick={()=>{
            this.state.index>0  &&this.setState({index:this.state.index-1});
        }} >
            <ArrowBackIosIcon style={{ fontSize: 30}}/></div>

        <div className="center">
            <h1 className="title">{images[this.state.index].title}</h1>
            <h1 className="subtitle">{images[this.state.index].subtitle}</h1>
        </div>

        <div className="right"
         onClick={()=>{
          this.state.index<2  &&this.setState({index:this.state.index+1});
          }} >

            < ArrowForwardIosIcon style={{ fontSize: 30}}/></div>
        </div>
        </div>
    )
    }
}

export default Carousel;