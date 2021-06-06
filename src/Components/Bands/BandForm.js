//Frameworks
import React, { Component} from 'react';

//Main Component
class BandForm extends Component{
  
  //RenderComponent
  render(){
    return(
      <div className="HomeScreen">
        <div  className="CardList">
          <div  className="CardListContainer">
            <table  className="CardListTable">
              <thead>
                <tr>
                  <th>Band name:  </th><td>{this.props.name}</td>
                </tr>
                <tr><th>Genre:  </th><td>{this.props.genreCode}</td></tr>
                <tr><th>Year: </th><td>{this.props.year}</td></tr>
                <tr><th>Country:  </th><td>{this.props.country}</td></tr>
              </thead>
              <thead>
                <tr>
                  <th>Band members:</th>
                </tr>
              </thead>
              <tbody>
                  {this.props.members.map(member =>  {
                    return(
                      <tr key={member.name} id="MembersList">
                        <td>{member.name}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
export default BandForm;
