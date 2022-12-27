window.$weebuDocsify.addComponent('arguments', {
  template: `
  <table class="arguments">
    <thead>
      <th>name</th>
      <th>type</th>
      <th>default value</th>
      <th>required</th>
      <th>description</th>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
  `,
  props: {},
  data: function() {
    return {};
  }
})