const frames = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|'];
let delay = 100;
for (const frame of frames) {
  setTimeout(() => process.stdout.write(frame + '   '), (delay += 200));
}
setTimeout(() => console.log(''), delay);