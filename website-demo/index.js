// GENERATE PREVENTION FUNCTIONALITY //
const preventImage = document.querySelector(".measure-container img");
const preventText = document.querySelector(".measure-container > div:nth-of-type(2) p");

// const onePaginationBtn = document.querySelector(".pagination > p");
// onePaginationBtn.addEventListener("click", function(event) {
//     // event parameter is an object, the target field contains info about the DOM in which
//     // the event occurred
//     const index = onePaginationBtn.textContent;
//     const preventInfo = preventativeMeasures[index - 1];
//     preventImage.src = "./img/prevent/" + preventInfo.img;
//     preventText.textContent = preventInfo.description;
// });

const paginationBtns = document.querySelectorAll(".pagination > p");
for (let i = 0; i < paginationBtns.length; i++) {
    const onePaginationBtn = paginationBtns[i];
    onePaginationBtn.addEventListener("click", function(event) {
        // event parameter is an object, the target field contains info about the DOM in which
        // the event occurred
        const index = onePaginationBtn.textContent;
        const preventInfo = preventativeMeasures[index - 1];
        preventImage.src = "./img/prevent/" + preventInfo.img;
        preventText.textContent = preventInfo.description;
        document.querySelector(".selected").classList.remove("selected");
        onePaginationBtn.classList.add("selected");
    });
}

// GENERATE CHECKLIST FUNCTIONALITY //
/*
<div class="col-med">
    <h3>Serious</h3>
    <div>
        <input type="checkbox" id="seriousSymptom1" name="symptoms" value="ss-breath">
        <label for="seriousSymptom1"> difficulty breathing or shortness of breath</label><br>
    </div>
    <div>
        <input type="checkbox" id="seriousSymptom2" name="symptoms" value="ss-chestPain">
        <label for="seriousSymptom2"> chest pain or pressure</label><br>
    </div>
    <div>
        <input type="checkbox" id="seriousSymptom3" name="symptoms" value="ss-lossSpeech">
        <label for="seriousSymptom3"> loss of speech or movement</label><br>
    </div>
</div>
*/

const checklist = document.querySelector(".checklist");
const column = document.createElement("div");
column.classList.add("col-med");
column.innerHTML = `<h3>Serious</h3>
    <div>
        <input type="checkbox" id="seriousSymptom1" name="symptoms" value="ss-breath">
        <label for="seriousSymptom1"> difficulty breathing or shortness of breath</label><br>
    </div>
    <div>
        <input type="checkbox" id="seriousSymptom2" name="symptoms" value="ss-chestPain">
        <label for="seriousSymptom2"> chest pain or pressure</label><br>
    </div>
    <div>
        <input type="checkbox" id="seriousSymptom3" name="symptoms" value="ss-lossSpeech">
        <label for="seriousSymptom3"> loss of speech or movement</label><br>
    </div>`;
checklist.append(column);


// RESULTS FUNCTIONALITY //
const resultBtn = document.getElementById("result-btn");
const resultDiv = document.querySelector(".results");
const resultImg = resultDiv.querySelector("img");
const resultText = resultDiv.querySelector("p:nth-of-type(1)");
resultBtn.addEventListener("click", function() {
    resultDiv.classList.remove("hidden");

    const seeDoctor = calculateResults();
    if (seeDoctor) {
        resultImg.src = "./img/report-result/ok.png";
        resultText.textContent = "Sounds like you are okay. Make sure to monitor your symptoms for if it gets worse.";
    } else {
        resultImg.src = "./img/report-result/see-doctor.png";
        resultText.textContent = "It is recommended to get tested and self-quarantine. "
            + "Always call before visiting your doctor or health facility";
    }
});