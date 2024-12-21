enum monacoThemes {
    Dark = 'vs-dark',
    Light = 'light',
}

const LANGUAGES_SNIPPETS: Record<string, string> = {
    javascript: `\nfunction getRandomNumber() {\n\treturn Math.floor(Math.random() * 100) + 1;\n}\n\nconst number = getRandomNumber();\nconsole.log("Number " + number + " generated in JavaScript.");\n`,
    python2: `\nimport random\n\ndef get_random_number():\n\treturn random.randint(1, 100)\n\nnumber = get_random_number()\nprint("Number " + str(number) + " generated in Python 2.")\n`,
    java: `\nimport java.util.Random;\n\npublic class RandomNumber {\n\tpublic static void main(String[] args) {\n\t\tRandom rand = new Random();\n\t\tint randomNum = rand.nextInt(100) + 1;\n\t\tSystem.out.println("Number " + randomNum + " generated in Java.");\n\t}\n}\n`,
    typescript: `\nfunction getRandomNumber(): number {\n\treturn Math.floor(Math.random() * 100) + 1;\n}\n\nfunction describeNumber(num: number): string {\n\tconst parity = num % 2 === 0 ? "even" : "odd";\n\treturn \`Number \${num} is \${parity} and generated in TypeScript.\`;\n}\n\nconst randomNum = getRandomNumber();\nconsole.log(describeNumber(randomNum));\n`,
    php: `\n<?php\nfunction getRandomNumber() {\n\treturn rand(1, 100);\n}\n$number = getRandomNumber();\necho "Number " . $number . " generated in PHP.";\n?>\n`,
}
const unknownSniper =
    'There is no such fragment yet.\nBut you can influence this and send me an interesting option.'

export { monacoThemes, LANGUAGES_SNIPPETS, unknownSniper }
