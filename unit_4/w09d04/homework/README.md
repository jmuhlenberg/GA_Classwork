[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# PHP Basics Practice

For this assignment, you'll complete reps and practice problem solving with PHP to get familiar with the language.

#### Learning Objectives

- Problem solving in PHP

#### Prerequisites

- PHP

---

# Getting Started

1. In today's homework folder, create a file called `student_solution.php`

### Resources

#### PHP Documentation

The PHP documentation is excellent, take advantage of it! Load the following pages in your browser so that you can search for any useful PHP methods to help you solve the problems (look through the 'methods' column on the left)

- [Arrays](https://www.php.net/manual/en/function.array.php)
- [Strings](https://www.php.net/manual/en/language.types.string.php)

# Deliverables

Complete all problems below in the `student_solution.php` file you created.

## Get Started With a Few Reps

### Hello World

1. Print "Hello World" to the console

After you have printed Hello World:

```
$adjective = "Big Bad"
```

2. Interpolate the `adjective` variable into the Hello World string using `.`

Expected output:

```
Hello Big Bad World
```

3. Save "Hello World" to a variable. Without changing the letters in your code manually, permanently change "Hello World" to uppercased letters.

&#x1F534; **Commit your work**

<hr>

### Color Array

With the following array:

`colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']`

1. Print out a random color.

1. Print out the `colors` array in reverse order.

1. Print out all of the colors in the array with all capital letters.

&#x1F534; **Commit your work**

<hr>

### Methods

Write a method named `findArea` that finds the area of a rectangle when given values for width and height

```php
<?php
  function findArea(height, width){

  }
?>
```

Write a method named `multiplyEachByFive` that will loop over the given `nums` array below and print each number multiplied by 5

```php
<?php
  nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0];
  function multiplyEachByFive(arr){

  }
?>
```

&#x1F534; **Commit your work**

<hr>

### Methods With an Associative Array

Use the following given associative arrays to solve the problems below

```php
# Associative Arrays

$book = array(
  "title" => "The Great Gatsby", "author" => "F Scott Fitzgerald", "year" => 1925,
  "price" => 10
);

$lamp = array(
  "type" => "reading",
  "brand" => "Ikea",
  "price", 25
);

$table = array(
  "type" => "bed side",
  "brand" => "Crate & Barrel", "color" => "birch",
  "price" => 50);
```

1. Write a method named `printPrice` that will take in any array and return the price of the item.

2) Write a method named `printItemSums` that will take in two arrays and will return the sum of the prices for the items in the hashes.

&#x1F534; **Commit your work**

<hr>

## Solving Problems with PHP

### Euler Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

&#x1F534; **Commit your work**

<hr>

### Primes

1. Write a method called `checkPrime` that will test whether a number is Prime. The method will return true if Prime, false if not.

1. Write another method called `getPrimes` that will print all the Primes up to an arbitrary limit. For example, if you invoke your method with `getPrimes(100)`, it will print all the Prime numbers up to and including 100.

- This method can call on the previous checkPrime method.

Reminders:

> A Prime number is a number that is not evenly divisible by another number except 1 and itself.
> To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.

&#x1F534; **Commit your work**

<hr>

## Hungry For More?

### Pandigital Numbers

A number of length n is _1-to-n pandigital_ if it makes use of all the digits 1 to n exactly once.

- The number `15234` is _1-to-n pandigital_.

- The number `333` is **not** _1-to-n pandigital_.

- The number `0` is **not** _1-to-n pandigital_.
- The number `10` is **not** _1-to-n pandigital_.

- The number `987654321` is _1-to-n pandigital_.

Write a method that checks if a number is _1-to-n pandigital_.

### Word Frequency

Write a method that will find the word that appears in a given sentence with the greatest frequency. If there is a tie, either of the words will do as a result.

### More?

- Finish the labs from today.
- Solve [this problem](https://projecteuler.net/problem=13) in both PHP & JavaScript. You can sign in to Project Euler to submit your answer and check if it's correct.

## Submission Guidelines

- Create an issue in the classroom repo to submit your homework
- Must be submitted no later than **before the next class at 10 AM Eastern**.

---

_Copyright 2019, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
