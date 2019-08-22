import { storiesOf } from '@storybook/react';
import React from 'react';
import { Info, Item, Text, Title } from '../src';

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
        subtitle={
          <Text>
            <Title.Subtitle hoverable>Equity Bottom-Up</Title.Subtitle>
            <Title.Subtitle> / </Title.Subtitle>
            <Title.Subtitle hoverable>Daniel Tabbush</Title.Subtitle>
          </Text>
        }
        title='John Doe'
      />
    </Info>
  </>
));
