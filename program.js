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
        subtitle: 'Έμφαση στους γλουτούς και posterior chain',
        tags: ['GLUTES', 'LEGS', 'SHOULDERS'],
        exercises: [
            { name: 'Hip Thrust', muscle: 'Glutes', sets: '4 × 8–12', rest: '2–3 min', video: { id: 'U5U6JNIiZ_Q', start: 30, end: 65 } },
            { name: 'Romanian Deadlift', muscle: 'Glutes · Hamstrings', sets: '3 × 8–10', rest: '2–3 min', video: { id: '_oyxCn2iSjU', start: 30, end: 65 } },
            { name: 'Bulgarian Split Squat', muscle: 'Glutes · Quads', sets: '3 × 8–12', rest: '2 min', video: { id: 'esY7T8MA4S4' } },
            { name: 'Leg Press', muscle: 'Quads · Glutes', sets: '3 × 10–12', rest: '2 min', search: 'leg press form' },
            { name: 'Leg Curl', muscle: 'Hamstrings', sets: '3 × 10–15', rest: '90 sec', search: 'seated leg curl form' },
            { name: 'Cable / Machine Hip Abduction', muscle: 'Glute Medius', sets: '3 × 15–20', rest: '60–90 sec', search: 'cable hip abduction form' },
            { name: 'Dumbbell Lateral Raise', muscle: 'Side Delts', sets: '3 × 12–15', rest: '60–90 sec', video: { id: 'Myim1WH6Qec' } },
            { name: 'Reverse Pec Deck', muscle: 'Rear Delts', sets: '3 × 12–15', rest: '60–90 sec', search: 'reverse pec deck form' },
            { name: 'Calf Raises', muscle: 'Calves', sets: '3 × 12–15', rest: '60–90 sec', search: 'standing calf raise form' }
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
        "text": "-"
    },
    {
        "id": 2,
        "title": "Leg day survivor 🦵",
        "text": "-"
    },
    {
        "id": 2,
        "title": "Δεν τα νιώθεις ε; 😂",
        "text": "-"
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