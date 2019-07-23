import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, Colors, Info } from '../src';

const stories = storiesOf('Components', module);

stories.add('Button', () => (
  <>
    <Info title='Button' description='A standard button.'>
      <Button />
    </Info>
    <Info description='With the sorthand'>
      <Button text='Click me!' />
    </Info>
    <Info description='Customize the color'>
      <Button color={Colors.WHITE} textColor={Colors.PRIMARY} />
    </Info>
  </>
));
