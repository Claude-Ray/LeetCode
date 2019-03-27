## 解法一
首先根据 slice 的 Start 值排序

依次对每个 Interval i 向后遍历 j，对 j 所在位置的元素循环检查有无重合，如果有则合并：替换 i 的 End 值，剔除 j 原本元素。
