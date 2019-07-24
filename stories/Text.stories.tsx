import { storiesOf } from '@storybook/react';
import React from 'react';
import { Info, Text } from '../src';
import { Fonts, Sizes } from '../src/constants';

const stories = storiesOf('Components', module);

stories.add('Text', () => (
  <>
    <Info
      title='Text'
      description='This component allows you to use Text component with Roboto or PT Serif font-family.'
    />
    <Info description='A standard text.'>
      <Text>This is text</Text>
    </Info>
    <Info description='A disabled text.'>
      <Text disabled>Disabled text</Text>
    </Info>
    <Info description='A hoverable text.'>
      <Text hoverable>This text is hoverable on the web</Text>
    </Info>
    <Info description='Type and weight.'>
      <Text weight={100}>Typography Roboto Thin</Text>
      <Text weight={300}>Typography Roboto Light</Text>
      <Text weight={400}>Typography Roboto Regular</Text>
      <Text weight={500}>Typography Roboto Medium</Text>
      <Text weight={700}>Typography Roboto Bold</Text>
      <Text weight={900}>Typography Roboto Black</Text>
      <Text type={Fonts.FamilyEnum.PT_SERIF} weight={400}>Typography PT Serif Regular</Text>
      <Text type={Fonts.FamilyEnum.PT_SERIF} weight={700}>Typography PT Serif Bold</Text>
    </Info>
    <Info description='Sizing'>
      <Text size={Sizes.TypesEnum.TINY}>Tiny Text</Text>
      <Text size={Sizes.TypesEnum.MINI}>Mini Text</Text>
      <Text size={Sizes.TypesEnum.SMALL}>Small Text</Text>
      <Text size={Sizes.TypesEnum.LARGE}>Large Text</Text>
      <Text size={Sizes.TypesEnum.HUGE}>Huge Text</Text>
      <Text size={Sizes.TypesEnum.MASSIVE}>Massive Text</Text>
    </Info>
  </>
));
