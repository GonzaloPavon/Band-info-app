//Frameworks
import React, { Component } from 'react';

//Main Component
class PaginationList extends Component {
  
  //RenderComponent
  render(){
    const numberOfPages =  [];
    for(let i = 1; i <= Math.ceil(this.props.totalBands  / this.props.bandsPerPage); i++){
      numberOfPages.push(i);
    }
    return(
      <div  className="Pagination">
        <ul>
          {numberOfPages.map( number =>  {
            return(
              <li key={number}>
                <button onClick={()=> this.props.paginate(number)}>
                  {number}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default PaginationList;
