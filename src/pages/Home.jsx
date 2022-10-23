import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getAllCategories } from '../api';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';
// import { Search } from '../components/Search';

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [catalog, setCatalog] = useState([]);
  const [query, setQuery] = useState('');

  const searchCategory = searchParams.get('searching') || '';

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      // handleSubmit();
      const queryItem = event.target.value;
      setSearchParams({ searching: queryItem });
    }
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    const queryItem = event.target.value;
    setSearchParams({ searching: queryItem });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);

      // search && data.categories.filter((item) => item.strCategory.toLowerCase().includes(search.toLowerCase));

      // setFilteredCatalog(search ? data.categories.filter((item) => item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase)) : data.categories);
    });
  }, []);

  return (
    <>
      <div className='search-bar row'>
        <div className='input-field col s12'>
          <input
            type='search' //
            name='search'
            id='search'
            placeholder='search'
            value={query}
            // onChange={handleSubmit}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKey}
          />

          <button id='myButton' type='submit' value={query} className='search-btn btn-small orange' onClick={handleSubmit}>
            Search category
          </button>
        </div>
      </div>

      {/* <Search cb={handleSearch} /> */}
      {/* {!catalog.length ? <Preloader /> : <CategoryList catalog={filteredCatalog} />} */}

      {!catalog.length ? <Preloader /> : <CategoryList catalog={catalog.filter((searching) => searching.strCategory.toLowerCase().includes(searchCategory))} />}
    </>
  );
}

export { Home };
