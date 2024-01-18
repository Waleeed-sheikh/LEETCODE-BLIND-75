class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
            #a ho ga countS me to 1+1=2 ho jayega
            #a nhi ho ga countS me to 1+0=1 ho jayega
            #countS.get(s[i], 0) ye is liye likha hai k agar countS me s[i] nhi ho ga to 0 ho jayega
            #countS.get() function is liye use hota hai k vo set me key ki value deta k vo kitni hai

        countS, countT = {}, {}

        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)
        return countS == countT


        






        # if len(s) != len(t):
        #     return False

        # countS, countT = {}, {}

        # for i in range(len(s)):
        #     countS[s[i]] = 1 + countS.get(s[i], 0)
        #      #a ho ga countS me to 1+1=2 ho jayega
        #     #a nhi ho ga countS me to 1+0=1 ho jayega
        #     #countS.get(s[i], 0) ye is liye likha hai k agar countS me s[i] nhi ho ga to 0 ho jayega
        #     #countS.get() function is liye use hota hai k vo set me key ki value deta k vo kitni hai
        #     countT[t[i]] = 1 + countT.get(t[i], 0)
        # return countS == countT
