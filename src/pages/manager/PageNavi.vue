<template>
    <div class="page-navi">
      <button class="page-button">1</button>
      <button class="page-button">2</button>
      <button class="page-button active">3</button>
      <button class="page-button">4</button>
      <button class="page-button">5</button>
      <button class="page-button">Next</button>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .page-navi {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .page-button {
    background-color: #e0e0e0;
    border: none;
    padding: 8px 12px;
    margin: 0 5px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s, transform 0.2s;
  }
  
  .page-button:hover {
    background-color: #d0d0d0;
    transform: translateY(-2px);
  }
  
  .page-button.active {
    background-color: #4caf50;
    color: white;
    font-weight: bold;
  }
  </style>
  