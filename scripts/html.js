$(document).ready(function() {
    var questions = [
      {
        question: 'Who is the father of HTML?',
        choices: ['Rasmus Lerdorf', 'Tim Berners-Lee', ' Brendan Eich', ' Sergey Brin'],
        answer: 1
      },
      {
        question: 'Which of the following tag is used for inserting the largest heading in HTML?',
        choices: ['  head', 'h', ' h6', 'heading'],
        
        answer: 1
      },
      {
        question: 'How do we write comments in HTML?',
        choices: ['ctrl+/ /', '!-- --', '-----', 'ctrl+k+t'],
        answer: 2
      },
      {
        question: ' Which HTML tag is used to insert an image?',
        choices: [' img url="htmllogo.jpg"/ ', '  img alt="htmllogo.jpg" /', 'img src="htmllogo.jpg" /', 'img link="htmllogo.jpg" /'],
        answer: 2
        },
      {
        question: 'In HTML, which attribute is used to create a link that opens in a new window tab?',
        choices: ['src="_blank"', 'alt="_blank"', 'target="_self"', 'target="_blank"'],
        answer: 3
      },
      {
        question: 'Which tag is used to create a numbered list in HTML?',
        choices: ['ol', ' ul', 'li', 'll'],
        answer: 0
      },
      {
        question: ' How to create a checkbox in HTML Form?',
        choices: ['input type=”text”', 'input type=”textarea”', 'input type=”checkbox”', 'input type=”button”'],
        answer: 2
      },
      {
        question: 'What is the use of <hr/> tag in HTML?',
        choices: ['  For making content appearance italics', 'To create vertical rule between sections', ' To create a line break', 'To create horizontal rule between sections'],
        answer: 3
      },
      {
        question: 'Which attribute specifies a unique alphanumeric identifier to be associated with an element?',
        choices: [' type', 'article', ' id', 'class'],
        answer: 2
      },
      {
        question: 'Which of the following HTML element is used for canvas graphics?',
        choices: [' css', 'paint', ' canvas', 'graphic'],
        answer: 2
      }
      
    ];
  
    var currentQuestion = 0;
    var score = 0;
   $("#tot_q").html(`${currentQuestion} of ${questions.length}`)
    function showQuestion() {
      $('#question').text(questions[currentQuestion].question);
      $('#choices').empty();
      for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        $('#choices').append('<label class="radio"> <input type="radio"  name="choice" value="' + i + '">' +"<span>"+ questions[currentQuestion].choices[i] + '</span> </label><br>');
      }
    }
    function checkAnswer() {
      var selectedChoice = $('input[name="choice"]:checked').val();
      if (selectedChoice == questions[currentQuestion].answer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        let percentage = (score / questions.length) * 100;
       
        $('#score').text(percentage.toFixed(2)+"%");
        $('#total-questions').text("100%");
      }
    }

    showQuestion();
  
    $('#next').click(function(){
      checkAnswer();
      $("#tot_q").html(`${currentQuestion} of ${questions.length}`);
      if(questions.length == currentQuestion) hideBtn()
    });
   function hideBtn(){
    $("#next").hide();
    $("#submit").removeClass("d-none")
   }
   $("#submit").click(function(){
    $("#score-container").show();
    $('#quiz-container').hide();
    let emoji ;
    let check = Number((score/questions.length)*100)
    if(check < 30) emoji = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwq_C04DKq0LsUna_w7YQ1-VWmmZKnc6t5sQ&usqp=CAU" alt="img" class="img-fluid mx-auto" style="height: 20vh;width: 10vw;aspect-ratio: 1;">`
    else emoji = `<img src="https://m.media-amazon.com/images/I/715vwvP5ZEL.png" alt="img" class="img-fluid mx-auto" style="height: 20vh;width: 10vw;aspect-ratio: 1;">`
    $(".inner").append(emoji)
   })
    $('#restart').click(function() {
      currentQuestion = 0;
      score = 0;
      $('#quiz-container').show();
      $('#score-container').hide();
      showQuestion();
    });
  });