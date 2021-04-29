<?php

if (isset($_POST['submit'])) {
   $name = $_POST['name'];
   $mailFrom = $_POST['mail'];
   $phone = $_POST['phone'];
   $whatPosition = $_POST['whatPosition'];
   $cv = $_POST['cv'];
   $about = $_POST['about'];

   $mailTo = "boorzak@o2.pl";
   $headers = "ANGEL AND HARP from: ".$mailFrom;
   $txt = "You have received a job application form from ".$name.".\n\n".$about;

   mail($mailTo, $whatPosition, $txt, $headers);

   header("Location: index.html");
};

?>