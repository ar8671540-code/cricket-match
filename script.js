/* ===== Desktop + Common Styles ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #0f172a;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.dashboard {
    background: #020617;
    padding: 25px;
    border-radius: 12px;
    width: 400px;
    text-align: center;
}

h1 {
    margin-bottom: 15px;
}

.score-card {
    background: #020617;
    border: 1px solid #334155;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
}

.score {
    font-size: 32px;
    font-weight: bold;
    margin: 10px 0;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

button {
    padding: 12px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #2563eb;
    color: white;
    touch-action: manipulation; /* Improves touch response */
}

button:active {
    transform: scale(0.95);
}

.reset {
    margin-top: 15px;
    width: 100%;
    background: #dc2626;
}

/* ===== ðŸ“± Mobile Version ===== */
@media (max-width: 600px) {

    body {
        padding: 10px;
    }

    .dashboard {
        width: 100%;
        padding: 20px;
    }

    h1 {
        font-size: 22px;
    }

    .score {
        font-size: 26px;
    }

    .buttons {
        grid-template-columns: repeat(2, 1fr);
    }

    button {
        font-size: 18px;
        padding: 14px;
    }
}
