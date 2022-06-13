import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';

import { MenuItem} from '../components/molecule';
import { AccountBalance} from '@mui/icons-material'
import { configureStore, createSlice } from '@reduxjs/toolkit';

const MockedState = {
  sidebar: {
    expanded: true
  }
};

// A super-simple mock of a redux store
const Mockstore = ({ sideBarState, children }:any) => (
  <Provider
    store={configureStore({
      reducer: {
        sidebar: createSlice({
          name: 'sidebar',
          initialState: sideBarState,
          reducers: {
              toggle: (state) => {
                state.expanded = !state.expanded
              }          
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/MenuItem',
  component: MenuItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    // hidden: {control: 'boolean'}
  },
} as ComponentMeta<typeof MenuItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;



export const Default = Template.bind({});
Default.decorators = [
  (story) => (
    <Mockstore sideBarState={{expanded: true}}>
      {story()}
    </Mockstore>
  ),
];

Default.args = {
  label: 'Button',
  onClick: ()=>{console.log('Clicked!')},
  icon: <AccountBalance />,
  hidden: false
};

