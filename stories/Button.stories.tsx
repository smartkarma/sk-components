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
      <Button text='Press me!'/>
      <Button centered text='Press me! centered'/>
      <Button rightAligned text='Press me! right-aligned'/>
    </Info>
  </>
));
