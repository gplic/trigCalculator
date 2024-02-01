
//variables
let sdA = document.getElementById("A");
let sdB = document.getElementById("B");
let sdC = document.getElementById("C");
let agA = document.getElementById("a");
let agB = document.getElementById("b");
let end = document.getElementById("end");
let res = document.getElementById("res");
let tri = document.getElementById("tri");
let clear = document.getElementById("clear");

// Event Listeners
clear.addEventListener("click", inputClear);
end.addEventListener("click", CANGE);


// Clearing
function inputClear() {
    // Clearing Inputs
    sdA.value = ``;
    sdB.value = ``;
    sdC.value = ``;
    agA.value = ``;
    agB.value = ``;

    // Clearing Results
    let result = "Results";
    res.innerHTML = result;
    tri.style.borderBottom = `0px solid black`;
    tri.style.borderRight = `0px solid transparent`;
}

// Calculating sides and angles
function CANGE() {

    let A = +sdA.value;
    let B = +sdB.value;
    let C = +sdC.value;
    let a = +agA.value;
    let b = +agB.value;
    let angle = 0;
    let area = 0;
    let result = "";

    if (A > 0) {
        if (a > 0) {
            if (90 > a) {
                // Finging angle b using angle a
                b = 180 - (a + 90);

                // Finding side B using side A and angle a
                angle = +agA.value * Math.PI/180;
                B = A/Math.tan(angle);

                // Finging side C using side A and B
                C = A*A + B*B;
                C = Math.sqrt(C);

                // Area
                area = (A*B)/2;

                // Results
                result = `Side A: ${A.toFixed(3)} </br> Side B: ${B.toFixed(3)} </br> Side C: ${C.toFixed(3)} </br> Angle A: ${a.toFixed(3)} </br> Angle B: ${b.toFixed(3)} </br> Area: ${area.toFixed(3)}`;
                res.innerHTML = result;
                tri.style.borderBottom = `${A}px solid black`;
                tri.style.borderRight = `${B}px solid transparent`;
            }
            else {
                result = `Angle A must be less that 90°`;
                res.innerHTML = result;
                tri.style.borderBottom = `${0}px solid black`;
                tri.style.borderRight = `${0}px solid transparent`;
            }
            
        }
        else if (b > 0) {
            if (90 > b) {
                // Finging angle b using angle a
                a = 180 - (b + 90);

                // Finding side B using side A and angle b
                angle = +agB.value * Math.PI/180;
                B = Math.tan(angle)*A;

                // Finging side C using side A and B
                C = A*A + B*B;
                C = Math.sqrt(C);

                // Area
                area = (A*B)/2;

                // Results
                result = `Side A: ${A.toFixed(3)} </br> Side B: ${B.toFixed(3)} </br> Side C: ${C.toFixed(3)} </br> Angle A: ${a.toFixed(3)} </br> Angle B: ${b.toFixed(3)} </br> Area: ${area.toFixed(3)}`;
                res.innerHTML = result;
                tri.style.borderBottom = `${A}px solid black`;
                tri.style.borderRight = `${B}px solid transparent`;
            }
            else {
                result = `Angle B must be less that 90°`;
                res.innerHTML = result;
                tri.style.borderBottom = `${0}px solid black`;
                tri.style.borderRight = `${0}px solid transparent`;
            }
            
        }
        else if (B > 0) {
            // Finding angle a using sides A and B
            a = A/B;
            a = Math.atan(a);
            a = a * 180/Math.PI;

            // Finging angle b using angle a
            b = 180 - (a + 90);

            // Finging side C using side A and B
            C = A*A + B*B;
            C = Math.sqrt(C);

            // Area
            area = (A*B)/2;

            // Results
            result = `Side A: ${A.toFixed(3)} </br> Side B: ${B.toFixed(3)} </br> Side C: ${C.toFixed(3)} </br> Angle A: ${a.toFixed(3)} </br> Angle B: ${b.toFixed(3)} </br> Area: ${area.toFixed(3)}`;
            res.innerHTML = result;
            tri.style.borderBottom = `${A}px solid black`;
            tri.style.borderRight = `${B}px solid transparent`;
        }
        else if (C > 0) {
            if (C > A){
                // Finding angle a using sides A and C
                a = A/C;
                a = Math.asin(a);
                a = a * 180/Math.PI;

                // Finging angle b using angle a
                b = 180 - (a + 90);

                // Finging side C using side A and B
                B = C*C - A*A;
                B = Math.sqrt(B);

                // Area
                area = (A*B)/2;

                // Results
                result = `Side A: ${A.toFixed(3)} </br> Side B: ${B.toFixed(3)} </br> Side C: ${C.toFixed(3)} </br> Angle A: ${a.toFixed(3)} </br> Angle B: ${b.toFixed(3)} </br> Area: ${area.toFixed(3)}`;
                res.innerHTML = result;
                tri.style.borderBottom = `${A}px solid black`;
                tri.style.borderRight = `${B}px solid transparent`;
            }
            else{
                result = `Side C must be larger then Side A`;
                res.innerHTML = result;
                tri.style.borderBottom = `${0}px solid black`;
                tri.style.borderRight = `${0}px solid transparent`;
            }
        }
        else {
            res.innerHTML = `Not enough information. </br> Please enter two sides or one angle and one side.`;
            tri.style.borderBottom = `${0}px solid black`;
            tri.style.borderRight = `${0}px solid transparent`;
        }
    }
    else if (B > 0) {
        if (a > 0) {
            if (90 > a) {
                // Finging angle b using angle a
                b = 180 - (a + 90);

                // Finding side A using side B and angle a
                angle = +agA.value * Math.PI/180;
                A = Math.tan(angle) * B;

                // Finging side C using side A and B
                C = A*A + B*B;
                C = Math.sqrt(C);

                // Area
                area = (A*B)/2;

                // Results
                result = `Side A: ${A.toFixed(3)} </br> Side B: ${B.toFixed(3)} </br> Side C: ${C.toFixed(3)} </br> Angle A: ${a.toFixed(3)} </br> Angle B: ${b.toFixed(3)} </br> Area: ${area.toFixed(3)}`;
                res.innerHTML = result;
                tri.style.borderBottom = `${A}px solid black`;
                tri.style.borderRight = `${B}px solid transparent`;
            }
            else {
                result = `Angle A must be less that 90°`;
                res.innerHTML = result;
                tri.style.borderBottom = `${0}px solid black`;
                tri.style.borderRight = `${0}px solid transparent`;
            }
        }
        else if (b > 0) {
            if (90 > b) {
                // Finging angle b using angle a
                a = 180 - (b + 90);

                // Finding side A using side B and angle b
                angle = +agB.value * Math.PI/180;
                A = B/Math.tan(angle);

                // Finging side C using side A and B
                C = A*A + B*B;
                C = Math.sqrt(C);

                // Area
                area = (A*B)/2;

                // Results
                result = `Side A: ${A.toFixed(3)} </br> Side B: ${B.toFixed(3)} </br> Side C: ${C.toFixed(3)} </br> Angle A: ${a.toFixed(3)} </br> Angle B: ${b.toFixed(3)} </br> Area: ${area.toFixed(3)}`;
                res.innerHTML = result;
                tri.style.borderBottom = `${A}px solid black`;
                tri.style.borderRight = `${B}px solid transparent`;
            }
            else {
                result = `Angle B must be less that 90°`;
                res.innerHTML = result;
                tri.style.borderBottom = `${0}px solid black`;
                tri.style.borderRight = `${0}px solid transparent`;
            }
        }
        else if (C > 0) {
            if (C > B){
                // Finding angle a using sides A and C
                a = B/C;
                a = Math.acos(a);
                a = a * 180/Math.PI;

                // Finging angle b using angle a
                b = 180 - (a + 90)

                // Finging side A using side C and B
                A = C*C - B*B;
                A = Math.sqrt(A);

                // Area
                area = (A*B)/2;

                // Results
                result = `Side A: ${A.toFixed(3)} </br> Side B: ${B.toFixed(3)} </br> Side C: ${C.toFixed(3)} </br> Angle A: ${a.toFixed(3)} </br> Angle B: ${b.toFixed(3)} </br> Area: ${area.toFixed(3)}`;
                res.innerHTML = result;
                tri.style.borderBottom = `${A}px solid black`;
                tri.style.borderRight = `${B}px solid transparent`;
            }
            else{
                res.innerHTML = `Side C must be larger then Side B`;
                tri.style.borderBottom = `${0}px solid black`;
                tri.style.borderRight = `${0}px solid transparent`;
            }
        }
        else {
            res.innerHTML = `Not enough information. </br> Please enter two sides or one angle and one side.`;
            tri.style.borderBottom = `${0}px solid black`;
            tri.style.borderRight = `${0}px solid transparent`;
        }
    }
    else if (C > 0) {
        if (a >0) {
            if(90 > a) {
                // Finding angle b using angle a
                b = 180 - (a + 90);

                // Finding side A using side C and angle a
                angle = agA.value * Math.PI/180;
                A = Math.sin(angle) * C;

                // Finding side B using sides A and C
                B = C*C - A*A;
                B = Math.sqrt(B);

                // Area
                area = (A*B)/2;

                // Results
                result = `Side A: ${A.toFixed(3)} </br> Side B: ${B.toFixed(3)} </br> Side C: ${C.toFixed(3)} </br> Angle A: ${a.toFixed(3)} </br> Angle B: ${b.toFixed(3)} </br> Area: ${area.toFixed(3)}`;
                res.innerHTML = result;
                tri.style.borderBottom = `${A}px solid black`;
                tri.style.borderRight = `${B}px solid transparent`;
            }
            else {
                result = `Angle A must be less that 90°`;
                res.innerHTML = result;
                tri.style.borderBottom = `${0}px solid black`;
                tri.style.borderRight = `${0}px solid transparent`;
            }
        }
        else if (b >0) {
            if (90 > b) {
                // Finding angle b using angle a
                a = 180 - (b + 90);

                // Finding side A using side C and angle b
                angle = agB.value * Math.PI/180;
                A = Math.cos(angle) * C;

                // Finding side B using sides A and C
                B = C*C - A*A;
                B = Math.sqrt(B);

                // Area
                area = (A*B)/2;

                // Results
                result = `Side A: ${A.toFixed(3)} </br> Side B: ${B.toFixed(3)} </br> Side C: ${C.toFixed(3)} </br> Angle A: ${a.toFixed(3)} </br> Angle B: ${b.toFixed(3)} </br> Area: ${area.toFixed(3)}`;
                res.innerHTML = result;
                tri.style.borderBottom = `${A}px solid black`;
                tri.style.borderRight = `${B}px solid transparent`;
            }
            else {
                result = `Angle B must be less that 90°`;
                res.innerHTML = result;
                tri.style.borderBottom = `${0}px solid black`;
                tri.style.borderRight = `${0}px solid transparent`;
            }
        }
        else {
            res.innerHTML = `Not enough information. </br> Please enter two sides or one angle and one side.`;
            tri.style.borderBottom = `${0}px solid black`;
            tri.style.borderRight = `${0}px solid transparent`;
        }
    }
    else {
        res.innerHTML = `Not enough information. </br> Please enter two sides or one angle and one side.`;
        tri.style.borderBottom = `${0}px solid black`;
        tri.style.borderRight = `${0}px solid transparent`;
    }
}

// function CANGE() {
//     let t = +op.value;
//     let a = +ag.value * Math.PI/180;
//     let x = Math.tan(a)*t
//     x = x.toFixed(3)
//     res.innerHTML = x
// }