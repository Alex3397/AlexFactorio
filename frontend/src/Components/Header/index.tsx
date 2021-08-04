import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import Moon from 'moon.svg';
import Sun from 'sun.svg';
import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      Hello World
      <span>
        alguma  outra coisa
      </span>
      <span>uma segunda coisa</span>
      <span>uma terceira coisa</span>
      <span>uma quarta coisa</span>
      <span>uma quinta coisa</span>
      <span>uma sexta coisa</span>
      <span>uma sabada coisa</span>
      <span>uma dominga coisa</span>
      <span>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secundary}
        />
      </span>
    </Container>
  );
};

export default Header;