# String Calculator

The string calculator calculates the sum of a given input
that matches this format:
`//{comma seperated delimiter}\n{string of numbers separated by delimiter(s)}`

Examples of strings:
`//,\n1,3,4`
`//%\n3,4,5`
`//*,(,&\n1&6(2*9(1`
`//??,+++,&\n4&15??3??7+++11&2`
`//=,-\n3-4==5--4=2=\n-` **

** Note: string of numbers separated by delimiters can be empty values or new line characters.

The string calculator will also accept a string of comma-separated numbers and 
without a delimiter being specified and assume "," as the delimiter.
Ex) `3,5,6`

## To Run

1. Please make sure all npm packages are installed by running `npm install` in 
  the terminal from the source directory
2. To run please run `npm run start` in the terminal from source directory and 
  then input the string you to find the sum of

## To Test

1. Please make sure all npm packages are installed by running `npm install` in 
  the terminal from the source directory
2. If you want to run tests run `npm run test` in the terminal from the source directory
