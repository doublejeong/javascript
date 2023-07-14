
            // 변수의 선언, 초기화, 할당
         
        //  var variableName1;         //선언
        //  variableName1 = 100;      //할당
        //  alert("variableName1 : " + variableName1);
         
         
        //  var variableName2 = 200;   //선언 및 초기화
        //  variableName2 = 300;      //할당
        //  alert("variableName2 : " + variableName2);

        /*
        변수에는 모든 자료형을 담을 수 있습니다.
        자료형 : 문자, 숫자, 불리언, 함수, 객체, undefined
        */

        var varStr = 'ABCDEF';
        console.log("varStr : " + varStr);
       
        var varNum = 12.7;
        console.log("varNum : " + varNum);
        
        var varBoo = false;
        console.log("varBoo : " + varBoo);
       
        var varFun = function fun(){};
        console.log("varFun : " + varFun);

        var varObj = {};
        console.log("varObj : " + varObj);
       
        var varUnd = undefined;
        console.log("varUnd : " + varUnd);
       
        /*
            undefined : 선언만 하고 초기화(할당)하지 않은 변수
         */
        //  var varUndfined;
        //  console.log("varUndfined : " + varUndfined);
         
        //  varUndfined = 1;
        //  console.log("varUndfined : " + varUndfined);
         
         
         /*
            javascript에서는 변수에 담긴 자료형을 변경할 수 있습니다.
         */
         var varTemp;
         varTemp = "ABCDEF";
         console.log("varTemp : " + varTemp);
         console.log("varTemp : " + typeof(varTemp));
         varTemp = 123456;
         console.log("varTemp : " + varTemp);
         console.log("varTemp : " + typeof(varTemp));
         varTemp = true;
         console.log("varTemp : " + varTemp);
         console.log("varTemp : " + typeof(varTemp));
         varTemp = function() {};
         console.log("varTemp : " + varTemp);
         console.log("varTemp : " + typeof(varTemp));
         varTemp = {};
         console.log("varTemp : " + varTemp);
         console.log("varTemp : " + typeof(varTemp));
         varTemp = undefined;
         console.log("varTemp : " + varTemp);
         console.log("varTemp : " + typeof(varTemp));

         /*
         자료형 변환
         */
        var varType = "123";
        console.log("varType type : " + typeof(varType));
        console.log("varType : " + (varType + 1000));


        //////////////성적표//////////////////
        var kor = Number(prompt("국어 점수를 입력하세요"));
        var eng = Number(prompt("영어 점수를 입력하세요"));
        var math = Number(prompt("수학 점수를 입력하세요"));
    
        var total = kor + eng + math;
        var avg = total / 3.0 ; 
        
        document.write("총점 : " + total + "<br/>");
        document.write("평균 : " + avg + "<br/>");

        ///////////+ (수 우 미 양 가)///////////////////////

        if (avg >= 90) {
            document.write("성적 : 수" + "<br/>");
        } else if (avg >= 80) {
            document.write("성적 : 우" + "<br/>");   
        } else if (avg >= 70) {
            document.write("성적 : 미" + "<br/>");   
        } else if (avg >= 60) {
            document.write("성적 : 양" + "<br/>");   
        } else {
            document.write("성적 : 가" + "<br/>");   
        }


        ///////계절
        var month = Number(prompt ("달을 입력하세요"));

        switch (month) {
            case 12:
            case 1:
            case 2:
            case 3:
                document.write("winter" + "<br/>");
                break;
            case 4:
            case 5:
            case 6:
                document.write("spring" + "<br/>");
                break;
            case 7:
            case 8:
            case 9:
                document.write("summer" + "<br/>");
                break;
            case 10:
            case 11:
                document.write("fall" + "<br/>");
                break;
            default:
                document.write("잘못된 입력입니다." + "<br/>");
                break;
        }


        //for 문으로 1~10 까지 더하기/////////////////////////////////////
        var sum = 0;
        for (let i = 0; i <= 10; i++) {
            sum = sum + i;
        }
        document.write(sum + "<br>");
        
        // for문으로 구구단 ////////////////////////////
        // for (let i = 1; i < 10; i++) {
        //     for (let j = 1; j < 10; j++) {
        //         document.write(i + " * " + j + " = " + i*j + "<br>");
        //     }
        //     document.write("<br>");
        // }
        
        
        for (let i = 1; i < 10; i++) {
            for (let j = 1; j < 10; j++) {
                if ((i*j) % 2 == 1 ) {
                    document.write(i + " * " + j + " = " + i*j + "<br>");
                    
                }
            }
            document.write("<br>");
        }