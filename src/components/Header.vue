<template>
  <div class="header">
    <div>My Contacts</div>
    <select v-model="localSortOrder" @change="emitSortOrder">
      <option value="ascending">ascending</option>
      <option value="descending">descending</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
  props: ['sortOrder'],
  data() {
    return {
      localSortOrder: this.sortOrder,
    };
  },
  methods: {
    emitSortOrder() {
      this.$emit('changeSort', this.localSortOrder);
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 729px;
  margin: auto;
  margin-bottom: 6px;
  font-size: 32px;
  color: #EF8100;

  select {
    padding: 2px;
  }
}
</style>
