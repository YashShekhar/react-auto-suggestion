import { useState } from 'react'
import './App.css'
import Autocomplete from './components/authocomplete'

function App() {

  const staticDate = [
    "apple",
    "banana",
    "berrl",
    "orange",
    "grape",
    "mango",
    "melon",
    "berry",
    "peach",
    "cherry",
    "plum"
  ]

  const fetchSuggestions = async (query) => {
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result.recipes;
  }

  return (
    <>
      <h1>Auto complete / Typeahead - Using React</h1>
      <Autocomplete 
        placeholder={"Enter Recipe"}
        // staticDate={staticDate}
        fetchSuggestions = {fetchSuggestions}
        dataKey = {"name"}
        customLoading = {<>Loading Recipes...</>}
        onSelect={(res) => console.log(res)}
        onChange={(input) =>{}}
        onBlur={(e) =>{}}
        onFocus={(e) =>{}}
        customStypes={{}}
      />
    </>
  )
}

export default App
