<template>

<body>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
        <h2></h2>
            <h1>러브 캐쳐</h1>

        <button class="w-btn w-btn-indigo" type="button">
        나의 인연 찾기
        </button>
</body>
 

</template>

<style>
body {
                background-color: rgb(255, 189, 189);
            }
            .w-btn-indigo {
            background-color: aliceblue;
            color: rgb(234, 118, 118);
            }
            h1 {
                position:absolute;
                left:30%;
                top: 10%;
                font-family: 'Jua', sans-serif;
                font-size: 10rem;
                color: rgb(255, 255, 255); 
                overflow: hidden;
                }
            h2 {
                width: 5px;
                height: 1px;
                color: aqua;
            }
            button {
                position:relative;
                left:32.5%;
                top: 60%;
                
            }
            .w-btn {
            position: relative;
            border: none;
            display: inline-block;
            padding: 40px 70px;
            border-radius: 15px;
            font-family: 'Jua', sans-serif;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
            text-decoration: none;
            font-weight: 600;
            transition: 0.25s;
            font-size: 4rem;
            }
            .w-btn-indigo-outline {
            border: 3px solid aliceblue;
            color: #1e6b7b;
            }

            .w-btn-indigo-outline:hover {
            color: #1e6b7b;
            background: aliceblue;
            }
            .w-btn:hover {
        letter-spacing: 2px;
        transform: scale(1.2);
        cursor: pointer;
    }

    .w-btn-outline:hover {
        letter-spacing: 2px;
        transform: scale(1.2);
        cursor: pointer;
    }

    .w-btn:active {
        transform: scale(1.5);
    }

    .w-btn-outline:active {
        transform: scale(1.5);
    }

    </style>


   

