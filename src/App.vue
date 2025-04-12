<template>
  <div id="app">
    <Header :sortOrder="sortOrder" @changeSort="updateSortOrder" /> 
    <section v-if="loading" class="card-container">
      <LoadingSkeleton v-for="n in 10" :key="n" />
    </section>
    <section v-else class="card-container">
      <UserCard v-for="user in sortedUsers" :key="user.login.uuid" :user="user" />
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header.vue';
import LoadingSkeleton from './components/LoadingSkeleton.vue';
import UserCard from './components/UserCard.vue';

export default {
  name: 'App',
  components: { Header, LoadingSkeleton, UserCard },
  data() {
    return {
      users: [],
      loading: true,
      sortOrder: 'ascending',
    };
  },
  created() {
    this.loadUsers();
  },
  computed: {
    sortedUsers() {
      return this.users.slice().sort((a, b) => {
        const aName = `${a.name.first} ${a.name.last}`.toLowerCase();
        const bName = `${b.name.first} ${b.name.last}`.toLowerCase();
        
        if (this.sortOrder === 'ascending') {
          return aName.localeCompare(bName);
        } else {
          return bName.localeCompare(aName);
        }
      });
    }
  },
  methods: {
    async loadUsers() {
      this.loading = true;
      try {
        const { data } = await axios.get('https://randomuser.me/api/?results=10');
        this.users = data.results;
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        this.loading = false;
      }
    },
    updateSortOrder(newOrder) {
      this.sortOrder = newOrder;
    },
  },
};
</script>

<style>
@import './styles.scss';

html, body {
  margin: 0 ;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
}

.card-container {
  display: grid;
  gap: 16px;
  max-width: 729px;
  margin: auto;


  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
     
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
  }

}
</style>
