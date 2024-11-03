# Insertion Sort

## What is bubble Sort?

- Insertion Sort is a sorting algorithm which is used for sorting an unordered array into an ordered array
- It has a time complexity of O(n2)

## Implementation.

- We select a temporary value from the array.
- We compare that value with the value on the left of it.
- If the value on left is greater than temporary value, we move that value to the right side.
- We keep doing this, until we reach the left end of the array or if element on the left is lesser than temporary value.

## Notes (Code)

- Inside the for-loop, we create a variable called temp_value that stores the temporary value we are using to compare. This will be the first index initially.
- Create another variable called positionToCompare. This will keep track of postion of elements on the left of temp.
- Inside the while-loop, check if value at position > than temp_value. If so, move this position value to the right side.
- Else, if value is already smaller than temp, break out of the while-loop.
- Keep decrementing the position, till it is less than 0.
- Once while-loop terminates, place temp value at correct position. The reason we are doing pos + 1, is because if index < 0, then adding +1 will make it === 0. This helps to place temp_value at 0th index.
