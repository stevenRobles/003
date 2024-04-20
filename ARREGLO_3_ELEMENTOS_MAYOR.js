<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encontrar el mayor de tres elementos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            text-align: center;
        }
        .container {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        #resultado {
            margin-top: 20px;
            padding: 10px;
            border-radius: 5px;
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Encontrar el mayor de tres elementos</h1>
        <button onclick="encontrarMayor()">Encontrar mayor</button>
        <div id="resultado"></div>
    </div>

    <script>
        // Función para encontrar el mayor de tres elementos en un arreglo
        function encontrarMayor() {
            // Definir el arreglo de 3 elementos (puedes modificar los valores según tu necesidad)
            var arreglo = [15, 7, 21];

            // Encontrar el mayor elemento del arreglo
            var mayor = Math.max.apply(null, arreglo);

            // Mostrar el resultado
            document.getElementById("resultado").innerHTML = "<p>El mayor elemento del arreglo es: " + mayor + "</p>";
        }
    </script>
</body>
</html>
