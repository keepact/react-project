import React, { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import { ThemeContext } from 'styled-components';
import { ThemeContext as Context } from '../../shared/context/themeContext';

const ThemeSwitcher: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);
  const { setTheme: setThemeConfig, colorTheme } = useContext(Context); 

  const handleChangeTheme = (): void => {
    const theme = { colorTheme: colorTheme.title === 'light' ? dark : light };
    setThemeConfig({ colorTheme: theme.colorTheme, setTheme: () => theme });
  }
  
  return (
    <Switch
      onChange={handleChangeTheme}
      checked={title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      offColor={shade(0.15, colors.primary)}
      onColor={colors.secundary}
    />
  );
}

export default ThemeSwitcher;