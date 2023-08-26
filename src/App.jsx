import { useEffect, useState } from 'react'
import './App.css'
import SearchBox from './components/SearchBox/SearchBox'
import CardList from './components/CardList/CardList';

function App () {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users))
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilterMonsters(filteredMonsters);

  }, [monsters, searchField])
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };


  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='monsters-search-box'
        handleOnChange={onSearchChange}
        placeholder='Search Monster'
      />

      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App
