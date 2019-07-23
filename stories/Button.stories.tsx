import { storiesOf } from '@storybook/react';
import React from 'react';
import Info from '../info';
import Button from './Button';

const stories = storiesOf('Components.Button', module);

stories.add('default', () => (
  <>
    <Info>
      <Button/>
    </Info>
  </>
));
