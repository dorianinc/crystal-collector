/*=========== Global Variables ======== */
var goal = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var wins = 0;
var losses = 0
var score = 0;

/*=========== Start Game Function ======= */
$( document ).ready(function(Startgame)
{
    goal = 0;
    wins = 0;
    losses = 0;
    score = 0;
    $("#wins").text("wins: " + wins);
    $("#losses").text("losses: " + losses);
        goal = Math.floor(Math.random() * 19) + 101;
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
    $("#your_score").text(score);
    console.log("your score is: ", score); 
});
$('#gem2').on ('click', function()
{
    score = score + gem2;
    $("#your_score").text(score);
    console.log("your score is: ", score); 
});
$('#gem3').on ('click', function()
{
    score = score + gem3;
    $("#your_score").text(score);
    console.log("your score is: ", score); 
});
$('#gem4').on ('click', function()
{
    score = score + gem4;
    $("#your_score").text(score);
    console.log("your score is: ", score); 
});

if (score === goal)
{
    wins++;
    alert("you win!");
}

else if (score > goal)
{
    losses++;
    alert("you lose :(");
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

