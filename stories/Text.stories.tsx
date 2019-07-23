import { storiesOf } from '@storybook/react';
import React from 'react';
import { Info, Text } from '../src';

const stories = storiesOf('Components', module);

stories.add('Text', () => (
  <>
    <Info title='Text' description='A standard text.'>
      <Text>Typography</Text>
    </Info>
  </>
));
