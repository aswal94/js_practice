function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
    console.log(size, coords, radius);
}

drawChart({
    coords: {x: 18, y: 30},
    radius: 30
});

drawChart();