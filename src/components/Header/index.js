import React from 'react';

import { Container } from './styles';
import { FiMoon } from "react-icons/fi"

function Header({ toggleTheme }) {
  return (
    <Container>
        <h1>Where in the world?</h1>

        <button onClick={toggleTheme}>
            <FiMoon size={20}/>
            Dark Mode
        </button>
    </Container>
  );
}

export default Header;