import { extendTheme, ThemeOverride } from '@chakra-ui/react';

import semanticTokens from './semantic-tokens';
import styles from './styles';

const overrides: ThemeOverride = {
  styles,
  semanticTokens,
  components: {},
};

export default extendTheme(overrides);
