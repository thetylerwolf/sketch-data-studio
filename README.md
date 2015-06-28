Sketch Data Studio
==================

****(Formerly Sketch Financial Data Generator [SketchFinDataGen])

A Sketch plugin to upload or generate numerical and qualitative data for charts and tables. Ideal for those working on big data interfaces or for data scientists who want charts that look better than those produced by spreadsheet software. Updated frequently.

****Please donate!
I develop this plugin in my free time, meaning its development is not paid for by anyone. Your donations not only help me pay the rent, but also encourage me to keep working to make this plugin better! Donating is through paypal and is only a 2-click process.
https://pledgie.com/campaigns/29599

![Screenshot](/../screenshots/screenshots/screenshot_dashboard.png?raw=true)

##What's new?
####Update - 6/28/15 - Lots of updates
-Added CSV upload capability (charts and tables)
-Renamed the plugin to Sketch Data Studio
-Improved user experience on input menus
-Group sizing is now fixed, so groups will contain the entirety of generated items
-Bar charts now work correctly

##How to use
Enter number of columns, followed by number of rows or number of charts (comma seperated) and you're done.

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

##*CSV Import*
Save a spreadsheet in .csv format and import it through the dialogue. Only files with a .csv or .CSV extension will be import-able.

####*Tables*
Any data should work.

####*Charts*
Non-numerical data may produce undesirable results. Percentages with percent signs are fine. Numbers are trimmed to 2 sig-figs.

##Upcoming changes
-Update plugin package structure (not visible to user)
-Code refactor (not visible to user)
-Scatter charts
- ??? - Suggest new feature ideas in the "Issues" section

##Bug reporting
Please include your OS X version as well as your Sketch version in any bug reports.

##Disclaimer
All data labeled "Random" is completely random and is not useful for any sort of financial planning. Data is for mock-up/demo purposes only.

Made by [Tyler Wolf](http://www.tylernwolf.com)
