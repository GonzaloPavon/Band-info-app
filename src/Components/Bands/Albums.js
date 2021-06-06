//Frameworks
import React, { Component } from 'react';

//Main Component
class Albums extends Component {
  
  //RenderComponent
  render(){
    const albums  = this.props.albums;
    const loading = this.props.loading;
    if(loading) {
      return(
        <div  className="Table">
          <h4>Loading...</h4>
        </div>
      )
    }
    else{
      if (albums.length > 0) {
        return(
          <table  className="CardListTable">
            <thead>
              <tr>
                <th>Album name</th>
                <th>Release date</th>
              </tr>
            </thead>
            <tbody>
                {albums.map(album =>  {
                  return(
                    <tr key={album.name}>
                      <td>{album.name}</td>
                      <td>{album.year}</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        )
      }
      else {
        return(<div>Album not found</div>)
      }
    }
  }
}

export default Albums;
