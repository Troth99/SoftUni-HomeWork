function signCheck(num1, num2, num3){
   let negative = 0

   if (num1 < 0) negative++
   if (num2 < 0) negative++
   if (num3 < 0) negative++

   let result = negative % 2 === 0 ? 'Positive':'Negative'
   console.log(result);
   
    }

signCheck(-6,
    -12,
     14
)
signCheck( 5,
    12,
   -15
   )

   signCheck(-1,
    -2,
    -3
    )

    signCheck(-5,
        1,
        1
       )