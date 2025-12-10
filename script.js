// QUIZ
document.addEventListener("DOMContentLoaded", () => {
  const quiz = document.getElementById("musicQuiz");

  if (!quiz) return;

  quiz.addEventListener("submit", (e) => {
    e.preventDefault();

    const mood = document.querySelector("input[name='mood']:checked");
    const objectChoice = document.getElementById("object").value;
    const listen = document.querySelector("input[name='listen']:checked");

    if (!mood || !listen) {
      alert("Please answer all questions.");
      return;
    }

    let scores = {
      pop: 0,
      hiphop: 0,
      alternative: 0
    };

    // Count answers
    scores[mood.value]++;
    scores[objectChoice]++;
    scores[listen.value]++;

    // Determine winning genre
    let winner = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    // Redirect to correct song page
    if (winner === "pop") {
      window.location.href = "Pop.html";
    } 
    else if (winner === "hiphop") {
      window.location.href = "hiphop.html";
    } 
    else {
      window.location.href = "Alternative.html";
    }
  });
});

