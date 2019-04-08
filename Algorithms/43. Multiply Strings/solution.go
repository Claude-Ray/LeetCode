package problem43

func multiply(num1 string, num2 string) string {
	if num1 == "0" || num2 == "0" {
		return "0"
	}
	byte1 := []byte(num1)
	byte2 := []byte(num2)
	// use int instead of byte to prevent overflow
	temp := make([]int, len(num1)+len(num2))
	for i := 0; i < len(byte1); i++ {
		for j := 0; j < len(byte2); j++ {
			temp[i+j+1] += int(byte1[i]-'0') * int(byte2[j]-'0')
		}
	}
	// calculating carry, converting int to byte
	res := make([]byte, len(temp))
	for i := len(temp) - 1; i > 0; i-- {
		temp[i-1] += temp[i] / 10
		res[i] = byte(temp[i]%10) + '0'
	}
	if temp[0] == 0 {
		res = res[1:]
	} else {
		res[0] = byte(temp[0]) + '0'
	}
	return string(res)
}
