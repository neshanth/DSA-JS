# Binary Search

## What is Binary Search?

- Binary search is a search algorithm that can efficiently determine if a sorted array of integers contain a specific number.
- The algorithm repeatedly divides the input array into half until the target element is found, thereby decreasing the search space by half each step.
- It is a significant improvement versus linear search.
- It has a time complexity of O(log n), because it divides the search space by half.

## Implementation

- Create 2 pointers left and right. L = 0 and R = length - 1;
- Iterate using a while-loop, till L <=R.
- Find the midpoint of L and R.
- If element is less than target, set left = mid + 1
- If element is greater than target set right = mid - 1
- If the element is === target, then return that index.
