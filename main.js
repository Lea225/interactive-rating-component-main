// main.js

document.addEventListener('DOMContentLoaded', function() {
  showRatingButtons();
});

function showFeedbackForm() {
  if (event.target.id === 'submitBtn') {
    document.getElementById('rating-buttons').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'none';

    const selectedRating = document.getElementById('selected-rating');
    selectedRating.innerText = userRating;

    document.getElementById('intro-container').style.display = 'none';
    document.getElementById('feedback-container').style.display = 'block';
  }
}

function selectRating(rating) {
  userRating = rating;
}

function showRatingButtons() {
  const ratingButtonsContainer = document.getElementById('rating-buttons');
  for (let i = 1; i <= 5; i++) {
    let button = document.createElement('button');
    button.innerText = i;
    button.onclick = function () {
      selectRating(i);
      // showFeedbackForm(); // Ne pas appeler showFeedbackForm ici
    };
    ratingButtonsContainer.appendChild(button);
  }
}
