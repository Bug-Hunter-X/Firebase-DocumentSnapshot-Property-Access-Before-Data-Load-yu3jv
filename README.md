# Firebase DocumentSnapshot Property Access Before Data Load

This repository demonstrates a common error when working with Firebase DocumentSnapshot objects in JavaScript. The error occurs when attempting to access properties of a DocumentSnapshot before the asynchronous data loading process completes.

## Problem
The code attempts to access the 'name' property of a document snapshot immediately after fetching data from Firestore. However, due to the asynchronous nature of Firebase operations, this property might be undefined at that moment, leading to unexpected errors or undefined values.

## Solution
The solution involves using `.then()` to ensure that the code only accesses the 'name' property after the data has fully loaded. The `.catch()` function is used for error handling.

## How to reproduce the bug and see the solution:
1. Clone this repo
2. Install dependencies using `npm install`
3. Run `npm start`