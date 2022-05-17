
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);


  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    
    const btn = document.getElementById("calculate-it");
    const btn2 = document.getElementById("reset");
    btn.addEventListener('click', () => {
      calculateClick();
    });

    btn2.addEventListener('click', () => {
      resetAll();
    });
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function calculateClick(){
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
  	let flag = true; //true am
    orig = orig.split(":");
    sTime = sTime.split(":");
    var origDate = new Date(0, 0, 0, orig[0], orig[1], 0, 0);
    var startDate = new Date(0, 0, 0, sTime[0], sTime[1], 0, 0);

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    if(orig[0]>12){
      orig[0] = orig[0]-12;//keeping within 12 hr format
    }
    if(sTime[0]>=12){
    	if(sTime[0]<24){
    		flag = false; //pm
    	}
    	else if(sTime[0]===12){
    		flag=false;
    	}
    	else{
    		flag = true; //am
    	}
      if(sTime[0]!=12)
      {
      	sTime[0] = sTime[0]-12;//keeping within 12 hr format if hr between 13 and 24 hrs
      }
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

    var NewMns = mns.toString().padStart(2, '0');
    if(flag){
    	if((hrs=== 12 || hrs<sTime[0])&& sTime[0]!=12){
    		NewMns = NewMns + "PM";
    	}
    	else if(hrs>sTime[0]){
    		NewMns = NewMns + "AM";
    	}
    	else if(sTime[0]===12 && hrs<sTime[0]){
    		NewMns = NewMns + "AM";
    	}
    	else{
    		NewMns = NewMns + "AM";
    	}
    }
    else if(!flag){
    	if((hrs=== 12 || hrs<sTime[0])&& sTime[0]!=12){
    		NewMns = NewMns + "AM";
    	}
    	else if(hrs>sTime[0]){
    		NewMns = NewMns + "PM";
    	}
    	else if(sTime[0]===12 && hrs<sTime[0]){
    		NewMns = NewMns + "PM";
    	}
    	else{
    		NewMns = NewMns + "PM";
    	}
    }

    console.log(hrs + ":" + mns);
    return "Multiplied Exam Time: [ " + origMultHrs.toString().padStart(2, '0') +  ":" + origMultMns.toString().padStart(2, '0') +
    " ] Exam Stop Time: [ "+ hrs.toString().padStart(2, '0') + ":" +  NewMns +" ]";
  }

  function twoF(orig, sTime){
  	let flag = true; //true am
    orig = orig.split(":");
    sTime = sTime.split(":");
    var origDate = new Date(0, 0, 0, orig[0], orig[1], 0, 0);
    var startDate = new Date(0, 0, 0, sTime[0], sTime[1], 0, 0);

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    if(orig[0]>12){
      orig[0] = orig[0]-12;//keeping within 12 hr format
    }
    if(sTime[0]>=12){
    	if(sTime[0]<24){
    		flag = false; //pm
    	}
    	else if(sTime[0]===12){
    		flag=false;
    	}
    	else{
    		flag = true; //am
    	}
      if(sTime[0]!=12)
      {
      	sTime[0] = sTime[0]-12;//keeping within 12 hr format if hr between 13 and 24 hrs
      }
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

    var NewMns = mns.toString().padStart(2, '0');
    if(flag){
    	if((hrs=== 12 || hrs<sTime[0])&& sTime[0]!=12){
    		NewMns = NewMns + "PM";
    	}
    	else if(hrs>sTime[0]){
    		NewMns = NewMns + "AM";
    	}
    	else if(sTime[0]===12 && hrs<sTime[0]){
    		NewMns = NewMns + "AM";
    	}
    	else{
    		NewMns = NewMns + "AM";
    	}
    }
    else if(!flag){
    	if((hrs=== 12 || hrs<sTime[0])&& sTime[0]!=12){
    		NewMns = NewMns + "AM";
    	}
    	else if(hrs>sTime[0]){
    		NewMns = NewMns + "PM";
    	}
    	else if(sTime[0]===12 && hrs<sTime[0]){
    		NewMns = NewMns + "PM";
    	}
    	else{
    		NewMns = NewMns + "PM";
    	}
    }

    console.log(hrs + ":" + mns);
    return "Multiplied Exam Time: [ " + origMultHrs.toString().padStart(2, '0') +  ":" + origMultMns.toString().padStart(2, '0') +
    " ] Exam Stop Time: [ "+ hrs.toString().padStart(2, '0') + ":" +  NewMns +" ]";
  }

  function threeF(orig, sTime){
	let flag = true; //true am
    orig = orig.split(":");
    sTime = sTime.split(":");
    var origDate = new Date(0, 0, 0, orig[0], orig[1], 0, 0);
    var startDate = new Date(0, 0, 0, sTime[0], sTime[1], 0, 0);

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    if(orig[0]>12){
      orig[0] = orig[0]-12;//keeping within 12 hr format
    }
    if(sTime[0]>=12){
    	if(sTime[0]<24){
    		flag = false; //pm
    	}
    	else if(sTime[0]===12){
    		flag=false;
    	}
    	else{
    		flag = true; //am
    	}
      if(sTime[0]!=12)
      {
      	sTime[0] = sTime[0]-12;//keeping within 12 hr format if hr between 13 and 24 hrs
      }
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

   var NewMns = mns.toString().padStart(2, '0');
   if(flag){
    	if((hrs=== 12 || hrs<sTime[0])&& sTime[0]!=12){
    		NewMns = NewMns + "PM";
    	}
    	else if(hrs>sTime[0]){
    		NewMns = NewMns + "AM";
    	}
    	else if(sTime[0]===12 && hrs<sTime[0]){
    		NewMns = NewMns + "AM";
    	}
    	else{
    		NewMns = NewMns + "AM";
    	}
    }
    else if(!flag){
    	if((hrs=== 12 || hrs<sTime[0])&& sTime[0]!=12){
    		NewMns = NewMns + "AM";
    	}
    	else if(hrs>sTime[0]){
    		NewMns = NewMns + "PM";
    	}
    	else if(sTime[0]===12 && hrs<sTime[0]){
    		NewMns = NewMns + "PM";
    	}
    	else{
    		NewMns = NewMns + "PM";
    	}
    }

    console.log(hrs + ":" + mns);
    return "Multiplied Exam Time: [ " + origMultHrs.toString().padStart(2, '0') +  ":" + origMultMns.toString().padStart(2, '0') +
    " ] Exam Stop Time: [ "+ hrs.toString().padStart(2, '0') + ":" +  NewMns +" ]";
  }

  function fourF(orig, sTime){
  	let flag = true; //true am
    orig = orig.split(":");
    sTime = sTime.split(":");
    var origDate = new Date(0, 0, 0, orig[0], orig[1], 0, 0);
    var startDate = new Date(0, 0, 0, sTime[0], sTime[1], 0, 0);

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    if(orig[0]>12){
      orig[0] = orig[0]-12;//keeping within 12 hr format
    }
    if(sTime[0]>=12){
    	if(sTime[0]<24){
    		flag = false; //pm
    	}
    	else if(sTime[0]===12){
    		flag=false;
    	}
    	else{
    		flag = true; //am
    	}
      if(sTime[0]!=12)
      {
      	sTime[0] = sTime[0]-12;//keeping within 12 hr format if hr between 13 and 24 hrs
      }
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

    var NewMns = mns.toString().padStart(2, '0');
   if(flag){
    	if((hrs=== 12 || hrs<sTime[0])&& sTime[0]!=12){
    		NewMns = NewMns + "PM";
    	}
    	else if(hrs>sTime[0]){
    		NewMns = NewMns + "AM";
    	}
    	else if(sTime[0]===12 && hrs<sTime[0]){
    		NewMns = NewMns + "AM";
    	}
    	else{
    		NewMns = NewMns + "AM";
    	}
    }
    else if(!flag){
    	if((hrs=== 12 || hrs<sTime[0])&& sTime[0]!=12){
    		NewMns = NewMns + "AM";
    	}
    	else if(hrs>sTime[0]){
    		NewMns = NewMns + "PM";
    	}
    	else if(sTime[0]===12 && hrs<sTime[0]){
    		NewMns = NewMns + "PM";
    	}
    	else{
    		NewMns = NewMns + "PM";
    	}
    }

    console.log(hrs + ":" + mns);
    return "Multiplied Exam Time: [ " + origMultHrs.toString().padStart(2, '0') +  ":" + origMultMns.toString().padStart(2, '0') +
    " ] Exam Stop Time: [ "+ hrs.toString().padStart(2, '0') + ":" +  NewMns +" ]";
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
