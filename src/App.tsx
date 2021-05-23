import React from 'react';
import {Provider, defaultTheme, Button, View, TextField} from '@adobe/react-spectrum';


function App() {
  return (
    <Provider theme={defaultTheme}>
      <View height='100vh' backgroundColor='indigo-400'>
        <Button variant="cta" onPress={() => alert('Hey there!')}>
          Hello React Spectrum!
        </Button>
      </View>
    </Provider>
  );
}

export default App;
