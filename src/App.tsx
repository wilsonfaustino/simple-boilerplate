import React from 'react'
import {
    Provider,
    defaultTheme,
    Button,
    View,
    Flex
} from '@adobe/react-spectrum'

function App() {
    return (
        <Provider theme={defaultTheme}>
            <View height='100vh' backgroundColor='indigo-400'>
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    height='100vh'
                >
                    <Button variant='cta' onPress={() => alert('Hey there!')}>
                        Hello React Spectrum!
                    </Button>
                </Flex>
            </View>
        </Provider>
    )
}

export default App
