/*=========== Global Variables ======== */
var goal = 0;
var gem1 = [];
var gem2 = [];
var gem3 = [];
var gem4 = [];
var wins = 0;
var losses = 0
var score = 0;
var losingScore = 0;

/*=========== Start Game Function ======= */
$( document ).ready(function(Startgame)
{
    $("#wins").text("wins: " + wins);
    $("#losses").text("losses: " + losses);
        goal = Math.floor(Math.random() * 101) + 19;
        $("#goal").text(goal);
        console.log("your goal is: ", goal);
        
        gem1 = Math.floor(Math.random() * 11) + 1;
        gem2 = Math.floor(Math.random() * 11) + 1;
        gem3 = Math.floor(Math.random() * 11) + 1;
        gem4 = Math.floor(Math.random() * 11) + 1;
        console.log("gem1 number is: ", gem1);
        console.log("gem2 number is: ", gem2); 
        console.log("gem3 number is: ", gem3); 
        console.log("gem4 number is: ", gem4); 
        
 $('#gem1').on ('click', function()
{
    score = score + gem1;
    losingScore = score;
    $("#your_score").text(score);
    console.log("your score is: ", score); 

    if (score === goal)
    {
    wins = wins +  1;
    $("#wins").text("wins: " + wins);
    alert("you win!");
        reset();
    }

    else if (score > goal)
    {
        losses = losses + 1;
        $("#losses").text("losses: " + losses);
        alert("you lose");
            reset();
    }
});
$('#gem2').on ('click', function()
{
    score = score + gem2;
    losingScore = score;
    $("#your_score").text(score);
    console.log("your score is: ", score);

    if (score === goal)
    {
    wins = wins + 1;
    $("#wins").text("wins: " + wins);
    alert("you win!");
        reset();
    }
    else if (score > goal)
    {
        losses = losses + 1;
        $("#losses").text("losses: " + losses);
        alert("you lose");
            reset();
    }

});
$('#gem3').on ('click', function()
{
    score = score + gem3;
    losingScore = score;
    $("#your_score").text(score);
    console.log("your score is: ", score);
    
    if (score === goal)
    {
    wins = wins + 1;
    $("#wins").text("wins: " + wins);
    alert("you win!");
        reset();
    }
    else if (score > goal)
    {
        losses = losses + 1;
        $("#losses").text("losses: " + losses);
        alert("you lose");
            reset();
    }

});
$('#gem4').on ('click', function()
{
    score = score + gem4;
    losingScore = score;
    $("#your_score").text(score);
    console.log("your score is: ", score); 

    if (score === goal)
    {
    wins = wins + 1;
    $("#wins").text("wins: " + wins);
    alert("you win!");
        reset();
    }
    else if (score > goal)
    {
        losses = losses + 1;
        $("#losses").text("losses: " + losses);
        alert("you lose");
            reset();
    }
});

function reset()
{
    score = 0;
    $("#your_score").text(score);
    goal = Math.floor(Math.random() * 19) + 101;
    $("#goal").text(goal);
    gem1 = Math.floor(Math.random() * 11) + 1;
    gem2 = Math.floor(Math.random() * 11) + 1;
    gem3 = Math.floor(Math.random() * 11) + 1;
    gem4 = Math.floor(Math.random() * 11) + 1;
    
}

});



/* ============================ Psudeo Code   

@ Startgame function
randomly generate [goal] Variable
randomly generate [gemNum] into [gem1, gem2, gem3, gem4]
    - randomly generate number for gem1
    - randomly generate number for gem2
    - randomly generate number for gem3
    - randomly generate number for gem4
[wins] = '0'
[losses] = '0'
[score] = '0'

@ .click function

  .click [gem1]: take value of gem1 and add it to your [score]
  .click [gem2]: take value of gem2 and add it to your [score]
  .click [gem3]: take value of gem2 and add it to your [score]
  .click [gem4]: take value of gem2 and add it to your [score]

If statement (winorlose)

    if [score] > [goal]
        losses ++
    call @ reset 

    if [score] === [goal]
        wins ++
    call @reset

@ reset function

randomly genrate number into Goal Variable
randomly generate [gemNum] into [gem1, gem2, gem3, gem4]
    - randomly generate number for gem1
    - randomly generate number for gem2
    - randomly generate number for gem3
    - randomly generate number for gem4
[score] = '0' */

