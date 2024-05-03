<template>
  <view class="overlay" />
  <view class="spinner">
      <view class="dot1" />
      <view class="dot2" />
  </view>
</template>

<style scoped>
page {
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9999;
}

.spinner {
  width: 40px;
  height: 40px;
  position: fixed;
  top: 50%;
  left: 45%;
  z-index: 10000;

  -webkit-animation: sk-rotate 2s infinite linear;
  animation: sk-rotate 2s infinite linear;
}

.dot1,
.dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #333;
  border-radius: 100%;
  background-image: linear-gradient(to right, #ff8a00, #e52e71);

  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes sk-rotate {
  100% {
      -webkit-transform: rotate(360deg);
  }
}

@keyframes sk-rotate {
  100% {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes sk-bounce {
  0%,
  100% {
      -webkit-transform: scale(0);
  }

  50% {
      -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
      transform: scale(0);
      -webkit-transform: scale(0);
  }

  50% {
      transform: scale(1);
      -webkit-transform: scale(1);
  }
}
</style>
