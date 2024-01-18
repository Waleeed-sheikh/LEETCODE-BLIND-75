from ast import List
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevMap = {}

        for index, n in enumerate(nums):
            diff = target - n
            if diff in prevMap:
                return [prevMap[diff],index]
                
            prevMap[n] = index