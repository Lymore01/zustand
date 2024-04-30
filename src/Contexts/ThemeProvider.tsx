/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useThemeStore } from "../store/useStore";

export const ThemeProvider = ({ children }: any) => {
  const themeMode = useThemeStore((state) => state.themeMode);

  return <>{children}</>;
};
