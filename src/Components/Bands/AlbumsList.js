//Frameworks
import axios from 'axios';
import  React,  { useState, useEffect  } from  'react';

//Components
import  Albums  from  './Albums';

//Main Component
const AlbumsList = (props) =>  {

  //State
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  //Functions
  useEffect(() => {
    const getAlbums = async () => {
      setLoading(true);
      const res = await axios.get(`https://my-json-server.typicode.com/improvein/dev-challenge/albums?bandId=`+props.idBand);
      setAlbums(res.data);
      setLoading(false);
    };
    getAlbums();
  }, []);
    //RenderComponent
    return(
      <div  className="PLScreen">
        <div  className="CardList">
          <div  className="CardListContainer">
            <div  className="CardListHeader">
              <h4 className="CardListTitle">Albums:</h4>
            </div>
            <div  className="Bands">
              <Albums loading={loading}
                      albums={albums}/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AlbumsList;
