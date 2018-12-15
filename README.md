# calculator
Calculator by William Xia

Description:
This calculator app was made in Javascript. It supports all four mathematical operations, as well as negative numbers, decimals, and parathesis. Users must first turn the calculator on to perform any calculations. The user can also clear the screen/memory by clicking the C button.

What I learned:
On the css side, I learned how to use the grid template property. I divided up the calculator into two parts, the screen and the input. Then i further divided up the input into the many buttons it contains. 

On the javascript side, the most challenging aspect was to create the logic for the parenthesis. I had to take into account whether the current displayed digits would be displayed properly without a parenthesis. For example, if there was an issue with the order of operations, I would need to have the parenthesis around whatever operations came first. If the user wanted to first do 2+2 then multiply that answer by 3, the parenthesis would need to be around the (2+2), and then the *3 would be added after the parenthesis. Also, if there was an open parenthesis already (ie when the user puts a - sign before the number) then the program will automatically close the parenthesis before adding moving onto the next operation.

Another difficulty i encountered was the way javascript handles floating points. Sometimes answers would be so long it would not even fit inside the display screen. To fix this I wrote a rounding function that rounds numbers to the 4th place after the decimal, if needed.