<template>
    <div class="card skeleton">
      <div class="skeleton-image"></div>
      <div class="skeleton-data">
        <div class="skeleton-text skeleton-text-title"></div>
        <div class="skeleton-text"></div>
        <div class="skeleton-text"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoadingSkeleton',
  };
  </script>
  
  <style scoped>
  .skeleton{
    display: flex;
    flex-direction: column;

    @media (min-width:640px) {
        flex-direction: row;
    }
  }

  .skeleton-data {
    height: 200px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width:640px) {
        flex-basis: 80%;
        align-items: start;
        justify-content: center;

    }
  }

  .skeleton-image {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    background-color: #e0e0e0;
    margin-bottom: 16px;
  }
  
  .skeleton-text {
    width: 100%;
    height: 12px;
    background-color: #e0e0e0;
    margin-bottom: 8px;
  }
  
  .skeleton-text-title {
    width: 60%;
    height: 18px;
  }
  </style>
  