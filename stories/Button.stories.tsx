import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, Info } from '../src';

const stories = storiesOf('Components', module);

stories.add('Button', () => (
  <>
    <Info
      title='Button'
      description='This component allows you to use Button component with various types.'
    />
    <Info description='A standard button.'>
      <Button onPress={action('Button is pressed!')} text='Press me!'/>
      <Button onPress={action('Button is pressed!')} centered text='Press me! centered'/>
      <Button onPress={action('Button is pressed!')} rightAligned text='Press me! right-aligned'/>
    </Info>
    <Info description='A disabled button.'>
      <Button onPress={action('Button is pressed!')} disabled text='Press me!'/>
    </Info>
    <Info description='A hoverable button.'>
      <Button hoverable text='Press me!'/>
    </Info>
  </>
));
