import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItem} from '../components/molecule';
import { AccountBalance} from '@mui/icons-material'

export default {
  title: 'Molecules/MenuItem',
  component: MenuItem,
  argTypes: {
    hidden: {control: 'boolean'}
  },
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default label',
  onClick: ()=>{console.log('Clicked!')},
  icon: <AccountBalance />,
  hidden: false
};

