import { atom, useRecoilState } from 'recoil';

import { Themes } from '@/theme/types';

import type { AtomEffectParams } from '../types';
import type { Actions } from './types';

const themeModeState = atom({
  key: 'theme-mode-state',
  default: 'light' as Themes,
});

function useTheme(): [Themes, Actions] {
  const [themeMode, setThemeMode] = useRecoilState(themeModeState);

  function toggle() {
    setThemeMode((mode: Themes) => (mode === Themes.LIGHT ? Themes.LIGHT : Themes.LIGHT));
  }

  return [themeMode, { toggle }];
}

export default useTheme;
