import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Colors, Info, Item, Text, Title } from '../src';

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
            <Title.Subtitle hoverable>IPOs & Placements</Title.Subtitle>
            <Title.Subtitle> / </Title.Subtitle>
            <Title.Subtitle hoverable>John Doe</Title.Subtitle>
          </Text>
        }
        title={
          <Title hoverable color={Colors.BEARISH_RED}>Topsports International</Title>
        }
      />
      <Item
        metadata='20 Aug 2019 17:53'
        subtitle={
          <Text>
            <Title.Subtitle hoverable>IPOs & Placements</Title.Subtitle>
            <Title.Subtitle> / </Title.Subtitle>
            <Title.Subtitle hoverable>John Doe</Title.Subtitle>
          </Text>
        }
        title={
          <Title onPress={() => action('Title pressed')} hoverable color={Colors.BULLISH_GREEN}>Soilbuild Business Space Reit</Title>
        }
      />
    </Info>
  </>
));
