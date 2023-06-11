
namesArray = ['fred', 'george', 'tom']

console.log('namesArray in score.js:', namesArray)



function generateGameHTML() {
    console.log('generateGameHTML is running in score.js')
    row_num = window.prompt("Input number of rows", 1);

    // console.log(namesArray)
    console.log(namesArray.length)
    col_num = namesArray.length;
    // console.log(cn)
    // console.log(players)
    // cn = window.prompt("Input number of columns",1);
      
     for(let r = 0; r < parseInt(row_num,10); r++) {
       let x=document.getElementById('myTable').insertRow(r);
       for(let c = 0; c < parseInt(col_num,10); c++) {
         let y = x.insertCell(c);
          y.id = (`${r}, ${c}`)
          console.log(y.id)

          y.innerHTML="Row-"+r+" Column-"+c; 
          
        if (y.id[0] == 0) {
            // console.log(y.id[0][1])
            console.log('if statement is running')
            
            for(i = 0; i <namesArray.length; i++) {
            console.log('for statement is running')
        //     console.log('namesArray.length:', namesArray.length)
                console.log('i:', i)
                console.log('namesArray[i]:', namesArray[i])
                let id = (`0, ${i}`)
                // my understanding of this is that i should be equal to 0, 1, and 2 becuase of the for loop 
                // i = 0 (i starts at zero) i < namesArray.length if names array.length = 3 (i will stop at 2)
                // i++ (i will continue in incriments of one)
                // this should give me three ids 
                console.log(id)

                document.getElementById(id).innerHTML = namesArray[i]
                // this is getting the element by id (three ids) and should be setting the value as the value of namesArray index of i 
            }
       
              }

        }
     }

 }


$(generateGameHTML);
// $(displayGames);




     //   if (y.id[0] == 0) {
        //     console.log('if statement is running')
        //     for(i = 0; i <= namesArray.length; i++) {
        //     console.log('namesArray[i]:', namesArray[i])
        //     console.log('namesArray[2]:', namesArray[2])
        //     console.log
        //         for(let y = 0; y < y.length; y++)
        //             y.innerHTML = namesArray[i]
        //     // y.innerHTML = namesArray[2]
        //     // console.log(y.innerHTML)
        //     }
        //   }



       //         document.getElementById(`0, ${(y.id[0][i])}`).innerHTML = namesArray[i]
            //    firstYID = 0, (y.id[0][`${i}`])
            //  firstYID = document.getElementById(`0, ${(y.id[0][i])}`)
            // firstYID = document.getElementById('0, 0')
            // this one came back use this format as a string for the id 
            // y.innerHTML = 'this is ys inner html'
            // console.log('firstYID:', firstYID)
            // console.log('yById:', document.getElementById(0,0))
            // console.log('yById:', $('#0, 0'))
            // y.getElementById(0,(y.id[0][`${i}`])).innerHTML = namesArray[i]


                    // }
                    // if(y.id[0][i]) {
                    //     y.innerHTML = namesArray[i]
                    // }
                // console.log('namesArray[i]:', namesArray[i])
                // console.log('namesArray[2]:', namesArray[2])
                // console.log
                // namesArray.forEach(ele, i) => {
                //     y.innerHTML = namesArray[i]
                // }
                    // for(let y = 0; y < y.length; y++)
                    //     y.innerHTML = namesArray[i]
                // y.innerHTML = namesArray[2]
                // console.log(y.innerHTML)
                // }
            // }

            // y.innerHTML="Row-"+r+" Column-"+c; 
                // y.innerHTML = y.id