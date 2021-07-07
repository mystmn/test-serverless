from flask import Flask, jsonify, make_response, render_template
import os

app = Flask(__name__,
            static_url_path='',
            template_folder=os.path.abspath('core/templates'),
            static_folder='core/static'
            )
app.config['TEMPLATES_AUTO_RELOAD'] = True


# DEFINE Routes
@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


@app.route('/test', methods=['GET', 'POST'])
def test():
    return render_template('manufacturers.html')


@app.route('/popout', methods=['GET', 'POST'])
def popout():
    return render_template('popout.html')


@app.route('/hover-over', methods=['GET'])
def hoverOver():
    return render_template('hover-over.html')


@app.route('/tiny-slider', methods=['GET'])
def tinySlider():
    return render_template('tiny-slider.html')


@app.errorhandler(404)
def not_found(e):
    return render_template("404.html")


'''
@app.route("/")
def hello_from_root():
    test = "<h1>Hello from the other side</h1>/n<h4>away we go!</h4>"
    return jsonify(message=test)

@app.route("/1", methods=['GET'])
def regular_template():
    return render_template('index.html')
'''
