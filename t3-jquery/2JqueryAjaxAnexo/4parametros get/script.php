<?php

    echo $_GET["usuario"] . " " . $_GET["clave"] . "<br>";

    if ($_GET["usuario"] == "pepe" && $_GET["clave"]== "hola" ) {
        echo "Usuario y contraseña inseratdas correctamente";
    } else{
        echo "Vuleve a intentarlo";
    }
