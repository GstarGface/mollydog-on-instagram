Molly is a Dog
========

Molly is the name of our dog, so naturally #mollydog evolved as her social media hashtag.
<b>LITTLE DID I KNOW..</b>
That "Molly" is in fact an extremely popular dog name. So, this simple javascript app is a tribute to Molly and her similarly-named canine friends. 

<h3>This app was designed to accomplish the following:</h3>
<ul>
	<li> Access and retrieve data from a public API--in this case <a href="https://instagram.com/developer/">Instagram</a></li>
	<li> Display the data on the page using only native JavaScript (no frameworks or libraries!)</li>
	<li> Enable the UI to be updated without a page refresh</li>
</ul>
<br>
<i>Quick Note</i>
There are multiple ways to accomplish the Instagram API integration. Here, I have used the instagram-python library to retrieve the data on the back-end and pass it to the front with a raw JavaScript AJAX request. (see server.py and lightbox.js ) 

It is <i>also</i> possible to retrieve the data on the front-end with single jQuery AJAX call. This data can then be displayed with virtually the same native JavaScript. I opted for the former approach to honor the requirement that no libraries were to be utilized. However, the code for the latter approach can be found in the comments at the bottom of the lightbox.js file.

Thanks! Take a look at the working site here: <a href="https://slack-attack.herokuapp.com/#"> Molly is a Dog</a>
