/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let generateExcuse = () => {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    let xwho = Math.floor(Math.random() * who.length);
    let xaction = Math.floor(Math.random() * action.length);
    let xwhat = Math.floor(Math.random() * what.length);
    let xwhen = Math.floor(Math.random() * when.length);

    return (
      who[xwho] + " " + action[xaction] + " " + what[xwhat] + " " + when[xwhen]
    );
  };
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};
