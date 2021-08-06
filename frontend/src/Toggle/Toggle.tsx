import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { FaMoon, FaSun } from 'react-icons/fa';
import './Toggle.css'

interface Props {
  toggleTheme(): void;
}

const Toggle: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <>
      <Switch className="inner"
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={25}
        checkedHandleIcon={<FaMoon className="inner-icon" />}
        uncheckedHandleIcon={<FaSun className="inner-icon" />}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
        color={colors.text}
      />
    </>
  );
};

export default Toggle;