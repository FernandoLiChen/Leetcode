#### Leetcode Link: 

> https://leetcode.com/problems/merge-strings-alternately

### Problem Statement

> You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string. 
>
> Return *the merged string*.
>
>  
>
> **Example 1:**
>
> ```
> Input: word1 = "abc", word2 = "pqr"
> Output: "apbqcr"
> Explanation: The merged string will be merged as so:
> word1:  a   b   c
> word2:    p   q   r
> merged: a p b q c r
> ```
>
> **Example 2:**
>
> ```
> Input: word1 = "ab", word2 = "pqrs"
> Output: "apbqcrs"
> Explanation: Notice that as word2 is longer, "rs" is appended to the end.
> word1:  a   b   
> word2:    p   q   r   s
> merged: a p b q   r   s
> ```
>
> **Example 3:**
>
> ```
> Input: word1 = "abcd", word2 = "pq"
> Output: "apbqcd"
> Explanation: Notice that as word1 is longer, "cd" is appended to the end.
> word1:  a   b   c   d
> word2:    p   q 
> merged: a p b q c   d
> ```
>
>  
>
> **Constraints:**
>
> - 1 <= word1.length, word2.length <= 100
> - word1 and word2 consist of lowercase English letters.

#### Approach: 

1. Create a new variable to store max length of the words
2. Initialize an empty string to store the result.
3. Traverse in the loop and merge the words if they are within the bounds. 
4. Iterate until the max length of the string is reached. 
5. Return the merged string.


**Complexity Analysis:**

- **Time complexity : O(n)**. We traverse until n times which is equal to the max word length.
- **Space complexity : O(n)**. The space complexity is determined by the length of the result string which is n with the max length.

#### **Tags**:
- Two Pointers
- String
    