<template>
    <div class="card">
      <img :src="user.picture.large" alt="User Profile Picture" />
      <div class="data">
        <div class="full-name">{{ user.name.first }} {{ user.name.last }}</div>
        <div class="information">
          <div class="address">
            <p>{{ user.location.street.number }} {{ user.location.street.name }}</p>
            <p>{{ user.location.city }}</p>
            <p>{{ user.location.country }}</p>
          </div>
          <a :href="`tel:${user.cell}`">call {{ user.cell }}</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserCard',
    props: ['user'],
  };
  </script>
  
  <style scoped>
   .data {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap:20px;

    @media (min-width: 640px) {
      align-items: flex-start;
    }
    }
    .full-name {
      text-align: center;
      font-size: 2rem;

      @media (min-width: 640px) {
        height: 80px;
        align-content: flex-end;
      }
    }
    .information {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    
        @media (min-width: 640px) {
            height: auto;
            flex-direction: row;
            align-items: flex-end;
        }    
    }
    .address { 
      text-align: center;
      flex-basis: 100%;

      p {
        font-size: 1rem;

        @media (min-width: 640px) {
          text-align: left;
        }
      }
    }
    
  </style>
  