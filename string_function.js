// Demonstrates use of exporting and importing functions etc.
    // Here we're exporting the capitalizeString() and two const variables foo and bar.
const capitalizeString = (string) => {
    return string.toUpperCase();
}

export const foo = "bar";
export const bar = "foo";

export { capitalizeString };