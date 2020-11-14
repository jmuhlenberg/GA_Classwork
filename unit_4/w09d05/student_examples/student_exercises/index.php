<!-- Explode splits a string by a string -->

<!-- explode(string $delimiter, string $string [, int $limit = PHP_INT_MAX]): array -->

<!-- It will return an array of strings, each of which is a substring of the '$string' formed by splitting it on boundaries formed by the string delimiter -->

<!-- DEFINITIONS -->
<!-- DELIMITER - the boundary string -->
<!-- STRING - the input string -->
<!-- LIMIT - if set and positive, the returned array will contain a maximum of limit elements with the last element containing the rest of 'string'

if negative, all components except the last -limit are returned

if parameter is 0, then it is treated as 1-->


<!-- **note: explode has a strict argument order - unlike implode() -->

<?php

//Example 1
$pizza = "piece1 piece2 piece3 piece4 piece5 piece6";
$pieces = explode(" ", $pizza);
echo $pieces[0] . "<br/>"; //piece1
echo $pieces[1] . "<br/>"; //piece2

//Example 2
$str = 'one|two|three|four';

// positive limit
print_r(explode('|', $str, 2));

print_r('<br/>');
// negative limit (since PHP 5.1)
print_r(explode('|', $str, -1));

?>
