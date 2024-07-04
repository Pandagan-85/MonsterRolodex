import { Component } from "react";
import "./App.css";
import Cardlist from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(risposta => risposta.json())
      .then(users =>
        this.setState(() => {
          return { monster: users };
        })
      );
  }

  onSearchChange = event => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monster, searchField } = this.state;
    const { onSearchChange } = this;
    const mostriFiltrati = monster.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className='App'>
        <h1 className='app-title'>Rolodex di mostri gattosi</h1>
        <SearchBox
          className='search-box-monster'
          onChangeHandler={onSearchChange}
          testoPlaceHolder='Cerca mostro'
        />

        <Cardlist monsters={mostriFiltrati} />
      </div>
    );
  }
}

export default App;
