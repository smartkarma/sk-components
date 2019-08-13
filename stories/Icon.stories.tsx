import { storiesOf } from '@storybook/react';
import React from 'react';
import { Info } from '../src';

const stories = storiesOf('Components', module);

stories.add('Icon', () => (
  <>
    <Info
      title='Icon'
      description='This component allows you to use Icon component with various types.'
    />
    <Info description='A standard icon.'>

    </Info>
  </>
));
