// b = base , h = height , w = width , l = length ,
function calculateTriangleArea() {
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const triangleBaseType = parseFloat(triangleBaseText);
    console.log(triangleBaseType);

    // get triangle height value
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightInput = triangleHeight.value;
    const triangleHeightText = parseFloat(triangleHeightInput);
    console.log(triangleHeightText);

    // calculate triangle aria
    const area = 0.5 * triangleBaseType * triangleHeightText;
    console.log('area of the triangle is:', area);

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}

function calculateRectangleArea() {
    // get rectangle width value
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthType = rectangleWidth.value;
    const rectangleWidthText = parseFloat(rectangleWidthType);
    console.log(rectangleWidthText);

    // get rectangle length value
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthType = rectangleLength.value;
    const rectangleLengthText = parseFloat(rectangleLengthType);
    console.log(rectangleLengthText);
    
    // rectangle area
    const rectangleValue = 0.5 * rectangleWidthText * rectangleLengthText;
    console.log('rectangle area is:', rectangleValue);
}