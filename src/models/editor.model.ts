const MONACO_THEMES = ['vs-dark', 'light']

const LANGUAGES_SNIPPETS: Record<string, string> = {
    javascript: `\nfunction getRandomNumber() {\n\treturn Math.floor(Math.random() * 100) + 1;\n}\n\nconsole.log(getRandomNumber());\n`,
    python: `\nimport random\n\ndef get_random_number():\n\treturn random.randint(1, 100)\n\nprint(get_random_number())\n`,
    java: `\nimport java.util.Random;\n\npublic class RandomNumber {\n\tpublic static void main(String[] args) {\n\t\tRandom rand = new Random();\n\t\tint randomNum = rand.nextInt(100) + 1;\n\t\tSystem.out.println(randomNum);\n\t}\n}\n`,
    typescript: `\nfunction getRandomNumber(): number {\n\treturn Math.floor(Math.random() * 100) + 1;\n}\n\nconsole.log(getRandomNumber());\n`,
    php: `\n<?php\nfunction getRandomNumber() {\n\treturn rand(1, 100);\n}\necho getRandomNumber();\n?>\n`,
}

export { MONACO_THEMES, LANGUAGES_SNIPPETS }
