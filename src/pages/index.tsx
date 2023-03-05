import { Box } from '@chakra-ui/react';
import { withDefaultServerSideProps } from '@lib/props';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps = withDefaultServerSideProps({ secure: false });

const IndexPage: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Next.js Template</title>
        <meta name="description" content="Welcome" />
      </Head>
      <Box>Hello World</Box>
    </Box>
  );
};

export default IndexPage;
