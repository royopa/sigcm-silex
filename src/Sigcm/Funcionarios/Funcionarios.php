<?php

namespace Sigcm\Funcionarios;
use Sigcm\CsvToJson;

class Funcionarios
{
    private $json = null;

    public function __construct()
    {
        $csvToJson = new CsvToJson();
        $csvFile = dirname(__FILE__) . DIRECTORY_SEPARATOR . 'funcionarios.csv';
        $this->json = $csvToJson->csvToJson($csvFile); 
    }

    public function getJson()
    {
        return $this->json;
    }
}
