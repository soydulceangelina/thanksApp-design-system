import React from 'react';
import ReactDOM from 'react-dom'
import {PrimaryButton, SecondaryButton, TertiaryButton} from './components/Buttons'
import { GlobalStyle } from './utils'
const App = () => (
    <div>
        <PrimaryButton>Hello world</PrimaryButton>
        <SecondaryButton>Hello world</SecondaryButton>
        <TertiaryButton disabled>Hello world</TertiaryButton>
        <GlobalStyle />
    </div>
)

ReactDOM.render(<App />, document.querySelector('#root'));