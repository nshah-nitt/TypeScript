# TypeScript Learning Playground

This repository serves as a personal playground for exploring and demonstrating various features of TypeScript. It contains a collection of code examples covering fundamental to advanced concepts.

## Acknowledgements

The concepts and examples in this repository are heavily inspired by the "Understanding TypeScript" course by Maximilian Schwarzmüller. The original resources can be found [here](https://github.com/mschwarzmueller/understanding-typescript-resources).

## Concepts Covered

This project includes examples for:

- **Core Concepts**: Interfaces, Classes, and Type Aliases.
- **Generics**: Creating reusable components that can work over a variety of types.
- **Advanced Types**: Union Types and Mapped Types.
- **Type Guards**: Using `instanceof` and `typeof` for type narrowing.
- **Operators**: The `keyof` and `satisfies` operators.
- **Utility Types**: Examples of built-in utility types like `Record<K, T>`.

## Project Structure

The source code is organized by concept within the `src/` directory:

- `src/Classes/`: Examples related to classes and interfaces.
- `src/Advance/`: Demonstrations of more advanced TypeScript features.
- `dist/`: Contains the compiled JavaScript output after running the build process.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory and install the dependencies:
    ```bash
    cd typescript
    npm install
    ```

## Running the Code

1.  **Build the project:**
    This command compiles all TypeScript files from `src/` to JavaScript in the `dist/` directory.

    ```bash
    npm run build
    ```

2.  **Run a specific file:**
    Execute a compiled file using Node.js.

    ```bash
    node dist/Classes/interfaces.js
    ```

3.  **Run directly with ts-node (optional):**
    For quicker testing without a separate build step, you can use `ts-node`.
    ```bash
    npx ts-node src/Classes/interfaces.ts
    ```

## License

MIT
