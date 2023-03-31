const surpriseBtn = document.getElementById('surprise-btn');
const surpriseContainer = document.getElementById('surprise-container');

surpriseBtn.addEventListener('click', () => {
    surpriseContainer.innerHTML = `
        <img src="https://media.istockphoto.com/id/1331996512/photo/attractive-man-and-woman-cuddling-and-laugh-in-nature-romance-in-relationship.jpg?b=1&s=170667a&w=0&k=20&c=yiCfDvD8-boft9xa0Ugmsix9wnAzXMXEOcGrQPTIfSQ=" alt="Surprise!">
        <h2>Will you be my girlfriend?</h2>
        <button id="answer-yes-btn" style=" background-color: #ff6b6b;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;">Yes!</button>
        <button id="answer-no-btn" style="background-color: #ff6b6b;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;">No, sorry :(</button>
    `;
    surpriseContainer.style.display = 'block';
    
    const answerYesBtn = document.getElementById('answer-yes-btn');
    const answerNoBtn = document.getElementById('answer-no-btn');
    
    answerYesBtn.addEventListener('click', () => {
        alert('Thank you so much for this accept proposal. I am truly honored and overwhelmed by your love and sincerity. You have been an important part of my life, and I am grateful for the love and support you have shown me. After giving it much thought. I am looking forward to building a future together, filled with love, laughter, and joy. Thank you for making me feel so special and loved. I cannot wait to embark on this journey with you!');
    });
    
    answerNoBtn.addEventListener('click', () => {
        alert('No worries, thanks for being my friend!');
        
    });
});
