import { shallowMount } from '@vue/test-utils'
import Question from '@/components/Question.vue'

describe('Question.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Question, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
