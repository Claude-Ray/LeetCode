这道题关键在于自定义排序算法，但不要较真于字节级比较……陷进去就很难出来了，喝口水的功夫换个思路。直接比较两种相加的结果即可。

另外需要注意全 0 的情况。

golang的解法自定义 []int 要比 []string 快，但基本逻辑一样。