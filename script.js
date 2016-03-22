var buttonId = ["one", "two", "three", "four", "five"];


function $(id) {
    return document.getElementById(id);
}

function changePortions() {
    for (var i = 0; i < 5; i++){
         if ($(buttonId[i]).checked === true) {
            $("ägg").innerHTML = (1) * $(buttonId[i]).value + " st ägg";
             $("vetemjöl").innerHTML = (500) * $(buttonId[i]).value + " g vetemjöl";
             $("bakpulver").innerHTML = (2) * $(buttonId[i]).value + " tsk bakpulver";
             $("salt").innerHTML = (2) * $(buttonId[i]).value + " krm salt";
             $("smör").innerHTML = (50) * $(buttonId[i]).value + " g smör";
             $("mjölk").innerHTML = (2) * $(buttonId[i]).value + " dl mjölk";
             break;
        }
    }
}

