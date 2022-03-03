<?php
    $mysqli = new mysqli("localhost", "root", "sa", "proyecto2");
    if($mysqli->connect_error) {
    exit('Could not connect');
    }

    //id, nombre, lv, hp, ca, pb, dice, fuerza, destreza, constitucion, inteligencia, sabiduria, carisma
    $sql = "SELECT * FROM personaje WHERE id = ?";

    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("s", $_GET['q']);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($id, $nombre, $lv, $hp, $ca, $pb, $dice, $fuerza, $destreza, $constitucion, $inteligencia, $sabiduria, $carisma);
    $stmt->fetch();
    $stmt->close();
    
    echo "<table>";
    echo "<tr>";
    echo "<th>id</th>";
    echo "<td>" . $id . "</td>";
    echo "<th>nombre</th>";
    echo "<td>" . $nombre . "</td>";
    echo "<th>lv</th>";
    echo "<td>" . $lv . "</td>";
    echo "<th>hp</th>";
    echo "<td>" . $hp . "</td>";
    echo "<th>ca</th>";
    echo "<td>" . $ca . "</td>";
    echo "<th>pb</th>";
    echo "<td>" . $pb . "</td>";
    echo "<th>dice</th>";
    echo "<td>" . $dice . "</td>";
    echo "<th>fuerza</th>";
    echo "<td>" . $fuerza . "</td>";
    echo "<th>destreza</th>";
    echo "<td>" . $destreza . "</td>";
    echo "<th>constitucion</th>";
    echo "<td>" . $constitucion . "</td>";
    echo "<th>inteligencia</th>";
    echo "<td>" . $inteligencia . "</td>";
    echo "<th>sabiduria</th>";
    echo "<td>" . $sabiduria . "</td>";
    echo "<th>carisma</th>";
    echo "<td>" . $carisma . "</td>";
    echo "</tr>";
    echo "</table>";
?>