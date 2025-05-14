$(document).ready(function() {
    var questions = [
      {
        question: 'jQuery is a ______.',
        choices: ['JavaScript Library', 'JSON Library', ' Java Library', ' JSON and CSS Library'],
        answer: 0
      },
      {
        question: 'Who developed jQuery?',
        choices: ['John Richard', 'John Resig', 'John Carter', 'John Alexander'],
        
        answer: 1
      },
      {
        question: 'Which sign is used to define/access jQuery?',
        choices: ['$', '.', ' #', ' &'],
        answer: 0
      },
      {
        question: ' Which is the correct jQuery statement to hide all <div> elements?',
        choices: [' $("div").hide()', '  $(div).hide() />', '$(".div").hide()', '<$("#div").hide()'],
        answer: 0
        },
      {
        question: 'Which sign is used for class selector?',
        choices: ['$class', '.class', '#class', 'None'],
        answer: 1
      },
      {
        question: 'Which is the correct jQuery selector to select the first HTML element?',
        choices: ['$("element_name.first")', '$("element_name#first")', '$("element_name::first")', '$("element_name:first")'],
        answer: 3
      },
      {
        question: 'Which is the correct jQuery selector to select all odd table rows?',
        choices: ['$("tr::odd")', '$("tr.odd")', '$("tr:odd")', '$("tr:#odd")'],
        answer: 2
      },
      {
        question: ' Which is the correct jQuery selector to select the first list item of every <ul> element?',
        choices: [' $("ul li:first-child")', '$("ul li:first.*")', '$("li:first-child")', '$("ul:first-child")'],
        answer: 0
      },
      {
        question: 'Which method is used to attach an event handler function to an HTML element when the mouse moves over the HTML elements?',
        choices: [' mousemove()', 'mouseover()', 'hover()', 'mousehover()'],
        answer: 2
      },
      {
        question: 'Which is the correct jQuery statement to fade out a <p> element with duration effect "slow"?',
        choices: ['$("p").fadeOut("slow");', '$("#p").fadeOut("slow");', '$(".p").fadeOut("slow");', '$("p").fadeout();'],
        answer: 0
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