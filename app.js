const knob = document.querySelector('.knob');
const audio = document.querySelector('#audio');
const prog = document.querySelector('.progress > div');
const play = document.querySelector('.play-btn');
const percent = document.querySelector('.percent');

// Setting volume to mute initially
audio.volume = 0.0;

// Previous x,y values
let prevX = 0;
let prevY = 0;
// Final calculation volume
let vol = 0;

// Get the full bar width
barW = bar.clientWidth;

function volumeKnob(e) {
    // Get half of the knob width & height
    const w = knob.clientWidth / 2;
    const h = knob.clientHeight / 2;

    // Get the mouse coordinates
    const x = e.clientX - knob.offsetLeft;
    const y = e.clientY - knob.offsetTop;

    // Calculate delta values
    const deltaX = w - x;
    const deltaY = h - y;

    // Mouse position in radians
    const rad = Math.atan2(deltaY, deltaX);
    // Convert to degrees
    let deg = rad * (180 / Math.PI);

    // Track the mouse in each quarter
    // Top right corner
    if (y < h && x > w) {
        // Increasing
        if (prevX <= x && prevY <= y) {
            vol++;
        } else if (prevX >= x && prevY >= y) {
            vol--;
        // Bottom right corner
        } else if (y > h && x > w) {
            // Increasing
            if (prevX >= x && prevY <= y) {
                vol++;
            }
            // Decreasing
            else if (prevX <= x && prevY >= y) {
                vol--;
            }
            // Top left corner
            else if (y < h && x < w) {
                // Increasing
                if (prevX <= x && prevY >= y) {
                    vol++
                }
                // Decreasing
                else if (prevX >= x && prevY <= y) {
                    vol--;
                }
                // Bottom left corner
                else if (y > h && x < w) {
                    // Increasing
                    if (prevX >= x && prevY >= y) {
                        vol++;
                    }
                    // Decreasing
                    else if (prevX <= x && prevY <= y) {
                        vol--;
                    }
                }
            }
        }
    }
}
