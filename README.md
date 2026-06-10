# Brain Games

Набор консольных игр для развития логики и арифметических навыков. Каждая игра задаёт три вопроса — нужно дать правильные ответы подряд. При ошибке игра завершается и предлагает попробовать заново.

## Hexlet tests and linter status:

[![Actions Status](https://github.com/lemoneden/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/lemoneden/frontend-project-44/actions)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=lemoneden_frontend-project-44&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=lemoneden_frontend-project-44)

## 🎮 Игры

| Название             | Описание                                                                 |
|----------------------|--------------------------------------------------------------------------|
| **brain-even**       | Определить, чётное ли число? Ответьте `yes` или `no`.                    |
| **brain-calc**       | Вычислить результат арифметического выражения (+, -, *).                 |
| **brain-gcd**        | Найти наибольший общий делитель (НОД) двух чисел.                        |
| **brain-progression**| Найти пропущенное число в арифметической прогрессии.                     |
| **brain-prime**      | Определить, является ли число простым? Ответьте `yes` или `no`.          |

## 🦽 Технологии

- **Git**
- **JavaScript**
- ~~Преподаватель~~

## 🚀 Установка и запуск

### 1. Установите Node.js (версия 16 или выше)

### 2. Клонируйте репозиторий и перейдите в папку проекта:
```bash
git clone https://github.com/lemoneden/frontend-project-44.git
cd frontend-project-44
```

### 3. Установите зависимости:

```bash
make install
```

или

```bash
npm ci
```

### 4.Установите пакет глобально (для запуска игр из любой директории):

```bash
npm link
```

### 5. Запустите любую игру командой:

```bash
brain-even
brain-calc
brain-gcd
brain-progression
brain-prime
```

## 📸 Примеры работы

### Примеры работы в игре «Чётность»

#### Победа в игре «Чётность»

```bash
$ brain-even
Welcome to the Brain Games!
May I have your name? Orinys
Hello, Orinys
Answer "yes" if the number is even, otherwise answer "no".
Question: 39
Your answer: no
Correct!
Question: 52
Your answer: yes
Correct!
Question: 43
Your answer: no
Correct!
Congratulations, Orinys!
```

#### Поражение в игре «Чётность»

```bash
$ brain-even
Welcome to the Brain Games!
May I have your name? Orinys
Hello, Orinys
Answer "yes" if the number is even, otherwise answer "no".
Question: 12
Your answer: yes
Correct!
Question: 60
Your answer: no
'no' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, Orinys!
```

### Примеры работы в игре «Калькулятор»

#### Победа в игре «Калькулятор»
```bash
$ brain-calc
Welcome to the Brain Games!
May I have your name? Orinys
Hello, Orinys
What is the result of the expression?
Question: 96 - 6
Your answer: 90
Correct!
Question: 92 - 58
Your answer: 34
Correct!
Question: 88 - 56
Your answer: 32
Correct!
Congratulations, Orinys!
```

#### Поражение в игре «Калькулятор»
```bash
$ brain-calc
Welcome to the Brain Games!
May I have your name? Orinys
Hello, Orinys
What is the result of the expression?
Question: 14 - 52
Your answer: -38
Correct!
Question: 83 * 10
Your answer: 83
'83' is wrong answer ;(. Correct answer was '830'.
Let's try again, Orinys!
```

### Примеры работы в игре «НОД»

#### Победа в игре «НОД»
```bash
$ brain-gcd
Welcome to the Brain Games!
May I have your name? Orinys
Hello, Orinys
Find the greatest common divisor of given numbers.
Question: 71 48
Your answer: 1
Correct!
Question: 28 85
Your answer: 1
Correct!
Question: 8 34
Your answer: 2
Correct!
Congratulations, Orinys!
```

#### Поражение в игре «НОД»
```bash
$ brain-gcd
Welcome to the Brain Games!
May I have your name? Orinys
Hello, Orinys
Find the greatest common divisor of given numbers.
Question: 18 77
Your answer: 1
Correct!
Question: 38 57
Your answer: 2
'2' is wrong answer ;(. Correct answer was '19'.
Let's try again, Orinys!
```

### Примеры работы в игре «Арифметическая прогрессия»

#### Победа в игре «Арифметическая прогрессия»
```bash
$ brain-progression
Welcome to the Brain Games!
May I have your name? Orinys
Hello, Orinys
What number is missing in the progression?
Question: 5 8 11 14 17 .. 23 26 29 32
Your answer: 20
Correct!
Question: 2 10 18 .. 34 42 50 58 66 74
Your answer: 26
Correct!
Question: 0 10 20 30 40 50 .. 70 80 90
Your answer: 60
Correct!
Congratulations, Orinys!
```

#### Поражение в игре «Арифметическая прогрессия»
```bash
$ brain-progression
Welcome to the Brain Games!
May I have your name? Orinys
Hello, Orinys
What number is missing in the progression?
Question: 10 20 30 40 50 60 70 80 90 ..
Your answer: 100
Correct!
Question: 8 11 14 17 .. 23 26 29 32 35
Your answer: 18
'18' is wrong answer ;(. Correct answer was '20'.
Let's try again, Orinys!
```

### Примеры работы в игре «Простое ли число?»

#### Победа в игре «Простое ли число?»
```bash
$ brain-prime
Welcome to the Brain Games!
May I have your name? Orinys
Hello, Orinys
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 54
Your answer: no
Correct!
Question: 12
Your answer: no
Correct!
Question: 27
Your answer: no
Correct!
Congratulations, Orinys!
```

#### Поражение в игре «Простое ли число?»

```bash
$ brain-prime
Welcome to the Brain Games!
May I have your name? Orinys
Hello, Orinys
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 95
Your answer: no
Correct!
Question: 21
Your answer: yes
'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, Orinys!
```


## 📞 Контакты

-   **Автор:** Орина Оринус
-   **Email:** [ApelsinGilka@yandex.ru](ApelsinGilka@yandex.ru), [karyatinas@gmail.com](mailto:karyatinas@gmail.com)
-   **GitHub:** [@lemoneden](https://github.com/lemoned)
