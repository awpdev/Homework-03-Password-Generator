# Homework-03-Password-Generator

This is the third homework assignment for the Full Stack Web Development Course. 

The webpage can be accessed <a href="https://awpdev.github.io/Homework-03-Password-Generator/">here</a>.

## Description

This is a password generator that takes the responses from the user what the requirements are for the string of characters that they need in terms of the length and complexity, and outputs a random string of characters to conform with that criteria.

When the user clicks on the 'Generate Password' button, a series of prompts will pop up. The first question is "How many characters does the password require (enter a number from 8 to 128, select cancel for random number of characters)?" The user is expected to either enter a number from 8 to 128 or leave blank for random. If those conditions are not met, it will prompt the user to enter a valid number. 

Then it will ask the user a series of questions whether or not a character type is required in the password starting with lowercase letters. It's possible to answer no to every question to indicate there are no requirements. The code is mostly 2 functions: generatePassword() and validatePassword().

## Visuals

A demonstration of my password generator can be viewed in this <a href="https://drive.google.com/file/d/1JEZ-AY8xy3SzUbUq_DK9JcucuG_XJT1T/view">screencast</a>.

## Usage

-------------------------------------------------------

Example 1: String with all types required

Password length:    8

Lowercase letters?: Y
Uppercase letters?: Y
Numbers:            Y
Special characters? Y

Output:             LfjSV*1%

-------------------------------------------------------

Example 2: String with no types required

Password length:    8
Lowercase letters?: N
Uppercase letters?: N
Numbers:            N
Special characters? N

Output:             ?-o)i SG

-------------------------------------------------------

Example 3: String with no types required, random length

Password length:    (blank)
Lowercase letters?: Y
Uppercase letters?: Y
Numbers:            Y
Special characters? Y

Output:             /J6Jz![A0XX:BOMQ6pR'Jq\,JS}NshBxvps1,:}
                    (39 characters)

-------------------------------------------------------

Example 4: String with no types required

Password length:    128
Lowercase letters?: N
Uppercase letters?: N
Numbers:            N
Special characters? N

Output:             v07St`m|y)*d3uL{P7fu2O:4~os%BFWw&1V-;I]U?-,+wb&;D!TGK7l8{^>d^6OpAru75onC4|[YC`)tz3O0hGU2bBC"C?y9?!Qj&W_h][=#w6nk:|` Sdm Hq2BP3'{
