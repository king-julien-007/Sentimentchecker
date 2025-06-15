document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("myButton").addEventListener("click", async function () {
    const input = document.getElementById("myinput").value;

    const response = await fetch(`https://api.api-ninjas.com/v1/sentiment?text=${encodeURIComponent(input)}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'BWWW60cexQO3iXDuo1I5Jw==tY5MtYsL8OkuoEmC',
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data)
    document.getElementById('val').innerText = 'Sentiment: ' + data.sentiment
    document.getElementById('score').innerText = 'Score: ' + data.score
  });
});
