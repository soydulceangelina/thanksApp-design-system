import React from 'react';
import ReactDOM from 'react-dom'
import {PrimaryButton, SecondaryButton, TertiaryButton} from './components/Buttons'

const App = () => (
    <div>
        <PrimaryButton>Hello world</PrimaryButton>
        <SecondaryButton>Hello world</SecondaryButton>
        <TertiaryButton>Hello world</TertiaryButton>
    </div>
)

ReactDOM.render(<App />, document.querySelector('#root'));