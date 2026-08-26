const DAYS = [
    {
        id: 1, accent: 'rust', label: 'Day 1',
        title: 'Upper — Back Focus',
        subtitle: '9 Ασκήσεις',
        tags: ['BACK', 'SHOULDERS', 'UPPER'],
        exercises: [
            { name: 'Wide Grip Lat Pulldown', muscle: 'Lats · Upper Back', sets: '2 × 8–12', rest: '1-2 min', video: { id: 'jLvqKgW-_G8', start: 220, end: 235 } },
            { name: 'Cable Row', muscle: 'Mid Back & Lats', sets: '2 × 8–12', rest: '1–2 min', video: { id: 'jLvqKgW-_G8', start: 563, end: 576 } },
            { name: 'Chest-Supported Row', muscle: 'Upper Back · Rhomboids', sets: '2 × 10–12', rest: '1-2 min', video: { id: 'jLvqKgW-_G8', start: 533, end: 350 } },
            { name: 'Inverted Row', muscle: 'Upper back, shoulders, arms, and core', sets: '2 × 10–12', rest: '1-2 mins', video: { id: 'jLvqKgW-_G8', start: 413, end: 425 } },
            { name: 'Push-Ups', muscle: 'Chest', sets: '3 × 12–15', rest: '60–90 sec', video: { id: 'fGm-ef-4PVk', start: 352, end: 370 } },
            { name: 'Incline Smith Machine Press', muscle: 'Chest & Shoulders', sets: '3 × 12–15', rest: '1-2 mins', video: { id: 'fGm-ef-4PVk', start: 585, end: 593 } },
            { name: 'Face Away Bayesian Cable Curl', muscle: 'Biceps', sets: '3 × 8–12', rest: '1-2 min', video: { id: 'GNO4OtYoCYk', start: 628, end: 640 } },
            { name: 'Triceps Pressdown (Bar)', muscle: 'Triceps', sets: '3 × 8–12', rest: '1-2 min', video: { id: 'OpRMRhr0Ycc', start: 129, end: 141 } },
            { name: 'Dumbbell Overhead Press', muscle: 'Shoulders', sets: '3 × 10–12', rest: '60–90 sec', video: { id: 'SgyUoY0IZ7A', start: 325, end: 344 } }
        ]
    },
    {
        id: 2, accent: 'sage', label: 'Day 2',
        title: 'Lower — Glute Focus',
        subtitle: '9 Ασκήσεις',
        tags: ['GLUTES', 'LEGS', 'SHOULDERS'],
        exercises: [
            { name: 'Sitted or Lying Leg Curl', muscle: 'Hamstrings', sets: '3 × 10–12', rest: '90 sec', video: { id: 'hRZ5MM6gmlE', start: 24, end: 40 } },
            { name: 'Hip Thrust', muscle: 'Glutes', sets: '3 × 8–12', rest: '2–3 min', video: { id: '3ryh7PNhz3E', start: 127, end: 145 } },
            { name: 'Smith Machine Squat', muscle: 'Glutes · Quads', sets: '3 × 8–10', rest: '2–3 min', video: { id: '3ryh7PNhz3E', start: 368, end: 375 } },
            { name: 'Bulgarian Split Squat', muscle: 'Glutes · Quads', sets: '3 × 8–12', rest: '2 min', video: { id: '3ryh7PNhz3E', start: 376, end: 385 } },
            { name: 'Machine Hip Abduction', muscle: 'Upper Glutes', sets: '3 × 8–12', rest: '2 min', video: { id: '3ryh7PNhz3E', start: 500, end: 515 } },
            { name: 'Machine Leg Extension', muscle: 'Quads', sets: '3 × 10–12', rest: '2 min', video: { id: 'kIXcoivzGf8', start: 426, end: 440 } },
            { name: 'Smith Calf Raises', muscle: 'Calves', sets: '3 × 12–15', rest: '60–90 sec', video: { id: '-qsRtp_PbVM', start: 174, end: 182} },
            { name: 'Lean-away Dumbbell Lateral Raise', muscle: 'Side Delts', sets: '3 × 12–15', rest: '60–90 sec', video: { id: '3ryh7PNhz3E', start: 179, end: 190 } },
            { name: '45-Degree Back Extension', muscle: 'Lower back · Glutes', sets: '3 × 12–15', rest: '60–90 sec', video: { id: '3ryh7PNhz3E', start: 729, end: 740 } },
        ]
    },
    {
        id: 3, accent: 'dust', label: 'Day 3',
        title: 'Back + Glutes + Shoulders',
        subtitle: 'Το δεύτερο μεγάλο stimulus για πλάτη και γλουτούς',
        tags: ['BACK', 'GLUTES', 'SHOULDERS'],
        exercises: [
            { name: 'Pull-ups / Lat Pulldown', muscle: 'Lats · Upper Back', sets: '4 × 8–12', rest: '2–3 min', video: { id: 'O94yEoGXtBY', start: 40, end: 75 } },
            { name: 'T-Bar Row / Barbell Row', muscle: 'Upper Back · Lats', sets: '3 × 8–10', rest: '2–3 min', search: 't-bar row form' },
            { name: 'Seated Cable Row', muscle: 'Mid Back', sets: '3 × 10–12', rest: '2 min', video: { id: '8QuMq1GMMng' } },
            { name: 'Hip Thrust', muscle: 'Glutes', sets: '3 × 8–12', rest: '2–3 min', video: { id: 'U5U6JNIiZ_Q', start: 30, end: 65 } },
            { name: 'Cable Kickbacks', muscle: 'Glutes', sets: '3 × 12–15', rest: '60–90 sec', search: 'cable glute kickback form' },
            { name: 'Leg Curl', muscle: 'Hamstrings', sets: '3 × 10–15', rest: '90 sec', search: 'seated leg curl form' },
            { name: 'Dumbbell Lateral Raise', muscle: 'Side Delts', sets: '4 × 12–15', rest: '60–90 sec', video: { id: 'Myim1WH6Qec' } },
            { name: 'Rear Delt Fly', muscle: 'Rear Delts', sets: '3 × 12–15', rest: '60–90 sec', search: 'rear delt fly form' },
            { name: 'Cable Face Pull', muscle: 'Rear Delts · Upper Back', sets: '2 × 15–20', rest: '60 sec', video: { id: 'sHSY0Ao8QHs' } }
        ]
    }
];


const messages = [
    {
        "id": 1,
        "title": "Τα κατάφερες μωρό μου !!! 🔥",
        "text": "Στήθος, πλάτη, ώμοι φωτιά — τελείωσε το upper, γαμώ την Π-@@@@@@@. 💪"
    },
    {
        "id": 1,
        "title": "Upper DONE μωρό μου 🔥",
        "text": "Έβγαλες upper, άνοιξες φτερά — τώρα πέρνα λοξά γιατί δεν χωράς πουθενά. 💪"
    },
    {
        "id": 1,
        "title": "Τι έκανες πάλι ρε θηρίο; 🔥",
        "text": "Με τέτοια πλάτη και τέτοιους ώμους, μπες στραβά δεν θα χωράς στους διαδρόμους. 💪"
    },

    {
        "id": 2,
        "title": "Τα κατάφερες μωρό μου !!! 🔥",
        "text": "Ω ρε μια κώλαρα! Πιασμενη... 💪"
    },
    {
        "id": 2,
        "title": "Leg day survivor 🔥",
        "text": "Προσοχή στις σκάλες. Σιγά σιγα και πιάνουμε το χερούλι. 💪"
    },
    {
        "id": 2,
        "title": "Δεν τα νιώθεις ε; 🔥",
        "text": "Στη καρεκλίτσα αύριο στο εργαστήριο. 💪"
    },

    {
        "id": 3,
        "title": "Τα κατάφερες μωρό μου !!! 🔥",
        "text": "-"
    },
    {
        "id": 3,
        "title": "Full body DONE 🫡",
        "text": "-"
    },
    {
        "id": 3,
        "title": "Τώρα μπορείς να πεθάνεις ήσυχη 💀",
        "text": "-"
    }
];