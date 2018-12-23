# Read from the file file.txt and output all valid phone numbers to stdout.

# GNU style
grep -P '^(\d{3}-|\(\d{3}\) )\d{3}-\d{4}$' file.txt

# BSD style
# grep -E '^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$' file.txt
