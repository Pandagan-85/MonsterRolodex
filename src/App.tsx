import "./App.css";
import { useState, useEffect, ChangeEvent } from "react";
import Cardlist from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState("");

  const [title, setTitle] = useState("");

  const [monsters, setMonsters] = useState<Monster[]>([]);

  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  //const [stringField, setStringField] = useState("");

  console.log("render");

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(risposta => risposta.json())
    //   .then(users => setMonsters(users));

    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
    console.log("effect is firing");
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

  // const onStringChange = event => {
  //   setStringField(event.target.value);
  // };

  return (
    <div className='App'>
      {/* <h1 className='app-title'>Rolodex di mostri gattosi</h1> */}
      <h1 className='app-title'>{title}</h1>
      <SearchBox
        className='search-box-monster'
        onChangeHandler={onSearchChange}
        testoPlaceHolder='Cerca mostro'
      />
      <br />
      <SearchBox
        className='search-box-monster'
        onChangeHandler={onTitleChange}
        testoPlaceHolder='Scrivi titolo'
      />
      {/* <SearchBox
        className='search-box-monster'
        onChangeHandler={onStringChange}
        testoPlaceHolder='Set string'
      /> */}
      <Cardlist monsters={filteredMonsters} />
    </div>
  );
};

export default App;
