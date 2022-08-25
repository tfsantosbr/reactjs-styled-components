import { ThemeProvider } from "styled-components";

import { Button } from "./components/Button";
import { ButtonWithStyledComponent } from "./components/ButtonWithStyledComponent";
import { ButtonWithThemedStyledComponent } from "./components/ButtonWithThemedStyledComponent";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/dark.theme";
import { defaultTheme } from "./styles/themes/default.theme";

export function App() {
  return (
    <>
      <h1>Standard Buttons</h1>
      <Button color="primary" />
      <Button color="secondary" />
      <Button color="danger" />
      <Button color="success" />
      <Button />

      <h1>Styled Component Buttons</h1>
      <ButtonWithStyledComponent variant="primary" />
      <ButtonWithStyledComponent variant="secondary" />
      <ButtonWithStyledComponent variant="danger" />
      <ButtonWithStyledComponent variant="success" />
      <ButtonWithStyledComponent />

      <h1>Themed Styled Component Buttons: Default Theme</h1>
      <ThemeProvider theme={defaultTheme}>
        <div className="wrapper">
          <ButtonWithThemedStyledComponent variant="primary" />
          <ButtonWithThemedStyledComponent variant="secondary" />
          <ButtonWithThemedStyledComponent variant="danger" />
          <ButtonWithThemedStyledComponent variant="success" />
          <ButtonWithThemedStyledComponent />
        </div>
        <GlobalStyle />
      </ThemeProvider>

      <h1>Themed Styled Component Buttons: Dark Theme</h1>
      <ThemeProvider theme={darkTheme}>
        <div className="wrapper">
          <ButtonWithThemedStyledComponent variant="primary" />
          <ButtonWithThemedStyledComponent variant="secondary" />
          <ButtonWithThemedStyledComponent variant="danger" />
          <ButtonWithThemedStyledComponent variant="success" />
          <ButtonWithThemedStyledComponent />
        </div>

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
