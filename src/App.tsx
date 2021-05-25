import React from 'react'
import { Provider, defaultTheme, View, Flex } from '@adobe/react-spectrum'
import Main from './components/Main'

function App() {
    return (
        <Provider theme={defaultTheme} colorScheme='dark'>
            <View height='100vh' backgroundColor='gray-100'>
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    height='100vh'
                >
                    <Main
                        title='X Story'
                        subtitle='a very difficult to build boilerplate'
                    />
                </Flex>
            </View>
        </Provider>
    )
}

export default App
