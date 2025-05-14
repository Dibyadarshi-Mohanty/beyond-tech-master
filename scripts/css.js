$(document).ready(function() {
  var questions = [
    {
      question: 'Which of the following CSS property is used to make the text bold?',
      choices: ['text-decoration: bold', 'font-weight: bold', ' font-style: bold', ' text-align: bold'],
      answer: 1
    },
    {
      question: 'Which of the following CSS Property sets the stacking order of positioned elements?',
      choices: [' y-index', 'z-index', ' x-index', ' all of the mentioned'],
      
      answer: 1
    },
    {
      question: 'Which of the following function defines a linear gradient as a CSS image?',
      choices: ['gradient()', 'linear-gradient()', 'grayscale()', ' image()'],
      answer: 1
    },
    {
      question: 'Which of the following is the correct way to apply CSS Styles?',
      choices: [' in an external CSS file', ' inside an HTML element', 'inside the <head> section of an HTML page', 'all of the mentioned'],
      answer: 3
    },
    {
      question: 'Which of the following CSS selector selects the elements that are checked?',
      choices: [':checked', 'E ~ F', '::after', 'none of the mentioned'],
      answer: 0
    },
    {
      question: 'Which of the following function adjust the brightness of an element’s color, for use by the filter property?',
      choices: ['contrast()', ' dark()', 'light()', 'brightness()'],
      answer: 3
    },
    {
      question: 'Which of the following function applies a saturation effect to an element’s color, making it appear more or less vivid, for use by the filter property?',
      choices: ['color()', 'saturation()', 'saturate()', 'none of the mentioned'],
      answer: 0
    },
    {
      question: 'Which of the following CSS Property selects an animation defined in an @keyframes rule and applies it to the element?',
      choices: [' animation', 'animation-name', ' animation-element', 'none of the mentioned'],
      answer: 1
    },
    {
      question: 'Which of the following property sets the size of the font?',
      choices: [' font-size', 'font-variant', ' font-style', 'none of the mentioned'],
      answer: 0
    },
    {
      question: 'Which of the following font-variant property render text using the same letter case as in the underlying code?',
      choices: [' bold', 'small-caps', ' normal', 'italics'],
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