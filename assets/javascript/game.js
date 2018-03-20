/*=========== Global Variables ======== */
var goalNum = [19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 28, 29, 30, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86];
var goal = [];
var gem1 = [];
var gem2 = [];
var gem3 = [];
var gem4 = [];
var wins = 0;
var losses = 0
var score = 0;

/*=========== Start Game Function ======= */
$(document).ready(function(startgame)
{
    goal = 0;
        $('#goal').text(goal);

    gem1 = Math.floor(Math.random()*11+1)
    gem2 = Math.floor(Math.random()*11+1)
    gem3 = Math.floor(Math.random()*11+1)
    gem4 = Math.floor(Math.random()*11+1)

wins = 0;
losses = 0;
score = 0;

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
[score] = '0'

