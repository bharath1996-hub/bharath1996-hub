export const lessons = [
  {
    id: 1,
    title: 'Introduction to Python',
    difficulty: 'Beginner',
    description: 'Learn what Python is and why it\'s one of the most popular programming languages.',
    content: `Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python emphasizes code readability and allows programmers to express concepts in fewer lines of code.

Why Learn Python?
• Easy to learn and use
• Versatile - used in web development, data science, AI, automation
• Large community and extensive libraries
• High demand in job market
• Great for beginners and professionals alike

Python is used by companies like Google, Netflix, Instagram, NASA, and many more!`,
    examples: [
      'print("Hello, World!")',
      '# This is a comment\nprint("Comments start with #")',
    ],
  },
  {
    id: 2,
    title: 'Variables and Data Types',
    difficulty: 'Beginner',
    description: 'Understand how to store and work with different types of data in Python.',
    content: `Variables are containers for storing data values. In Python, you don't need to declare variable types - Python figures it out automatically!

Basic Data Types:
• Integers (int): Whole numbers like 5, -3, 1000
• Floats (float): Decimal numbers like 3.14, -0.5
• Strings (str): Text enclosed in quotes like "Hello"
• Booleans (bool): True or False values

Variable Naming Rules:
• Must start with a letter or underscore
• Can contain letters, numbers, and underscores
• Case-sensitive (age and Age are different)
• Cannot use Python keywords`,
    examples: [
      '# Variables\nname = "Alice"\nage = 25\nheight = 5.6\nis_student = True\n\nprint(name)\nprint(age)',
      '# Multiple assignment\nx, y, z = 1, 2, 3\nprint(x, y, z)',
      '# Type checking\nprint(type(age))\nprint(type(height))',
    ],
  },
  {
    id: 3,
    title: 'Strings and String Operations',
    difficulty: 'Beginner',
    description: 'Master working with text data in Python.',
    content: `Strings are sequences of characters used to store and manipulate text. Python provides many powerful ways to work with strings.

String Creation:
• Single quotes: 'Hello'
• Double quotes: "Hello"
• Triple quotes: """Multi-line string"""

Common String Operations:
• Concatenation: joining strings together with +
• Length: len(string) returns the number of characters
• Indexing: access individual characters with [index]
• Slicing: extract parts of a string with [start:end]
• Methods: upper(), lower(), strip(), replace(), split()

F-strings (formatted strings) let you embed expressions inside strings using {}.`,
    examples: [
      '# String concatenation\nfirst = "Hello"\nlast = "World"\nfull = first + " " + last\nprint(full)',
      '# String methods\ntext = "  Python Programming  "\nprint(text.upper())\nprint(text.strip())\nprint(text.replace("Python", "Java"))',
      '# F-strings\nname = "Alice"\nage = 25\nprint(f"{name} is {age} years old")',
      '# String slicing\ntext = "Python"\nprint(text[0])    # First character\nprint(text[-1])   # Last character\nprint(text[0:3])  # First 3 characters',
    ],
  },
  {
    id: 4,
    title: 'Lists and List Operations',
    difficulty: 'Beginner',
    description: 'Learn to work with ordered collections of items.',
    content: `Lists are ordered, mutable collections that can contain items of different types. They're one of the most versatile data structures in Python.

List Characteristics:
• Ordered: items maintain their position
• Mutable: can be changed after creation
• Allow duplicates
• Can contain mixed data types

Common List Operations:
• append(): add item to end
• insert(): add item at specific position
• remove(): remove specific item
• pop(): remove item by index
• sort(): arrange items in order
• reverse(): reverse the order

List indexing and slicing work like strings!`,
    examples: [
      '# Creating lists\nfruits = ["apple", "banana", "cherry"]\nnumbers = [1, 2, 3, 4, 5]\nmixed = [1, "hello", 3.14, True]\n\nprint(fruits)',
      '# List operations\nfruits = ["apple", "banana"]\nfruits.append("cherry")\nfruits.insert(0, "mango")\nprint(fruits)',
      '# List slicing\nnumbers = [0, 1, 2, 3, 4, 5]\nprint(numbers[1:4])\nprint(numbers[:3])\nprint(numbers[3:])',
      '# List comprehension\nsquares = [x**2 for x in range(5)]\nprint(squares)',
    ],
  },
  {
    id: 5,
    title: 'Conditional Statements',
    difficulty: 'Beginner',
    description: 'Make decisions in your code with if, elif, and else.',
    content: `Conditional statements allow your program to make decisions and execute different code based on conditions.

The if Statement:
Executes code only if a condition is True.

The elif Statement:
Checks another condition if the previous ones were False.

The else Statement:
Executes if all previous conditions were False.

Comparison Operators:
• == (equal to)
• != (not equal to)
• > (greater than)
• < (less than)
• >= (greater than or equal)
• <= (less than or equal)

Logical Operators:
• and: both conditions must be True
• or: at least one condition must be True
• not: reverses the condition`,
    examples: [
      '# Simple if statement\nage = 18\nif age >= 18:\n    print("You are an adult")',
      '# if-else statement\ntemperature = 25\nif temperature > 30:\n    print("It\'s hot!")\nelse:\n    print("It\'s nice!")',
      '# if-elif-else statement\nscore = 85\nif score >= 90:\n    print("Grade: A")\nelif score >= 80:\n    print("Grade: B")\nelif score >= 70:\n    print("Grade: C")\nelse:\n    print("Grade: F")',
      '# Logical operators\nage = 25\nhas_license = True\nif age >= 18 and has_license:\n    print("You can drive!")',
    ],
  },
  {
    id: 6,
    title: 'Loops - For and While',
    difficulty: 'Beginner',
    description: 'Repeat actions efficiently using loops.',
    content: `Loops allow you to execute code repeatedly without writing it multiple times.

For Loops:
Used to iterate over sequences (lists, strings, ranges, etc.)
Syntax: for item in sequence:

While Loops:
Repeats as long as a condition is True
Syntax: while condition:

Loop Control:
• break: exit the loop immediately
• continue: skip to next iteration
• else: execute when loop completes normally

The range() function:
• range(5) → 0, 1, 2, 3, 4
• range(1, 6) → 1, 2, 3, 4, 5
• range(0, 10, 2) → 0, 2, 4, 6, 8`,
    examples: [
      '# For loop with range\nfor i in range(5):\n    print(f"Count: {i}")',
      '# For loop with list\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)',
      '# While loop\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1',
      '# Loop with break\nfor i in range(10):\n    if i == 5:\n        break\n    print(i)',
      '# Nested loops\nfor i in range(3):\n    for j in range(3):\n        print(f"({i}, {j})")',
    ],
  },
  {
    id: 7,
    title: 'Functions',
    difficulty: 'Intermediate',
    description: 'Organize your code into reusable blocks.',
    content: `Functions are reusable blocks of code that perform specific tasks. They help organize code and avoid repetition.

Function Basics:
• Defined with 'def' keyword
• Can take parameters (inputs)
• Can return values (outputs)
• Called by using function name with ()

Parameters vs Arguments:
• Parameters: variables in function definition
• Arguments: actual values passed when calling

Return Statement:
Functions can return values using 'return'
Without return, functions return None

Default Parameters:
You can provide default values for parameters

*args and **kwargs:
Accept variable number of arguments`,
    examples: [
      '# Simple function\ndef greet():\n    print("Hello!")\n\ngreet()',
      '# Function with parameters\ndef greet(name):\n    print(f"Hello, {name}!")\n\ngreet("Alice")',
      '# Function with return\ndef add(a, b):\n    return a + b\n\nresult = add(5, 3)\nprint(result)',
      '# Default parameters\ndef power(base, exp=2):\n    return base ** exp\n\nprint(power(3))      # 9\nprint(power(3, 3))   # 27',
      '# Multiple returns\ndef min_max(numbers):\n    return min(numbers), max(numbers)\n\nminimum, maximum = min_max([1, 5, 3, 9, 2])\nprint(minimum, maximum)',
    ],
  },
  {
    id: 8,
    title: 'Dictionaries',
    difficulty: 'Intermediate',
    description: 'Store data in key-value pairs.',
    content: `Dictionaries are unordered collections of key-value pairs. They're extremely useful for storing related data.

Dictionary Characteristics:
• Unordered (before Python 3.7) / Ordered (3.7+)
• Mutable: can be changed
• Keys must be unique
• Keys must be immutable (strings, numbers, tuples)
• Values can be any type

Common Operations:
• Access: dict[key]
• Add/Update: dict[key] = value
• Remove: del dict[key] or dict.pop(key)
• Check: key in dict
• Methods: keys(), values(), items(), get()

Dictionaries are perfect for:
• Storing configuration
• Counting occurrences
• Mapping relationships
• Creating lookup tables`,
    examples: [
      '# Creating dictionaries\nperson = {\n    "name": "Alice",\n    "age": 25,\n    "city": "New York"\n}\nprint(person["name"])',
      '# Dictionary methods\nprint(person.keys())\nprint(person.values())\nprint(person.items())',
      '# Adding and updating\nperson["email"] = "alice@email.com"\nperson["age"] = 26\nprint(person)',
      '# Iterating dictionaries\nfor key, value in person.items():\n    print(f"{key}: {value}")',
      '# Dictionary comprehension\nsquares = {x: x**2 for x in range(5)}\nprint(squares)',
    ],
  },
  {
    id: 9,
    title: 'List Comprehensions',
    difficulty: 'Intermediate',
    description: 'Create lists efficiently with compact syntax.',
    content: `List comprehensions provide a concise way to create lists based on existing lists or other iterables.

Basic Syntax:
[expression for item in iterable]

With Condition:
[expression for item in iterable if condition]

With Multiple Conditions:
[expression for item in iterable if condition1 if condition2]

Nested Comprehensions:
[expression for item1 in iterable1 for item2 in iterable2]

Advantages:
• More readable and concise
• Usually faster than traditional loops
• More Pythonic code style

Can also create:
• Set comprehensions: {expression for item in iterable}
• Dict comprehensions: {key: value for item in iterable}`,
    examples: [
      '# Basic list comprehension\nsquares = [x**2 for x in range(10)]\nprint(squares)',
      '# With condition\nevens = [x for x in range(20) if x % 2 == 0]\nprint(evens)',
      '# Transform strings\nwords = ["hello", "world"]\nupper_words = [word.upper() for word in words]\nprint(upper_words)',
      '# Nested comprehension\nmatrix = [[i*j for j in range(3)] for i in range(3)]\nprint(matrix)',
      '# Conditional expression\nnumbers = [1, 2, 3, 4, 5]\nresult = ["even" if x % 2 == 0 else "odd" for x in numbers]\nprint(result)',
    ],
  },
  {
    id: 10,
    title: 'Error Handling',
    difficulty: 'Intermediate',
    description: 'Handle errors gracefully in your programs.',
    content: `Error handling allows your program to deal with unexpected situations without crashing.

Try-Except Block:
• try: code that might raise an error
• except: code to run if error occurs
• else: runs if no error occurred
• finally: always runs, error or not

Common Exceptions:
• ValueError: invalid value
• TypeError: wrong type
• KeyError: dictionary key not found
• IndexError: list index out of range
• FileNotFoundError: file doesn't exist
• ZeroDivisionError: division by zero

Catching Specific Exceptions:
You can catch specific exception types to handle different errors differently.

Raising Exceptions:
Use 'raise' to trigger exceptions manually.`,
    examples: [
      '# Basic try-except\ntry:\n    number = int("abc")\nexcept ValueError:\n    print("Invalid number!")',
      '# Multiple exceptions\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")\nexcept ValueError:\n    print("Invalid value!")',
      '# Try-except-else-finally\ntry:\n    x = 10 / 2\nexcept ZeroDivisionError:\n    print("Error!")\nelse:\n    print("Success!")\nfinally:\n    print("Done!")',
      '# Catching exception object\ntry:\n    numbers = [1, 2, 3]\n    print(numbers[10])\nexcept IndexError as e:\n    print(f"Error: {e}")',
    ],
  },
];
