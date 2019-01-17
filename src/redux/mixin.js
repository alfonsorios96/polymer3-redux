import { createMixin } from 'polymer-redux';
import { createStore } from 'redux';
import reducer from './reducers/index'

const mixin = createStore(reducer);
const ReduxMixin = createMixin(mixin);

export default ReduxMixin;
