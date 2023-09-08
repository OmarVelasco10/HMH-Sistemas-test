import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      purplePrimary: string;
      purpleSecondary: string;
      whitePrimary: string;
    };
  }
}
