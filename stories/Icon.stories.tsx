import { storiesOf } from '@storybook/react';
import React from 'react';
import { Icon, Info, Sizes } from '../src';

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
      <Icon size={Sizes.TypesEnum.TINY}/>
      <Icon size={Sizes.TypesEnum.MINI}/>
      <Icon size={Sizes.TypesEnum.SMALL}/>
      <Icon size={Sizes.TypesEnum.LARGE}/>
      <Icon size={Sizes.TypesEnum.HUGE}/>
      <Icon size={Sizes.TypesEnum.MASSIVE}/>
    </Info>
  </>
));
