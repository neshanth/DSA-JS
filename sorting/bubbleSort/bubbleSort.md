# Bubble Sort

## What is bubble Sort?

- Bubble Sort is a sorting algorithm which is used for sorting an unordered array into an ordered array
- It has a time complexity of O(n2)

## Implementation.

- We select the first and second element in the array.
- We compare these two elements.
- If they are not sorted we swap them.
- We keep doing this, until the elements are sorted.

## Notes (Code)

- Unsorted index is used to keep track of element index that is already sorted.
- Sorted flag is used to prevent unwanted iterations. If the array is already sorted before going into for-loop, it will prevent unwanted iterations.
- Once a pass through is completed, decrement the unsorted index. This helps prevent checking already sorted elements.
