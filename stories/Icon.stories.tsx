import { storiesOf } from '@storybook/react';
import React from 'react';
import { Icon, Info, Sizes } from '../src';

const { SizeTypesEnum } = Sizes;

const stories = storiesOf('Components', module);

stories.add('Icon', () => (
  <>
    <Info
      title='Icon'
      description='This component allows you to use Icon component with various types.'
    />
    <Info description='A standard icon.'>
      <Icon />
    </Info>
    <Info description='A sized icon.'>
      <Icon size={SizeTypesEnum.TINY}/>
      <Icon size={SizeTypesEnum.MINI}/>
      <Icon size={SizeTypesEnum.SMALL}/>
      <Icon size={SizeTypesEnum.LARGE}/>
      <Icon size={SizeTypesEnum.HUGE}/>
      <Icon size={SizeTypesEnum.MASSIVE}/>
    </Info>
  </>
));
