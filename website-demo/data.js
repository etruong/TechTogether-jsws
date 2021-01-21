const preventativeMeasures = [
    {
        description: "Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub.",
        img: "wash-hands.png"
    },
    {
        description: "Maintain at least 1 metre distance between you and people coughing or sneezing.",
        img: "distance.png"
    },
    {
        description: "Stay home if you feel unwell.",
        img: "stay-at-home.png"
    },
    {
        description: "Refrain from smoking and other activities that weaken the lungs.",
        img: "medicine.png"
    },
    {
        description: "Practice physical distancing by avoiding unnecessary travel and staying away from large groups of people.",
        img: "distance.png"
    },
];

const symptoms = {
    common: [
        {
            value: "fever",
            label: "Fever"
        },
        {
            value: "dryCough",
            label: "Dry Cough"
        },
        {
            value: "tired",
            label: "Tiredness"
        }
    ],
    lessCommon: [
        {
            value: "achePain",
            label: "aches and pains"
        },
        {
            value: "soreThroat",
            label: "sore throat"
        },
        {
            value: "diarrhea",
            label: "diarrhea"
        },
        {
            value: "conjunctivitis",
            label: "conjunctivitis"
        },
        {
            value: "headache",
            label: "headache"
        },
        {
            value: "loss",
            label: "loss of taste or smell"
        },
        {
            value: "rash",
            label: "a rash on skin, or discolouration of fingers or toes"
        },
    ],
    serious: [
        {
            value: "breath",
            label: "difficulty breathing or shortness of breath"
        },
        {
            value: "chestPain",
            label: "chest pain or pressure"
        },
        {
            value: "lossSpeech",
            label: "loss of speech or movement"
        }
    ]
}

function calculateResults() {
    const checkBoxes = document.getElementsByName("symptoms");
    const count = {
        cs: 0,
        lcs: 0,
        ss: 0,
    }

    for (let i = 0; i < checkBoxes.length; i++) {
        const curCheckBox = checkBoxes[i];
        if (curCheckBox.checked) {
            const [type, value] = curCheckBox.value.split("-");
            count[type]++;
        }
    }

    return (count.cs + count.lcs) <= 2 && count.ss === 0;
}