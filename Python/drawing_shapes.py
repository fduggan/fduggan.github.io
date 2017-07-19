from turtle import *
import math

# Name your Turtle.
t= Turtle()

# Set Up your screen and starting position.
setup(500,500)
t.pendown()
'''
x_pos= 0
y_pos= 0
t.goto(0,0)
x_pos=100
y_pos= 0
t.goto (x_pos,y_pos)
x_pos=100
y_pos=100
t.goto (x_pos,y_pos)
x_pos= 0
y_pos=100
t.goto (x_pos,y_pos)
x_pos= 0
y_pos= 0
t.goto (x_pos,y_pos)
x_pos=50
y_pos=100
t.goto (50,100)
x_pos=0
y_pos=100
t.goto (0,100)

'''
'''
for x in range (4):
	t.right(90)
	t.forward(100)
'''
sides= int(input("how many sides?"))
for x in range (sides):
	t.forward (150)
	t.right (360/sides)

# Close window on click.
exitonclick()