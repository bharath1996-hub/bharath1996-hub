export const exercises = [
  {
    id: 1,
    title: 'Hello, Name!',
    difficulty: 'Beginner',
    description: 'Write a program that prints a personalized greeting.',
    problem: `Create a variable called 'name' and assign it your name. Then print a greeting that says "Hello, [name]!"

Example output: "Hello, Alice!"`,
    starterCode: '# Create a variable called name\n# Then print a greeting\n',
    hint: 'Use print() function and f-string: print(f"Hello, {name}!")',
    testCode: `
# Test
if 'name' in dir():
    print("All tests passed!")
else:
    print("Test failed: Variable 'name' not found")
`,
  },
  {
    id: 2,
    title: 'Simple Calculator',
    difficulty: 'Beginner',
    description: 'Create variables and perform basic arithmetic.',
    problem: `Create two variables: num1 = 10 and num2 = 5
Calculate and print:
- Their sum
- Their difference
- Their product
- Their quotient`,
    starterCode: 'num1 = 10\nnum2 = 5\n\n# Calculate and print the results\n',
    hint: 'Use +, -, *, and / operators',
    testCode: `
# Test
num1 = 10
num2 = 5
print(f"Sum: {num1 + num2}")
print(f"Difference: {num1 - num2}")
print(f"Product: {num1 * num2}")
print(f"Quotient: {num1 / num2}")
print("All tests passed!")
`,
  },
  {
    id: 3,
    title: 'String Manipulation',
    difficulty: 'Beginner',
    description: 'Practice working with strings.',
    problem: `Given the string "python programming", create a program that:
1. Converts it to uppercase
2. Counts the number of characters
3. Replaces "python" with "Java"

Print each result.`,
    starterCode: 'text = "python programming"\n\n# Your code here\n',
    hint: 'Use .upper(), len(), and .replace() methods',
    testCode: `
text = "python programming"
print(text.upper())
print(len(text))
print(text.replace("python", "Java"))
print("All tests passed!")
`,
  },
  {
    id: 4,
    title: 'List Operations',
    difficulty: 'Beginner',
    description: 'Work with lists and their methods.',
    problem: `Create a list called 'fruits' with: "apple", "banana", "orange"
Then:
1. Add "grape" to the end
2. Insert "mango" at the beginning
3. Print the final list
4. Print the number of items`,
    starterCode: '# Create your list here\n',
    hint: 'Use append() to add to end, insert(0, item) to add to beginning',
    testCode: `
fruits = ["apple", "banana", "orange"]
fruits.append("grape")
fruits.insert(0, "mango")
print(fruits)
print(f"Number of items: {len(fruits)}")
print("All tests passed!")
`,
  },
  {
    id: 5,
    title: 'Even or Odd',
    difficulty: 'Beginner',
    description: 'Use conditional statements to check if a number is even or odd.',
    problem: `Create a variable 'number' with any integer value.
Write an if-else statement that prints:
- "Even" if the number is even
- "Odd" if the number is odd

Hint: A number is even if number % 2 == 0`,
    starterCode: 'number = 7  # Try different numbers\n\n# Your if-else statement here\n',
    hint: 'Use the modulo operator (%) to check if number % 2 == 0',
    testCode: `
number = 7
if number % 2 == 0:
    print("Even")
else:
    print("Odd")
print("All tests passed!")
`,
  },
  {
    id: 6,
    title: 'Grade Calculator',
    difficulty: 'Beginner',
    description: 'Assign letter grades based on scores.',
    problem: `Create a variable 'score' with a value between 0 and 100.
Write if-elif-else statements to print:
- "A" if score >= 90
- "B" if score >= 80
- "C" if score >= 70
- "D" if score >= 60
- "F" otherwise`,
    starterCode: 'score = 85  # Try different scores\n\n# Your code here\n',
    hint: 'Use if-elif-else chain, checking from highest to lowest',
    testCode: `
score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
elif score >= 60:
    print("D")
else:
    print("F")
print("All tests passed!")
`,
  },
  {
    id: 7,
    title: 'Count to Ten',
    difficulty: 'Beginner',
    description: 'Use a for loop to print numbers.',
    problem: `Write a for loop that prints numbers from 1 to 10 (inclusive).
Each number should be on its own line.`,
    starterCode: '# Write your for loop here\n',
    hint: 'Use range(1, 11) to get numbers 1 through 10',
    testCode: `
for i in range(1, 11):
    print(i)
print("All tests passed!")
`,
  },
  {
    id: 8,
    title: 'Sum of Numbers',
    difficulty: 'Beginner',
    description: 'Calculate sum using a loop.',
    problem: `Write a program that calculates the sum of all numbers from 1 to 100.
Use a for loop and print the final sum.`,
    starterCode: 'total = 0\n\n# Your loop here\n\n# Print the total\n',
    hint: 'Initialize total = 0, then add each number in the loop',
    testCode: `
total = 0
for i in range(1, 101):
    total += i
print(f"Sum: {total}")
print("All tests passed!")
`,
  },
  {
    id: 9,
    title: 'Create a Function',
    difficulty: 'Intermediate',
    description: 'Write a function that squares a number.',
    problem: `Define a function called 'square' that:
- Takes one parameter: number
- Returns the square of that number (number * number)

Then call the function with the number 5 and print the result.`,
    starterCode: '# Define your function here\n\n# Call the function and print result\n',
    hint: 'def square(number): return number * number',
    testCode: `
def square(number):
    return number * number

result = square(5)
print(f"Square of 5 is {result}")
if result == 25:
    print("All tests passed!")
else:
    print("Test failed")
`,
  },
  {
    id: 10,
    title: 'FizzBuzz',
    difficulty: 'Intermediate',
    description: 'Classic programming challenge.',
    problem: `Write a program that prints numbers from 1 to 20, but:
- For multiples of 3, print "Fizz" instead
- For multiples of 5, print "Buzz" instead
- For multiples of both 3 and 5, print "FizzBuzz"
- Otherwise, print the number`,
    starterCode: '# Write your FizzBuzz program here\n',
    hint: 'Check for multiples of 15 first, then 3, then 5',
    testCode: `
for i in range(1, 21):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)
print("All tests passed!")
`,
  },
  {
    id: 11,
    title: 'Count Vowels',
    difficulty: 'Intermediate',
    description: 'Count vowels in a string.',
    problem: `Write a function called 'count_vowels' that:
- Takes a string as parameter
- Returns the number of vowels (a, e, i, o, u) in the string
- Should be case-insensitive

Test it with the string "Hello World"`,
    starterCode: '# Define your function here\n\n# Test it\ntext = "Hello World"\n',
    hint: 'Convert string to lowercase, loop through characters, check if each is in "aeiou"',
    testCode: `
def count_vowels(text):
    count = 0
    for char in text.lower():
        if char in "aeiou":
            count += 1
    return count

result = count_vowels("Hello World")
print(f"Vowels in 'Hello World': {result}")
if result == 3:
    print("All tests passed!")
else:
    print("Test failed")
`,
  },
  {
    id: 12,
    title: 'Reverse a String',
    difficulty: 'Intermediate',
    description: 'Create a function to reverse a string.',
    problem: `Write a function called 'reverse_string' that:
- Takes a string as parameter
- Returns the reversed string

Test it with "Python"
Expected output: "nohtyP"`,
    starterCode: '# Define your function here\n\n# Test it\n',
    hint: 'Use string slicing: text[::-1]',
    testCode: `
def reverse_string(text):
    return text[::-1]

result = reverse_string("Python")
print(result)
if result == "nohtyP":
    print("All tests passed!")
else:
    print("Test failed")
`,
  },
  {
    id: 13,
    title: 'List Comprehension - Squares',
    difficulty: 'Intermediate',
    description: 'Use list comprehension to create a list of squares.',
    problem: `Use list comprehension to create a list of squares of numbers from 1 to 10.
Store the result in a variable called 'squares' and print it.

Expected output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`,
    starterCode: '# Create the list using list comprehension\n',
    hint: '[x**2 for x in range(1, 11)]',
    testCode: `
squares = [x**2 for x in range(1, 11)]
print(squares)
if squares == [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]:
    print("All tests passed!")
else:
    print("Test failed")
`,
  },
  {
    id: 14,
    title: 'Dictionary Operations',
    difficulty: 'Intermediate',
    description: 'Create and manipulate a dictionary.',
    problem: `Create a dictionary called 'student' with:
- name: "John"
- age: 20
- grade: "A"

Then:
1. Add a new key "school" with value "Python University"
2. Update the age to 21
3. Print all keys and values`,
    starterCode: '# Create your dictionary\n',
    hint: 'Use student["key"] = value to add/update',
    testCode: `
student = {
    "name": "John",
    "age": 20,
    "grade": "A"
}
student["school"] = "Python University"
student["age"] = 21
for key, value in student.items():
    print(f"{key}: {value}")
print("All tests passed!")
`,
  },
  {
    id: 15,
    title: 'Find Maximum',
    difficulty: 'Intermediate',
    description: 'Find the maximum value in a list without using max().',
    problem: `Write a function called 'find_max' that:
- Takes a list of numbers as parameter
- Returns the largest number
- Don't use the built-in max() function

Test it with [3, 7, 2, 9, 1, 5]`,
    starterCode: '# Define your function here\n\n# Test it\nnumbers = [3, 7, 2, 9, 1, 5]\n',
    hint: 'Use a variable to track the maximum, loop through the list',
    testCode: `
def find_max(numbers):
    maximum = numbers[0]
    for num in numbers:
        if num > maximum:
            maximum = num
    return maximum

result = find_max([3, 7, 2, 9, 1, 5])
print(f"Maximum: {result}")
if result == 9:
    print("All tests passed!")
else:
    print("Test failed")
`,
  },
];
