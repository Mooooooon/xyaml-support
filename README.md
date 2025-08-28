# XYAML Support

Welcome to XYAML Support for Visual Studio Code!

This extension provides basic syntax highlighting for the `.xyaml` file format, which blends the structure of XML with the readability of YAML.

## Features

Currently, this extension offers:

- **Syntax Highlighting**: Differentiates between the outer XML tags and the inner YAML content, making your `.xyaml` files easy to read and navigate.

Here is an example of the highlighting in action:

```xyaml
<xyaml>
# Basic data types
title: "My Application Configuration"
version: 1
enabled: true

# Lists (Sequences)
features:
  - User Authentication
  - Data Management
  - Report Export

# Dictionaries (Mappings)
database:
  type: postgresql
  host: db.example.com
  port: 5432
</xyaml>
```

## Upcoming Features

We are just getting started! Future updates may include:
- Code snippets for common XYAML structures.
- Auto-completion.
- Validation and error checking.

## Installation

You can install this extension from the Visual Studio Code Marketplace.

**Enjoy!**