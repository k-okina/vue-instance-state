function generateGenerateStateFunction(Vue) {
  return function generateStore(state) {
    return new Vue({
      name: 'state',
      data: () => state,
      render() {},
    });
  }
}



export default {
  install(Vue, baseOptions = null) {
    Vue.prototype.$generateState = generateGenerateStateFunction(Vue);
  },
};
