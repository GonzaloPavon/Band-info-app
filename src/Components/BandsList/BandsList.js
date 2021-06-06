//Frameworks
import axios from 'axios';
import  React,  { useState, useEffect  } from  'react';

//Components
import  PaginationList  from  './PaginationList';
import  Bands  from  './Bands';

//Main Component
const BandsList = () =>  {

  //State
  const [bands, setBands] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [genreSelection, setGenreSelection] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [bandsPerPage] = useState(4);
  const [keyword, setKeyword] = useState('');

  //Functions
  useEffect(() => {
    const getBands = async () => {
      setLoading(true);
      const res = await axios.get(`https://my-json-server.typicode.com/improvein/dev-challenge/bands`);
      setBands(res.data);
      setLoading(false);
    };
    const getGenres = async () => {
      setLoading(true);
      const res = await axios.get(`https://my-json-server.typicode.com/improvein/dev-challenge/genre`);
      setGenres(res.data);
      setLoading(false);
    };
    getBands();
    getGenres();
  }, []);

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value)
    console.log(keyword);
    console.log(genreSelection);
  }
  const onInputChangeGenre = (e) => {
    setGenreSelection(e.target.value)
    console.log(genreSelection);
  }

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const indexOfLastBands = currentPage * bandsPerPage;
  const indexOfFirstBands = indexOfLastBands - bandsPerPage;
  const currentBands = bands.filter(band => band.name.includes(keyword) &&  band.genreCode.includes(genreSelection)).slice(indexOfFirstBands, indexOfLastBands);
    //RenderComponent
    return(
      <div  className="CardListScreen">
        <div  className="CardList">
          <div  className="CardListContainer">
            <div  className="CardListHeader">
              <input  type="text"
                      placeholder="Search bands ..."
                      onChange={onChangeKeyword}
                      className="SearchBar"/>
              <select onChange={onInputChangeGenre}>
                <option value={''}>Select genre</option>
                {genres &&
                genres.map((genre, i) => (
                  <option key={i} value={genre.code}>
                    {genre.name}
                  </option>
                ))}
              </select>
              <h4 className="CardListTitle">Bands:</h4>
            </div>
            <div  className="CardListBands">
              <Bands loading={loading}
                        bands={currentBands}/>
            </div>
            <div  className="CardListPagination">
              <PaginationList bandsPerPage={bandsPerPage}
                              totalBands={bands.length}
                              currentsBands={currentBands.length}
                              paginate={paginate}/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BandsList;
