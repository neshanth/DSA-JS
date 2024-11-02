# Selection Sort

## What is selection Sort?

- Selection Sort is a sorting algorithm which is used for sorting an unordered array into an ordered array
- It has a time complexity of O(n2)
- It is efficient than bubble sort, because it performs swap once at each pass of the loop.
- If the element is already at the correct position, then no swap is done. Contrast this with bubble sort, which performs swap at every comparison.

## Implementation.

- We select the smallest num in the array (index).
- We go through each element in the array, and update the index if something smaller than current is found.
- If a smaller value is found, then swap it with the first index at each pass.
- We keep doing this, until the array is sorted.

## Notes (Code)

- Start a for-loop, that goes till the second last.(No need to go to the last, since arr will be sorted by then)
- Keep the first index in each pass as the lowest index variable
- Inside the inner for-loop, if a value smaller than lowest index is found, update the variable.
- When the inner for-loop is over, swap the elements, if it is not at correct position. Check the lowest index !== current "i"
