<?php
    function firstUpper($string) : string {
        $string = rtrim($string);
        $string = ltrim($string);
        $fst_letter = ucwords($string[0]) . strtolower(substr($string, 1));
        return $fst_letter;
    }
    // echo ('"testing String" : ' . firstUpper("testing String")) . "\n";
    // echo ('"   testing   String" : ' . firstUpper("   testing   String")) . "\n";
    // echo ('"07" : ' . firstUpper("07")) . "\n";
    // echo ('"" : ' . firstUpper("")) . "\n";
    // echo ('true : ' . firstUpper(true)) . "\n";
    // echo ('NULL : ' . firstUpper(NULL)) . "\n";

    // echo (firstUpper("   ...I Will Rebuild Krypton Atop His Bones.")) . "\n";
    // echo (firstUpper(" 300room FOR  yoUr   DESTiny   ")) . "\n";
?>