import type { NextPage } from 'next'
import Head from 'next/head'
import { Center, Button, Icon, useColorMode, Box, Heading, Stack } from '@chakra-ui/react'
import { RiSunFill, RiMoonLine } from "react-icons/ri";



const Home: NextPage = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box>
      <Head>
        <title>NextJS - Template</title>
        <meta name="description" content="A NextJS Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center w="100%" h="100vh" align="center" justify='center'>
        <Stack align='center'>
          <Heading m={4} >I'm a template with NextJS + Chackra UI </Heading>
          <Button maxW={50}onClick={toggleColorMode}><Icon as={ colorMode === "light"  ? RiMoonLine : RiSunFill } /></Button>
        </Stack>
      </Center>
    </Box>
  )
}

export default Home
