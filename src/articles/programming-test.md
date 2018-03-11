1. Median of an array of number
2. Validate that it is correct 
3. Odd / even edge case
4. What to do when the array is empty? 
5. Null
6. Document it 
7. what should / could we do about side-effects?
8. Wrap it in a module? AMD / CommonJS
9. Export it? 
10. Add types  
11. const / var / let?
12. naming of functions and variables?
13. Make it a method? 
14. USage of '===' versus '=='? 
15. What are your assumptions? 
16. Add some documentation?
17. Use the conditional / ternary operator.
18. Semi-colons.
19. Does it work? What values does it work for? 
20. Show me the median for some values.
21. Can you make it more compact? 

function median(xs) {
    let tmp = [..xs];
    tmp.sort();
    let half = tmp.length / 2;
    return tmp.length % 2 == 0 
        ? tmp[half-1] + tmp[half+1] / 2;
        : tmp[half];
}
