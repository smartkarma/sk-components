import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Info, Text } from '../src';
import { Colors, Fonts, Sizes } from '../src/constants';

const { FontFamilyEnum } = Fonts;
const { SizeTypesEnum } = Sizes;

const stories = storiesOf('Components', module);

stories.add('Text', () => (
  <>
    <Info
      title='Text'
      description='This component allows you to use Text component with Roboto or PT Serif font-family.'
    />
    <Info description='A standard text.'>
      <Text>This is text</Text>
      <Text centered>This is centered</Text>
      <Text rightAligned>This is right-aligned</Text>
    </Info>
    <Info description='A disabled text.'>
      <Text disabled>Disabled text</Text>
    </Info>
    <Info description='A hoverable text.'>
      <Text hoverable>This text is hoverable on the web</Text>
      <Text hoverable colorHover={Colors.BEARISH_RED}>This text is hoverable on the web with custom hover-color</Text>
    </Info>
    <Info description='A typed text and a weighted text.'>
      <Text weight={100}>Typography Roboto Thin</Text>
      <Text weight={300}>Typography Roboto Light</Text>
      <Text weight={400}>Typography Roboto Regular</Text>
      <Text weight={500}>Typography Roboto Medium</Text>
      <Text weight={700}>Typography Roboto Bold</Text>
      <Text weight={900}>Typography Roboto Black</Text>
      <Text family={FontFamilyEnum.PT_SERIF} weight={400}>Typography PT Serif Regular</Text>
      <Text family={FontFamilyEnum.PT_SERIF} weight={700}>Typography PT Serif Bold</Text>
    </Info>
    <Info description='A Sized text.'>
      <Text size={SizeTypesEnum.TINY}>Tiny Text</Text>
      <Text size={SizeTypesEnum.MINI}>Mini Text</Text>
      <Text size={SizeTypesEnum.SMALL}>Small Text</Text>
      <Text size={SizeTypesEnum.LARGE}>Large Text</Text>
      <Text size={SizeTypesEnum.HUGE}>Huge Text</Text>
      <Text size={SizeTypesEnum.MASSIVE}>Massive Text</Text>
    </Info>
    <Info description='A Colored text.'>
      <Text color={Colors.PRIMARY}>Primary color</Text>
      <Text color={Colors.BEARISH_RED}>Bearish red</Text>
      <Text color={Colors.BULLISH_GREEN}>Bearish green</Text>
    </Info>
    <Info description='A clickable text'>
      <Text onPress={action('The text is pressed')}>Press me!</Text>
      <Text hoverable onPress={action('The text with hover is pressed')}>Press me! with hover</Text>
      <Text hoverable colorHover={Colors.BEARISH_RED} color={Colors.BULLISH_GREEN}
            onPress={action('The text colored with hover is pressed')}>Press me! colored with hover</Text>
    </Info>
  </>
));
