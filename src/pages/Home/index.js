import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"

import { Container, Main } from './styles';

import { FiChevronDown } from "react-icons/fi"
import Header from "../../components/Header"

import api from "../../services/api"

function Home({ toggleTheme }) {
  const [allCountries, setAllCountries] = useState([])
  const [regionCountries, setRegionCountries] = useState([])
  const [selectedRegion, setSelectedRegion] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [inputCountries, setInputCountries] = useState([])

  const history = useHistory()

  function handleSubmit(name){
    history.push("/details", { name, })
  }

  function handleChangeOption(event){
    const region = event.target.value

    setSelectedRegion(region)
  }
 
  useEffect(() => {
      async function regionCountries(){
        await api.get(`region/${selectedRegion}`).then(response => {
            setRegionCountries(response.data)
      })
    }

    regionCountries()
  }, [selectedRegion])

  useEffect(() => {
    async function allCountries(){
        await api.get("all").then(response => {
            setAllCountries(response.data)
        })}
        allCountries()
  }, [])

    useEffect(() => {
      setInputCountries(allCountries.filter((data) => data.name.toLowerCase().indexOf(inputValue) !== -1))
    
    }, [inputValue, allCountries])

    
  
  
  return (
    <Container>
        <Header toggleTheme={toggleTheme}/>
        
        <Main>
            <div>
                <input type="text" placeholder="Search for a country" onClick={(e) => setInputValue(e.target.value.toLowerCase())}/>
                <div className="select">
                <select name="regions" id="region" value={selectedRegion} onChange={handleChangeOption}>
                    <option value="Africa">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <FiChevronDown />
                </div>
            </div>
            <div className="countries">
                {selectedRegion 
                
                ?(regionCountries.map(country => (
                    <button key={country.name} onClick={() => handleSubmit(country.name)}>
                        <img src={country.flag} alt=""/>
                        <h4>{country.name}</h4>

                        <p>Population: <b>{country.population}</b></p>
                        <p>Region: <b>{country.region}</b></p>
                        <p>Capital: <b>{country.capital}</b></p>
                    </button>
                ))) 
                
                :((inputValue  ? inputCountries : allCountries).map(country => (
                
                <button key={country.name} onClick={() => handleSubmit(country.name)}>
                    <img src={country.flag} alt=""/>
                    <h4>{country.name}</h4>

                    <p>Population: <b>{country.population}</b></p>
                    <p>Region: <b>{country.region}</b></p>
                    <p>Capital: <b>{country.capital}</b></p>
                </button>
            )))}
            </div>
        </Main>
    </Container>
  );
}

export default Home;