import { useEffect, useState } from 'react'
import './App.css'
import SearchBox from './components/SearchBox/SearchBox'

function App () {
  const [searchField, setSearchField] = useState('');
  console.log(searchField);
  const [monsters, setMonsters] = useState([]);

  useEffect('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => setMonsters(users))

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  })

  return (
    <div>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='monsters-search-box'
        handleOnChange={onSearchChange}
        placeholder='Search Monster'
      />
    </div>
  )
}

export default App
