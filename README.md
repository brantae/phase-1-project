# Name 
* The Beer Liker App! :beer:

![Beer Liker App Demo](https://user-images.githubusercontent.com/34112039/194180247-886bafdf-9a64-4725-9a4c-a7554e643615.gif)

## Introduction
* Being a massive fan of craft beer, I'd like to display some beers with a lot of facts including a description of taste & their alcohol level.
* The user will determine whether they like the beer based off this information and they can choose to add to their list & like preexisting ones.

## Features
1. Form Submittal
- Input a name, description, and the ABV of a beer not listed in the cards that you would like to add to the "Beers I like" list
2. Beer Cards
- Twenty-five beer cards are rendered using fetch from a free beer API you can find here: https://punkapi.com/documentation/v2
3. Clicking Like
- On each beer card, there is a heart you can click which will add the 'liked' beer to the "Beers I like" list.

    * Build up the list of beers you want to try so you too can become a craft beer lover!

## How to Use
* Input the name of a beer, its description, and ABV into the form.
- Note: the ABV input will only take whole numbers, even though many ABVs are percentages. Round up or down to the nearest whole number or expect an error saying "Please input a valid number."
    - This is a product of the 'invalid' event listener I have attached to the form!
* Click the heart shaped button to like one of the existing beers on the screen
- This will add it to the list

## Credits
Free API of craft beers and images:
https://punkapi.com/documentation/v2

Special thanks to the instructors & students of Phase 1 Flex who have posted many resources in Slack that I have referenced such
as how to make this here README, a website of free APIs, and their projects themselves to provide inspiration. 
