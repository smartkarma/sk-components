import { storiesOf } from '@storybook/react';
import React from 'react';
import Text from './Text';

const stories = storiesOf('Components.Text', module);

stories.add('Normal', () => <Text>This is text</Text>)
