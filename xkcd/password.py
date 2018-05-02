import random
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/genpass')
def genpass():
    word_list = []
    possible_passwords = []
    min_pass_length = 3
    max_pass_length = 5

    file = open("passwords.txt", "r")
    content = file.readlines()
    for line in content:
        word_list.append(line)

    for word in word_list:
        if len(word) >= min_pass_length and len(word) <= max_pass_length:
            possible_passwords.append(word)

    password = [random.choice(possible_passwords) for i in range(4)]

    return render_template('passindex.html', password=password, min_pass_length=min_pass_length, max_pass_length=max_pass_length)

if __name__ == '__main__':
    app.run(debug=True)
