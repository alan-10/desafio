import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch'
import { shade } from 'polished';
import { Container } from './styles';

interface Props {
  toggleTheme():void;
}

const Header:React.FC<Props> = ({ toggleTheme }) => {

  const { colors, title } = useContext(ThemeContext);
  

  return (
    <Container>
      <h4>Tahnamao</h4>

    <Switch
      onChange={toggleTheme}
      checked={title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      onColor={colors.secondary}
      offColor={shade(0.1, colors.primary)}
    />

    </Container>
  );
};

export default Header;