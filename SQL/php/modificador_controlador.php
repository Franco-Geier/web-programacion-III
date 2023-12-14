<?php

if (!empty($_POST["btnregistrar"])) {
    if(!empty($_POST["nombre"]) and !empty($_POST["apellido"]) and !empty($_POST["DNI"]) and !empty($_POST["fecha"]) and !empty($_POST["correo"])) {
        $id=$_POST["id"];
        $nombre=$_POST["nombre"];
        $apellido=$_POST["apellido"];
        $DNI=$_POST["DNI"];
        $fecha=$_POST["fecha"];
        $correo=$_POST["correo"];
        $sql=$conexion->query(" update persona set nombre='$nombre', apellido='$apellido', DNI='$DNI', fecha_nac='$fecha', correo='$correo' where id_persona=$id ");
        if ($sql==1) {
            header("location:index.php");
        } else {
            echo "<div class='alert alert-danger'>Error al modificar datos</div>";
        }

    }else{
       echo "<div class='alert alert-warning'>Complete todos los campos</div>";
    }

}

?>