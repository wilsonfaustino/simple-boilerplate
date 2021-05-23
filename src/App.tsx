import React from 'react';
import {Provider, defaultTheme, Button, View} from '@adobe/react-spectrum';


function App() {
  return (
    <Provider theme={defaultTheme}>
      <View >
        <Button variant="cta" onPress={() => alert('Hey there!')}>
          Hello React Spectrum!
        </Button>
      </View>
    </Provider>
  );
}

export default App;
