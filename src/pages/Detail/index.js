import React, { useEffect, useState } from 'react';
import { useLocation, Link } from "react-router-dom"

import { Container, Main } from './styles'; 
import { FiArrowLeft } from "react-icons/fi"

import Header from "../../components/Header"
import api from "../../services/api"

function Detail({ toggleTheme }) {
  const [countryName, setCountryName] = useState("")
  const [country, setCountry] = useState([])

  const location = useLocation()

  async function borderCountry(name){
    await api.get(`alpha?codes=${name}`).then(response => {
      setCountry(response.data)
    })
  }

  useEffect(() => {
    setCountryName(location.state.name)

    api.get(`name/${countryName}`).then(response => {
      setCountry(response.data)
    })
  }, [countryName, location.state.name])

  return (
      <Container>
        <Header toggleTheme={toggleTheme}/>

        <Link to="/">
          <FiArrowLeft size={20}/>
          <p>Back</p>
        </Link>

        <Main>
          {country.map(data => (
            <>
              <img src={data.flag} alt="bandeira" key={data.name}/>

              <div>
                <ul>
                  <h1>{data.name}</h1>
                  <p>Native language:<b>{data.name}</b></p>
                  <p>Population:<b>{data.population}</b></p>
                  <p>Region:<b>{data.region}</b></p>
                  <p>Sub Region:<b>{data.subregion}</b></p>
                  <p>Capital:<b>{data.capital}</b></p>
                
                  <ul className="borders">Border countries: 
                    {data.borders.map(border => (
                      <button key={border} onClick={() => borderCountry(border)}>{border}</button>
                    ))}
                  </ul>
                </ul>
                
                <ul className="second">
                  <p>Top level Domain:{data.topLevelDomain.map(domain => (
                    <b key={domain}>{domain}</b>
                  ))}</p>
                  <p>Currencies:{data.currencies.map(currency => (
                    <b key={currency.code}>{currency.code}</b>
                  ))}</p>
                  <p>Languages:{data.languages.map(language => (
                     <b key={language.name}>{language.name}</b>
                  ))}</p>
                </ul>
              </div>
            </>
          ))}
        </Main>
      </Container>
  );
}

export default Detail;