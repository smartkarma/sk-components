import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from './Button';

const stories = storiesOf('Components.Button', module);

stories.add('Normal', () => <Button/>);
