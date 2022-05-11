/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   * Every feature of the program is implemented, randomize, shift cipher,
   * font changing, and all caps if toggled. I implemented randomizer using an array of all letters,
   * and choosing random letter to replace each user input letter.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    
    const btn = document.getElementById("calculate-it");
    const btn2 = document.getElementById("reset");
    btn.addEventListener('click', () => {
      encryptClick();
    });

    btn2.addEventListener('click', () => {
      resetAll();
    });
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function encryptClick(){
    console.log("Calculate Button Clicked!");
    var text = document.getElementById("input-text1");
    console.log(text.value);
    var text2 = document.getElementById("input-text2");
    var textValue = text.value;
    var text2Value = text2.value;
    var calcType = document.getElementById("calc-type");

    if(calcType.value == "oneX"){
      let output = oneF(textValue, text2Value);
      outText(output);
    }
    else if(calcType.value == "twoX"){
      let output = twoF(textValue, text2Value);
      outText(output);
    }
    else if(calcType.value == "threeX"){
      let output = threeF(textValue, text2Value);
      outText(output);
    }
    else if(calcType.value == "fourX"){
      let output = fourF(textValue, text2Value);
      outText(output);
    }
    /*console.log(output);*/
  }

  function oneF(orig, sTime){
    orig = orig.split(":");
    sTime = sTime.split(":");
    var origDate = new Date(0, 0, 0, orig[0], orig[1], 0, 0);
    var startDate = new Date(0, 0, 0, sTime[0], sTime[1], 0, 0);

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    if(orig[0]>12){
      orig[0] = orig[0]-12;//keeping within 12 hr format
    }
    if(sTime[0]>12){
      sTime[0] = sTime[0]-12;//keeping within 12 hr format
    }
    var seconds = orig[0] * 60 * 60 + orig[1] * 60;//original exam time in seconds
    seconds = seconds* (1.5);//original exam time multiplied by multiplier

    var origMultHrs = Math.floor((seconds/60)/60);
    var origMultMns = Math.floor((seconds - ((origMultHrs*60)*60))/60);
    var secb = sTime[0] * 60 * 60 + sTime[1] * 60;// start time
    var res = seconds + secb;

    var hrs = Math.floor((res/60)/60);
    var mns = Math.floor((res - ((hrs*60)*60))/60);
    if(hrs>12){
      hrs = hrs-12;
    }

    console.log(hrs + ":" + mns);
    return "Multiplied Exam Time: [ " + origMultHrs.toString().padStart(2, '0') +  ":" + origMultMns.toString().padStart(2, '0') +
    " ] Exam Stop Time: [ "+ hrs.toString().padStart(2, '0') + ":" +  mns.toString().padStart(2, '0') +" ]";
  }

  function twoF(orig, sTime){
    orig = orig.split(":");
    sTime = sTime.split(":");
    var origDate = new Date(0, 0, 0, orig[0], orig[1], 0, 0);
    var startDate = new Date(0, 0, 0, sTime[0], sTime[1], 0, 0);

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    if(orig[0]>12){
      orig[0] = orig[0]-12;//keeping within 12 hr format
    }
    if(sTime[0]>12){
      sTime[0] = sTime[0]-12;//keeping within 12 hr format
    }
    var seconds = orig[0] * 60 * 60 + orig[1] * 60;//original exam time in seconds
    seconds = seconds* (2);//original exam time multiplied by multiplier

    var origMultHrs = Math.floor((seconds/60)/60);
    var origMultMns = Math.floor((seconds - ((origMultHrs*60)*60))/60);
    var secb = sTime[0] * 60 * 60 + sTime[1] * 60;// start time
    var res = seconds + secb;

    var hrs = Math.floor((res/60)/60);
    var mns = Math.floor((res - ((hrs*60)*60))/60);
    if(hrs>12){
      hrs = hrs-12;
    }
    console.log(hrs + ":" + mns);
    return "Multiplied Exam Time: [ " + origMultHrs.toString().padStart(2, '0') +  ":" + origMultMns.toString().padStart(2, '0') +
    " ] Exam Stop Time: [ "+ hrs.toString().padStart(2, '0') + ":" +  mns.toString().padStart(2, '0') +" ]";
  }

  function threeF(orig, sTime){
    orig = orig.split(":");
    sTime = sTime.split(":");
    var origDate = new Date(0, 0, 0, orig[0], orig[1], 0, 0);
    var startDate = new Date(0, 0, 0, sTime[0], sTime[1], 0, 0);

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    if(orig[0]>12){
      orig[0] = orig[0]-12;//keeping within 12 hr format
    }
    if(sTime[0]>12){
      sTime[0] = sTime[0]-12;//keeping within 12 hr format
    }
    var seconds = orig[0] * 60 * 60 + orig[1] * 60;//original exam time in seconds
    seconds = seconds* (2.5);//original exam time multiplied by multiplier

    var origMultHrs = Math.floor((seconds/60)/60);
    var origMultMns = Math.floor((seconds - ((origMultHrs*60)*60))/60);
    var secb = sTime[0] * 60 * 60 + sTime[1] * 60;// start time
    var res = seconds + secb;

    var hrs = Math.floor((res/60)/60);
    var mns = Math.floor((res - ((hrs*60)*60))/60);
    if(hrs>12){
      hrs = hrs-12;
    }
    console.log(hrs + ":" + mns);
    return "Multiplied Exam Time: [ " + origMultHrs.toString().padStart(2, '0') +  ":" + origMultMns.toString().padStart(2, '0') +
    " ] Exam Stop Time: [ "+ hrs.toString().padStart(2, '0') + ":" +  mns.toString().padStart(2, '0') +" ]";
  }

  function fourF(orig, sTime){
    orig = orig.split(":");
    sTime = sTime.split(":");
    var origDate = new Date(0, 0, 0, orig[0], orig[1], 0, 0);
    var startDate = new Date(0, 0, 0, sTime[0], sTime[1], 0, 0);

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    if(orig[0]>12){
      orig[0] = orig[0]-12;//keeping within 12 hr format
    }
    if(sTime[0]>12){
      sTime[0] = sTime[0]-12;//keeping within 12 hr format
    }
    var seconds = orig[0] * 60 * 60 + orig[1] * 60;//original exam time in seconds
    seconds = seconds* (3);//original exam time multiplied by multiplier

    var origMultHrs = Math.floor((seconds/60)/60);
    var origMultMns = Math.floor((seconds - ((origMultHrs*60)*60))/60);
    var secb = sTime[0] * 60 * 60 + sTime[1] * 60;// start time
    var res = seconds + secb;

    var hrs = Math.floor((res/60)/60);
    var mns = Math.floor((res - ((hrs*60)*60))/60);
    if(hrs>12){
      hrs = hrs-12;
    }
    console.log(hrs + ":" + mns);
    return "Multiplied Exam Time: [ " + origMultHrs.toString().padStart(2, '0') +  ":" + origMultMns.toString().padStart(2, '0') +
    " ] Exam Stop Time: [ "+ hrs.toString().padStart(2, '0') + ":" +  mns.toString().padStart(2, '0') +" ]";
  }



  function resetAll(){
    console.log("Reset Button Clicked!");
    var text = document.getElementById("input-text1");
    var text2 = document.getElementById("input-text2");
    var par = document.getElementById("result");
    text.value = "";
    text2.value = "";
    par.innerHTML = "";
  }

  function outText(text){
    var par = document.getElementById("result");
    par.style.fontSize = "24px";
    par.textContent = text;
  }

})();
