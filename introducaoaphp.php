<?php

//Criando uma variavel
$nome = "Alvaro";

echo 'Ola ' . $nome . "<br>";
echo "Ola $nome <br>";
echo "Ola $nome <br>";

$idade = 30;

echo "Nome: $nome e idade: $idade <br><hr>";

if ($idade === "30"){
    echo "Verdadeiro";
}else{
    echo "Falso";
}

echo "<hr>";

echo "Contagem de 1 a 5 usando o laço for <br><br><br>";

for($i = 1; $i<=5; $i++){
    echo "$i <hr>";
}




echo "Contagem regressiva utilizando o While<br> <br>";
$contador = 5;

while ($contador >= 1){
    echo "$contador <hr>";
    $contador--;
}

?>
