sketchFinDataGen
================

A Sketch plugin to generate financial dummy data for data tables. Data is for mock-up/demo purposes only. Updated frequently.

##What's new?
####Update - Bar Chart operation has been cleaned up, but is still in Beta.
Bar charts are not working 100% correctly. This seems to be an issue with how Sketch places rectangles through the CocoaScript API. If you have any insight into how to resolve this, please contact me directly or create an issue. In the mean time, I'll be waiting for the next Sketch update.

##How to use
1. First dialogue - enter number of columns, followed by number of rows (comma seperated)
2. Second dialogue - select data type to generate
3. Third dialogue - select the artboard to add the data to

##Data Types
#####*Random 0 - 1*
A random floating point number from 0 - 1

#####*Random 0 - 100*
A random floating point number from 0 - 100

#####*Set your own random values*
Input a comma-seperated list of values that will be picked at random for each row. This can be used to select random integers (1,2,3,4...)

#####*Random Stocks*
Stock names randomly chosen from a list of stocks that were found on the internet.

#####*Random Bonds*
Bond names randomly chosen from a list of stocks that were found on the internet, then a random number between 1 and 10 is chosen and concatenated with the letters "YR" (e.g. 1YR, 4YR, etc.)

#####*Random Stock Symbols*
Stock ticker symbols randomly chosen from a list of stocks that were found on the internet.

##Disclaimer
All data generated is completely random and is not useful for any sort of financial planning. Data is for mock-up/demo purposes only.

##Coming soon
-More charts (scatter, taking suggestions)

##Bug reporting
Please include your OS X version as well as your Sketch version in any bug reports.

Made by [Tyler Wolf](http://www.tylernwolf.com)
