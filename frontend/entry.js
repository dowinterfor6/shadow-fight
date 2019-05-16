import Arena from "./game";

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  new Arena(canvas);
});