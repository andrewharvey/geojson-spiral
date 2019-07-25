#!/usr/bin/env node

const centre = [0, 0];
const radius = 45;
const loops = 2;
const loopHeight = 5000000;
const verticiesPerLoop = 18;

const coordinates = [];

for (let loop = 0; loop <= loops; loop++) {
    for (let vertex = 0; vertex <= verticiesPerLoop; vertex++) {
        coordinates.push(point(loop, vertex));
    }
}

function point(loopIndex, vertexIndex) {
    const x = radius * Math.cos(vertexIndex / verticiesPerLoop * 2 * Math.PI);
    const y = radius * Math.sin(vertexIndex / verticiesPerLoop * 2 * Math.PI);
    const z = (loopIndex * loopHeight) + ((vertexIndex / verticiesPerLoop) * loopHeight)

    return [x, y, z];
}

const feature = {
    type: 'Feature',
    properties: {},
    geometry: {
        type: 'LineString',
        coordinates: coordinates
    }
};
console.log(JSON.stringify(feature, null, 2));
