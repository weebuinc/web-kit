
window.$weebuDocsify.addComponent('arg', {
  template: `
    <tr>
      <td>{{name}}</td>
      <td>
        <code>{{type}}</code>
      </td>
      <td>
        <code v-if="value?.length > 0">{{getValue(value)}}</code>
      </td>
      <td>
        <input type="checkbox" :checked="required" disabled />
      </td>
      <td>
        <slot></slot>
      </td>
    </tr>
  `,
  props: {
    name: { type: String, required: true },
    type: { type: String, required: true },
    value: { type: String, required: false },
    required: { type: Boolean, required: false, default: false }
  },
  methods: {
    getValue: function(value) {
      if (this?.type.toLowerCase() === 'string') {
        return '"' + value + '"';
      }
      return value
    }
  },
  data: function() {
    return {};
  }
})