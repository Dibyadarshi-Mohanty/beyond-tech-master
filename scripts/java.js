$(document).ready(function() {
    var questions = [
      {
        question: 'Who invented Java Programming?',
        choices: ['Guido van Rossum', 'James Gosling', ' Dennis Ritchie', 'Bjarne Stroustrup'],
        answer: 1
      },
      {
        question: 'Which component is used to compile, debug and execute the java programs?',
        choices: ['JRE', 'JIT', 'JDK', ' JVM'],
        
        answer: 2
      },
      {
        question: 'Which of these cannot be used for a variable name in Java?',
        choices: ['identifier & keyword', 'identifier', ' keyword', 'none of the mentioned'],
        answer: 2
      },
      {
        question: 'What is the extension of java code files?',
        choices: [' .js', '   .txt', '.class', '.java'],
        answer: 3
        },
      {
        question: 'Which of the following is not an OOPS concept in Java?',
        choices: ['Polymorphism', 'Inheritance', 'Compilation','Encapsulation'],
        answer: 2
      },
      {
        question: 'Which of the following is a type of polymorphism in Java Programming?',
        choices: ['Multiple polymorphism', ' Compile time polymorphism', ' Multilevel polymorphism', 'Execution time polymorphism'],
        answer: 1
      },
      {
        question: 'Which exception is thrown when java is out of memory?',
        choices: ['MemoryError', 'OutOfMemoryError', 'MemoryOutOfBoundsException', 'MemoryFullException'],
        answer: 1
      },
      {
        question: ' Which of these are selection statements in Java?',
        choices: ['break', 'continue', ' for()', ' if()'],
        answer: 3
      },
      {
        question: ' Which of these keywords is used to define interfaces in Java?',
        choices: ['intf', ' Intf', 'interface', 'Interface'],
        answer: 2
      },
      {
        question: 'Which of the following is a superclass of every class in Java?',
        choices: ['ArrayList', 'ArrayList', 'Object class', 'String'],
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