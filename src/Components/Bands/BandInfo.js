//Frameworks
import React, { Component} from 'react';
import axios from 'axios'

//Components
import BandForm from  './BandForm';
import AlbumsList from  './AlbumsList';

//Main Component
class BandInfo extends Component{
  //State
  state = {
    name:  '',
    genreCode:'',
    year:0,
    country: '',
    members: [],
    _id:'',
    albums: []
  }

  //Functions
  async componentDidMount(){
    if(this.props.match.params.id){
      const res = await axios.get(`https://my-json-server.typicode.com/improvein/dev-challenge/bands/` + this.props.match.params.id);
      console.log(res.data)
      this.setState({
        name: res.data.name,
        genreCode: res.data.genreCode,
        year: res.data.year,
        country: res.data.country,
        members:res.data.members,
        _id: res.data.id,
       });
    }else{console.log('band not found');}
  }
  
  //RenderComponent
  render(){
    return(
      <div  className="BandInfoScreen">
        <BandForm
                name={this.state.name}
                genreCode={this.state.genreCode}
                year={this.state.year}
                country={this.state.country}
                members={this.state.members}
                />
        <AlbumsList idBand={this.props.match.params.id}/>
      </div>
    )
  }
}
export default BandInfo;
