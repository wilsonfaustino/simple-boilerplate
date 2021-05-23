import React from 'react';
import {Provider, defaultTheme, Button, View, TextField} from '@adobe/react-spectrum';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const textState = atom({
    key: 'textState',
    default: ''
})
  
  function TextInput() {
    const [text, setText] = useRecoilState(textState);
  
    return (
      <View>
        <TextField label="Name" value={text} onChange={setText} />
        <br />
        Echo: {text}
      </View>
    );
  }

  const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(textState);
  
      return text.length;
    },
  });
  function CharacterCount() {
    const count = useRecoilValue(charCountState);
  
    return <>Character Count: {count}</>;
  }

function App() {
  return (
    <Provider theme={defaultTheme}>
      <View height='100vh' backgroundColor='indigo-400'>
        <TextInput />
        <CharacterCount />
        <br />
        <Button variant="cta" onPress={() => alert('Hey there!')}>
          Hello React Spectrum!
        </Button>
      </View>
    </Provider>
  );
}

export default App;
