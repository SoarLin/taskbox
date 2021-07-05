import { app } from '@storybook/vue3';
import { createStore } from 'vuex';

import PureInboxScreen from './PureInboxScreen.vue';

import { action } from '@storybook/addon-actions';
import * as TaskListStories from './PureTaskList.stories';

const store = createStore({
  state: {
    tasks: TaskListStories.Default.args.tasks,
  },
  actions: {
    pinTask(context, id) {
      action("pin-task")(id);
    },
    archiveTask(context, id) {
      action("archive-task")(id);
    },
  },
});

app.use(store);

export default {
  component: PureInboxScreen,
  title: 'InboxScreen',
  parameters: {
    storyshots: { disable: true },
  },
};

const Template = args => ({
  components: { PureInboxScreen },
  setup() {
    return { args };
  },
  template: '<PureInboxScreen v-bind="args" />',
});

export const Default = Template.bind({});
// Default.parameters = {
//   storyshots: { disable: false },
// };

export const Error = Template.bind({});
Error.parameters = {
  storyshots: { disable: false },
};
Error.args = { error: true };
