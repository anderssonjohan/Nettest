var Settings = {
	Logo			: "iflogo.jpg",	// URL to logo image 
	MinimumDlSpeed	: 900,			// Required download speed in kbit/s
    MinimumUlSpeed  : 300,          // Required upload speed in kbit/s
	MaximumTime		: 180,			// Required response time (milliseconds)
	RequestCount	: 20,			// Number of requests to perform
	Debug			: true			// true, if detailed output of the test run needs to be shown, otherwise false
};
var Strings = {
    StartTest		: "Start Test",
	TestInProgress	: "Test is in progress, please wait...",
	Title			: "Internet Connection Speed Test",
	SubTitle		: "This web page allows you to test the speed of your internet connection between your computer and Infinite Family.",
	TestFailed		: {
		Title	: "We're sorry, your internet connection does not meet our standard.",
		Message : "(If this was your first test try to run the test again in a couple of hours)"
	},
	TestPassed		: {
		Title	: "Congratulations, your internet connection meets our standard.",
		Message : ""
	}
};

