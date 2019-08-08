import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Colors } from '../build/constants';
import { Button, Info } from '../src';
import { ButtonGroupTypesEnum } from '../src/components/button/type';

const stories = storiesOf('Components', module);

stories.add('Button', () => (
  <>
    <Info
      title='Button'
      description='This component allows you to use Button component with various types.'
    />
    <Info description='A standard button.'>
      <Button onPress={action('Button is pressed!')} text='Press me!'/>
      <Button color={Colors.BEARISH_RED} onPress={action('Button is pressed!')} centered text='Press me! centered'/>
      <Button onPress={action('Button is pressed!')} rightAligned text='Press me! right-aligned'/>
    </Info>
    <Info description='A disabled button.'>
      <Button color={Colors.INTELLIGENT_SILVER_TINT} onPress={action('Button is pressed!')} disabled text='Press me!'/>
      <Button color={Colors.BULLISH_GREEN} onPress={action('Button is pressed!')} disabled text='Press me!'/>
    </Info>
    <Info description='A non-hoverable button.'>
      <Button color={Colors.SMART_TEAL_TINT} hoverable={false} text='Press me!'/>
    </Info>
    <Info description='A fluid button.'>
      <Button fluid onPress={action('Button is pressed!')} text='Press me!'/>
    </Info>
    <Info
      title='Grouped Button'
      description='The buttons can be grouped.'
    />
    <Info description='Vertical mode'>
      <Button.Group>
        <Button onPress={action('Button is pressed!')} text='Submit'/>
        <Button color={Colors.INTELLIGENT_SILVER_TINT} onPress={action('Button is pressed!')} text='Cancel'/>
      </Button.Group>
      <Button.Group centered>
        <Button color={Colors.BEARISH_RED} onPress={action('Button is pressed!')} text='Remove'/>
        <Button color={Colors.INTELLIGENT_SILVER_TINT} onPress={action('Button is pressed!')} text='Cancel'/>
      </Button.Group>
      <Button.Group rightAligned>
        <Button onPress={action('Button is pressed!')} text='Submit'/>
        <Button color={Colors.INTELLIGENT_SILVER_TINT} onPress={action('Button is pressed!')} text='Cancel'/>
      </Button.Group>
    </Info>
    <Info description='A grouped button (horizontal).'>
      <Button.Group type={ButtonGroupTypesEnum.HORIZONTAL}>
        <Button onPress={action('Button is pressed!')} text='Submit'/>
        <Button color={Colors.INTELLIGENT_SILVER_TINT} onPress={action('Button is pressed!')} text='Cancel'/>
      </Button.Group>
      <Button.Group type={ButtonGroupTypesEnum.HORIZONTAL} centered>
        <Button color={Colors.BEARISH_RED} onPress={action('Button is pressed!')} text='Remove'/>
        <Button color={Colors.INTELLIGENT_SILVER_TINT} onPress={action('Button is pressed!')} text='Cancel'/>
      </Button.Group>
      <Button.Group type={ButtonGroupTypesEnum.HORIZONTAL} rightAligned>
        <Button color={Colors.BULLISH_GREEN} onPress={action('Button is pressed!')} text='Proceed'/>
        <Button color={Colors.INTELLIGENT_SILVER_TINT} onPress={action('Button is pressed!')} text='Cancel'/>
      </Button.Group>
    </Info>
  </>
));
