$(document).ready(function() {
    var questions = [
      {
        question: 'What are the features of bootstrap?',
        choices: ['Mobile first approach', 'Easy to get started', ' Browser Support', ' All of the above'],
        answer: 3
      },
      {
        question: 'Bootstrap includes a responsive, mobile first fluid grid system that appropriately scales up to _______ as the device or viewport size increases.',
        choices: [' 9 columns', '10 columns', ' 11 columns', '12 columns'],
        
        answer: 3
      },
      {
        question: 'How many types of lists supported by Bootstrap?',
        choices: ['1', '2', ' 3', '4'],
        answer: 2
      },
      {
        question: '  Which of the following class in Bootstrap is used to provide a responsive fixed width container?',
        choices: ['.container-fixed', '  .container-fluid', '.container', 'All of the above'],
        answer: 2
        },
      {
        question: 'How many columns are allowed in a bootstrap grid system?',
        choices: ['2', '12', '14','18'],
        answer: 1
      },
      {
        question: 'Which of the following class is used to create a black navigation bar?',
        choices: ['.navbar-default', ' .navbar-inverse', '.navbar-black', '.navbar-dark'],
        answer: 1
      },
      {
        question: 'The class used to shape an image to a circle is -',
        choices: ['.img-rounded', '.img-circle', '.img-rounded', 'None of the above'],
        answer: 1
      },
      {
        question: 'Which of the following plugin in Bootstrap is used to create a modal window?',
        choices: ['popup', 'alert', ' modal', 'window'],
        answer: 2
      },
      {
        question: ' The class in Bootstrap which is used to specify the collapsible elements is -',
        choices: ['.collapse', '.carousel', '.pager', 'None of the above'],
        answer: 0
      },
      {
        question: 'The class used for creating the small size wells is -',
        choices: ['.well-small', '.well-short', '.well-lg', '.well-sm'],
        answer: 3
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