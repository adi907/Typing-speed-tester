# Try again functionality NOT WORKING !!!

from tkinter import * 
from timeit import default_timer as timer
import math
import random

window = Tk()
window.geometry("450x200")
window['bg']='yellow'
x = 0
  
def game():
    global x
    if x == 0:
        window.destroy()
        # x = x+1
        start = timer()
        words = ["Will you get a headache if you think too hard?","I tried to get the pictures, but they're not ready.","Eat all of your dinner if you want some dessert.","I think we are going to have a good day.","I moved the furniture so as to make more room.","We can't leave until we have eaten our lunch."]
        word = random.randint(0, (len(words)-1))
  
    def check_result():
        end = timer()
        net=end-start
        fin=(60*10)/net
        wpm=math.trunc(fin)
        if entry.get() == words[word]:
            if wpm>40:
                print("%s words per minute."%wpm)
                print("Exceptionally Good Typing speed.You belong to the Top 20% percentile")
            elif wpm<=40 and wpm>=30:
                print("%s words per minute."%wpm)
                print("Average Typing Speed.You belong to the Top 40% percentile")
            else:
                print("%s words per minute."%wpm)
                print("Bad typing speed. Practice touch typing")
        else:
            if wpm>40:
                print("%s words per minute."%wpm)
                print("Good Writing speed but Inaccurate submission!!Can be improved by more practice")
            elif wpm<=40 and wpm>=30:
                print("%s words per minute."%wpm)
                print("Average Typing Speed but inaccurate.Need more practice")
            else:
                print("%s words per minute."%wpm)
                print("Way to go newbie.Practice both on speed and accuracy")
        
    windows = Tk()
    windows.geometry("1200x600")
    windows['bg']='yellow'
    x2 = Label(windows, text=words[word], font=("times 20",24), bg="light pink")
    x2.place(x=200, y=10)

    x3 = Label(windows, text="Start Typing", font="times 20", bg="light green")
    x3.place(x=10, y=120)
  
    entry = Entry(windows)
    entry.place(x=240, y=120, width=400,height=30)
  
    b2 = Button(windows, text="Done",command=check_result, width=12, bg='cyan')
    b2.place(x=340, y=175)
  
    b3 = Button(windows, text="Try Again", command=game, width=12, bg='red')
    b3.place(x=440, y=175)
    windows.mainloop()
  
x1 = Label(window, text="Lets start playing..", font="times 20", bg="light pink")
x1.place(x=10, y=50)
  
b1 = Button(window, text="Go", command=game, width=12, bg='grey')
b1.place(x=150, y=100)

window.mainloop()