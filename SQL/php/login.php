 <?php
 
 if(!empty($_POST["btnregistrar"])) {
    if(!empty($_POST["nombre"]) and !empty($_POST["apellido"]) and !empty($_POST["DNI"]) and !empty($_POST["fecha"]) and !empty($_POST["correo"])) {
        
        $nombre=$_POST["nombre"];
        $apellido=$_POST["apellido"];
        $DNI=$_POST["DNI"];
        $fecha=$_POST["fecha"];
        $correo=$_POST["correo"];

        $sql=$conexion->query("insert into persona(nombre,apellido,DNI,fecha_nac,correo)values('$nombre','$apellido','$DNI','$fecha','$correo') ");
        if($sql == 1){
            echo '<div class="alert alert-success text-center">Registro exitoso</div>';
        } else {
            echo '<div class="alert alert-danger text-center">Error al registrar persona</div>';
        }

    } else {
        echo '<div class="alert alert-warning text-center p-20">Algunos de los campos estan vacíos</div>';
    }
 }

 ?>