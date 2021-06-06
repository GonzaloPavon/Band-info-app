//Frameworks
import React, { Component } from 'react';
import  { NavLink } from 'react-router-dom';

//Main Component
class Bands extends Component {

  //RenderComponent
  render(){
    
    const bands  = this.props.bands;
    const loading = this.props.loading;

    if(loading) {
      return(
        <div  className="Loading">
          <h4>Loading...</h4>
        </div>
      )
    }
    else{
      return(
          <table  className="CardListTable">
            <thead>
              <tr>
                <th>Band name</th>
                <th>Genre</th>
                <th>Year</th>
                <th>Country</th>
                <th>Members</th>
                <th>More info</th>
              </tr>
            </thead>
            <tbody>
                {bands.map(band =>  {
                  return(
                    <tr key={band.name}>
                      <td>{band.name}</td>
                      <td>{band.genreCode}</td>
                      <td>{band.year}</td>
                      <td>{band.country}</td>
                      <td>{band.members.length}</td>
                      <td><NavLink to={"/band/" + band.id}  ><button>More info</button></NavLink></td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
      )
    }
  }
}

export default Bands;
