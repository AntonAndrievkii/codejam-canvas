const frame4 = [
  ["00BCD4", "FFEB3B", "FFEB3B", "00BCD4"],
  ["FFEB3B", "FFC107", "FFC107", "FFEB3B"],
  ["FFEB3B", "FFC107", "FFC107", "FFEB3B"],
  ["00BCD4", "FFEB3B", "FFEB3B", "00BCD4"]
];

function draw(frame, scale, fillStyleCallback) {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    const width = frame[0].length;
    const height = frame.length;

    for (let row = 0; row < width; row++) {
      for (let col = 0; col < height; col++) {
        ctx.fillStyle = fillStyleCallback(frame[row][col]);
        ctx.fillRect(col * scale, row * scale, scale, scale);
      }
    }
  }
}

function drawImg() {
  const canvas = document.getElementById('canvas');
  const image = document.createElement('img');
  image.src = 'data/image.png';
  image.onload = function () {
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, 512, 512);
    }
  }
}

const frame4Choice = document.getElementById('frame4');
const frame32Choice = document.getElementById('frame32');
const frameImageChoice = document.getElementById('image');

frame4Choice.addEventListener('click', () => {
  draw(frame4, 128, function (colorValue) {
    return "#" + colorValue;
  });
});

frame32Choice.addEventListener('click', () => {
  draw(frame32, 16, function (colorValue) {
    return `rgba(${colorValue})`;
  });
});

frameImageChoice.addEventListener('click', () => {
  drawImg();
});

