import { Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const ApplicationShell = ({ children }: PropsWithChildren<{ withLava?: boolean }>) => {
  return (
    <Flex direction={{ base: 'column', lg: 'row' }} w="full" minW="sm" h="100vh">
      <Flex as="main" direction="column" overflow="auto" w="full" h="full" p={['4', null, '8']}>
        {children}
      </Flex>
    </Flex>
  );
};

export default ApplicationShell;
