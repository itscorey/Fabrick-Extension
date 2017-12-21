function addCommas(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}


function ScoreColor(score){
    if(score != "--"){
        if(score <= 5){
            return "#E74C3C";
        }else if(score > 5 && score <= 10){
            return "#E45E3D";
        }else if(score > 10 && score <= 15){
            return "#E16F3E";
        }else if(score > 15 && score <= 20){
            return "#DE7F3F";
        }else if(score > 20 && score <= 25){
            return "#DB8E40";
        }else if(score > 25 && score <= 30){
            return "#D89D42";
        }else if(score > 30 && score <= 35){
            return "#D5AA43";
        }else if(score > 35 && score <= 40){
            return "#D2B744";
        }else if(score > 40 && score <= 45){
            return "#CFC345";
        }else if(score > 45 && score <= 50){
            return "#CACC46";
        }else if(score > 50 && score <= 55){
            return "#BAC946";
        }else if(score > 55 && score <= 60){
            return "#AAC647";
        }else if(score > 60 && score <= 65){
            return "#9BC348";
        }else if(score > 65 && score <= 70){
            return "#8DC049";
        }else if(score > 70 && score <= 75){
            return "#80BD49";
        }else if(score > 75 && score <= 80){
            return "#73BA4A";
        }else if(score > 80 && score <= 85){
            return "#67B74A";
        }else if(score > 85 && score <= 90){
            return "#5CB44B";
        }else if(score > 90 && score <= 95){
            return "#51B14B";
        }else if(score > 95 && score <= 100){
            return "#4CAF50";
        }
        return  "#9e9e9e";
    }else{
        return  "#9e9e9e";
    }
}

if (!Object.prototype.watch) {
    Object.defineProperty(Object.prototype, "watch", {
          enumerable: false
        , configurable: true
        , writable: false
        , value: function (prop, handler) {
            var
              oldval = this[prop]
            , newval = oldval
            , getter = function () {
                return newval;
            }
            , setter = function (val) {
                oldval = newval;
                return newval = handler.call(this, prop, oldval, val);
            }
            ;

            if (delete this[prop]) { // can't watch constants
                Object.defineProperty(this, prop, {
                      get: getter
                    , set: setter
                    , enumerable: true
                    , configurable: true
                });
            }
        }
    });
}

// object.unwatch
if (!Object.prototype.unwatch) {
    Object.defineProperty(Object.prototype, "unwatch", {
          enumerable: false
        , configurable: true
        , writable: false
        , value: function (prop) {
            var val = this[prop];
            delete this[prop]; // remove accessors
            this[prop] = val;
        }
    });
}

;(function ($, window) {

var intervals = {};
var removeListener = function(selector) {

	if (intervals[selector]) {

		window.clearInterval(intervals[selector]);
		intervals[selector] = null;
	}
};
var found = 'waitUntilExists.found';

/**
 * @function
 * @property {object} jQuery plugin which runs handler function once specified
 *           element is inserted into the DOM
 * @param {function|string} handler
 *            A function to execute at the time when the element is inserted or
 *            string "remove" to remove the listener from the given selector
 * @param {bool} shouldRunHandlerOnce
 *            Optional: if true, handler is unbound after its first invocation
 * @example jQuery(selector).waitUntilExists(function);
 */

$.fn.waitUntilExists = function(handler, shouldRunHandlerOnce, isChild) {

	var selector = this.selector;
	var $this = $(selector);
	var $elements = $this.not(function() { return $(this).data(found); });

	if (handler === 'remove') {

		// Hijack and remove interval immediately if the code requests
		removeListener(selector);
	}
	else {

		// Run the handler on all found elements and mark as found
		$elements.each(handler).data(found, true);

		if (shouldRunHandlerOnce && $this.length) {

			// Element was found, implying the handler already ran for all
			// matched elements
			removeListener(selector);
		}
		else if (!isChild) {

			// If this is a recurring search or if the target has not yet been
			// found, create an interval to continue searching for the target
			intervals[selector] = window.setInterval(function () {

				$this.waitUntilExists(handler, shouldRunHandlerOnce, true);
			}, 500);
		}
	}

	return $this;
};

}(jQuery, window));


function scoreAverage(score, reviews){
    if(reviews >= 5){
        if(score <= 10){
            return "Overwhelmingly negative";
        }else if(score > 10 && score <= 20){
            return "Very negative";
        }else if(score > 20 && score <= 30){
            return "Mostly negative";
        }else if(score > 30 && score <= 40){
            return "Mixed";
        }else if(score > 40 && score <= 50){
            return "Mixed";
        }else if(score > 50 && score <= 60){
            return "Mixed";
        }else if(score > 60 && score <= 70){
            return "Mostly positive";
        }else if(score > 70 && score <= 80){
            return "Very positive";
        }else if(score > 80 && score <= 100){
            return "Overwhelmingly positive";
        }
        return "No";
    }else{
        return "Not enough";
    }

}




function dateFormat(dte){
    var strDate = dte.toString();
    var month = strDate.substring(4,6);
    var day = strDate.substring(6,8);
    var year = strDate.substring(0,4);
    var text_month = "January";
    if(month  == "01"){
        text_month = "January"
    }else if(month  == "02"){
        text_month = "February"
    }else if(month  == "03"){
        text_month = "March"
    }else if(month  == "04"){
        text_month = "April"
    }else if(month  == "05"){
        text_month = "May"
    }else if(month  == "06"){
        text_month = "June"
    }else if(month  == "07"){
        text_month = "July"
    }else if(month  == "08"){
        text_month = "August"
    }else if(month  == "09"){
        text_month = "September"
    }else if(month  == "10"){
        text_month = "October"
    }else if(month  == "11"){
        text_month = "November"
    }else if(month  == "12"){
        text_month = "December"
    }
    return text_month + " " + day + ", " + year;
}
