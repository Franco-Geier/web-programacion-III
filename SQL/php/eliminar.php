<?php

if (!empty($_GET["id"])) {
    $id=$_GET["id"];
    $sql=$conexion->query(" delete from persona where id_persona=$id ");
    if($sql==1) {
        echo '<div class="alert alert-success p-3 text-center">Eliminado correctamente</div>';
    } else {
        echo '<div class="alert alert-danger p-3 text-center">No fue posible eliminar los datos</div>';
    }
}

?>