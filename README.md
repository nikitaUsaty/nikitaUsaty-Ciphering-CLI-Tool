# nikitaUsaty-Ciphering-CLI-Tool

## About

This tool lets you encode and/or decode a text by Caesar/ROT8/Atbash ciphers.

## Install

Open command line in the folder where you want to clone this program. Clone repository using command below.

```bash
git clone https://github.com/Hellsingi/CLI-tool.git
git checkout Caesar_cipher_cli
```

Install dependencies

## How it works

The CLI tool is accepted 3 options (short alias and full name):

1.  **-c, --config**: config for ciphers Config is a string with pattern {XY(-)}n, where:
    X is a cipher mark:
    C is for Caesar cipher (with shift 1)
    A is for Atbash cipher
    R is for ROT-8 cipher
    Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
    1 is for encoding
    0 is for decoding
    **required!!!**

2.  **-i, --input**: a path to input file**optional**
3.  **-o, --output**: a path to output file **optional**

## Usage example:

```bash
node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

input.txt This is secret. Message about "_" symbol!
output.txt Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!
