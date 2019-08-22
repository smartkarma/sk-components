import { storiesOf } from '@storybook/react';
import React from 'react';
import { Info, Item } from '../src';

const stories = storiesOf('Components', module);

stories.add('Item', () => (
  <>
    <Info
      title='Item'
      description='This component allows you to use Item component with various types.'
    />
    <Info description='A standard item.'>
      <Item
        metadata='20 Aug 2019 17:53'
        subtitle='Thematic & Strategy / Technology'
        title='John Doe'
      />
    </Info>
  </>
));
