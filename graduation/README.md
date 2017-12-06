# Graduation

Let's talk about assessment. During the course you had 6 homeworks, each of them costs 10 points. Final (graduation) task will let you try to use all of the learned experience in practice. It will cost 40 points. Homeworks + final task have 100 points total. You need to get at least 60 points, if you want to get a certificate of successful completion of the course.

Here's the proportion:

* **Total:** 100 points (homeworks+graduation)
* **Homework:** 60 points (6 tasks)
* **Graduation:** 40 points (technical+functional+additional requirements)
  + **Technical and functional requirements:** 30 points
  + **Additional requirements:** 10 points
 
## Graduation task

**Deadline:** 18 Dec 2017, 00:00

You have to build a quiz game with [Open Trivia DB API](https://opentdb.com/api_config.php).

**Technical requirements:**

* Use ES2015+ syntax.
* Use component approach.
* Use React for buidling your UI.
* Use Redux for state management.
* Use Redux-middlewares for dealing with side-effects (`redux-thunk`/`redux-saga`/`redux-promises`).
* Use any router solution (e.g `react-router`) for navigation (by questions, topics, etc).
* Handle errors (there should not be unexpected error messages in console).

**Functional requirements:**

* Should works.
* Show the list of questions (any amount)
* Should recieve/save answers
* Should check correctness of answers
* Should show summary (amount of correct answers, percents, etc)

**Additional requirements:**

* Correct semantic in component's markup
* Set up linting (ESLint + airbnb), Prettier, lint-staged
* Use an UI-library (you can try CSS-in-JS)
* Ask for username, count statistic and show summary and save it to `localStorage`
* Ability to choose a topic of questions
* Ability to choose amount of questions
* Show statistic of previous questions and answers for user
* Ability to choose color scheme (light/dark, day/night, etc)

### API

You can find more information about API and query params at [Open Trivia DB API page](https://opentdb.com/api_config.php). Here's an example of request (pay attention on query params):

```
https://opentdb.com/api.php?amount=10&category=18&difficulty=easy
```

Example of response:

```json
{
    "response_code": 0,
    "results": [
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
            "correct_answer": "Apple",
            "incorrect_answers": [
                "Microsoft",
                "Atari",
                "Commodore"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "The programming language &#039;Swift&#039; was created to replace what other programming language?",
            "correct_answer": "Objective-C",
            "incorrect_answers": [
                "C#",
                "Ruby",
                "C++"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "boolean",
            "difficulty": "easy",
            "question": "Linus Torvalds created Linux and Git.",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "boolean",
            "difficulty": "easy",
            "question": "The programming language &quot;Python&quot; is based off a modified version of &quot;JavaScript&quot;.",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "boolean",
            "difficulty": "easy",
            "question": "Pointers were not used in the original C programming language; they were added later on in C++.",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In web design, what does CSS stand for?",
            "correct_answer": "Cascading Style Sheet",
            "incorrect_answers": [
                "Counter Strike: Source",
                "Corrective Style Sheet",
                "Computer Style Sheet"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the domain name for the country Tuvalu?",
            "correct_answer": ".tv",
            "incorrect_answers": [
                ".tu",
                ".tt",
                ".tl"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "On Twitter, what is the character limit for a Tweet?",
            "correct_answer": "140",
            "incorrect_answers": [
                "120",
                "160",
                "100"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "The numbering system with a radix of 16 is more commonly referred to as ",
            "correct_answer": "Hexidecimal",
            "incorrect_answers": [
                "Binary",
                "Duodecimal",
                "Octal"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "boolean",
            "difficulty": "easy",
            "question": "Linux was first created as an alternative to Windows XP.",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        }
    ]
}
```

## How to upload solution

1. **Fork** this repo (click the *fork* button)
2. **Clone** your fork to your working machine (via `git clone`)
3. **Add and commit your solution** to the `graduation/username` folder*
4. **Push** your changes to your remote fork
5. **Open a pull-request** to our primary repo 

\* — optionaly you can also checkout new branch for the solution
