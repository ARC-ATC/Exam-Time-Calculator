
(function() {
  "use strict";

  /**
   * Updated 5_18 by Sergey Akhromtsev/ ARC DSPS
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);


  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    
    document.getElementById('result-area').style.display = "none";
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
    if(text.value.length == 0 || text2.value.length == 0){
      alert("Error in Exam Length or Start Time.\nPlease check the values and try again!")
    }
    else{
      var textValue = text.value;
      var text2Value = text2.value;
      var calcType = document.getElementById("calc-type");

      // if(calcType.value == "oneX"){
      //   let output = oneF(textValue, text2Value);
      //   outText(output);
      // }
      if(calcType.value == "oneX"){
        let output = calcF(textValue, text2Value, 1.5);
        outText(output);
      }
      else if(calcType.value == "twoX"){
        let output = calcF(textValue, text2Value, 2.0);
        outText(output);
      }
      else if(calcType.value == "threeX"){
        let output = calcF(textValue, text2Value, 2.5);
        outText(output);
      }
      else if(calcType.value == "fourX"){
        let output = calcF(textValue, text2Value, 3.0);
        outText(output);
      }
    /*console.log(output);*/
    }
  }

  /*
  ** Mult sends the multiplier, orig is the original exam length in class, sTime is exam start time at DSPS
  */
  function calcF(orig, sTime, mult){
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
    seconds = seconds* (mult);//original exam time multiplied by multiplier

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
    document.getElementById('result-area').style.display = "none";
  }

  function outText(text){
    document.getElementById('result-area').style.display = "block";
    var par = document.getElementById("result");
    par.style.fontSize = "24px";
    par.textContent = text;
  }

})();
