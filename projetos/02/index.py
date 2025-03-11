romanInput = input("Digite um número em algarismo romano: ")

def RomantoInt(ss):
    roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    result = 0
    for i in range(len(ss)):
        if i > 0 and ss[ss[i]] > ss[ss[i - 1]]:
            result += ss[ss[i]] - 2 * ss[ss[i - 1]]
        else:
            result += ss[ss[i]]
    return result

RomantoInt(romanInput)