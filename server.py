"""Server for Slack Attack: Georgia's coding challenge for Slack Application"""
import os 
from flask import Flask, render_template, redirect, request, flash, session, jsonify
from instagram import client

app = Flask(__name__)
app.secret_key = "zoolander"


#configure the Instagram API
instaConfig = {
	'client_id':os.environ.get('INSTAGRAM_CLIENT_ID'),
	'client_secret':os.environ.get('INSTAGRAM_CLIENT_SECRET'),
	'redirect_uri':os.environ.get('REDIRECT_URI')	
}

api = client.InstagramAPI(**instaConfig)

@app.route('/', methods=["GET", "POST"])
def index():
	"""renders index template"""


	return render_template('index.html')

@app.route('/getInsta.json')
def getInsta():
	"""retrieves data from instagram API via python-instagram """

	tagged_pics, next = api.tag_recent_media( tag_name='mollydog')

	photos={}
	index = 0
	for pic in tagged_pics:
		photos[index] = {'pic': pic.images["standard_resolution"].url,
						'caption': pic.caption.text
						}
		index += 1
	
	return jsonify(photos)

if __name__=="__main__":

	app.debug = True

	print "\n\n\nYO\n\n\n"
	port = int(os.environ.get("PORT", 5000))
	app.run(host='0.0.0.0', port=port)