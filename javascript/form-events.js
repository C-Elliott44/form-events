// Store elements
var elForm, elSelectPackage, elPackageHint, elTerm, elTermHint;
elForm = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerm = document.getElementById('terms');
elTermHint = document.getElementById('termsHint');

// Function to check which plan is picked and display a message depending on the choice.
// Two 'this' statements are used to 1.find the options availible 2.reference the option that is picked
function packageHint() {
var pack = this.options[this.selectedIndex].value;
if (pack === 'monthly') {
    elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';
} else {
    elPackageHint.innerHTML = 'Wise choice!';
}
} 

// function that checks if terms if checked or not, stops submit if it is not
function checkTerms(event) {
    if (!elTerm.checked) {
        elTermHint.innerHTML = 'You must agree to the terms.';
        event.preventDefault();
    }
}

// Create event handler to check on when the drop down selection is changed
elSelectPackage.addEventListener('change', packageHint, false);
// Create event handler to check is terms have been agreeded to
elForm.addEventListener('submit', checkTerms, false);