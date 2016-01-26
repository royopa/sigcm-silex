<?php

namespace Sigcm;

class CsvToJson
{
    /*
     * Converts CSV to JSON
     * Example uses Google Spreadsheet CSV feed
     * csvToArray function I think I found on php.net
     */

    // Function to convert CSV into associative array
    public function csvToArray($file, $delimiter)
    {
      if (($handle = fopen($file, 'r')) !== FALSE) { 
        $i = 0; 
        while (($lineArray = fgetcsv($handle, 4000, $delimiter, '"')) !== FALSE) { 
          for ($j = 0; $j < count($lineArray); $j++) { 
            $arr[$i][$j] = $lineArray[$j]; 
          } 
          $i++; 
        } 
        fclose($handle); 
      }
      return $arr; 
    }

    public function csvToJson($feed)
    {
        // Arrays we'll use later
      $keys = array();
      $newArray = array();

        // Do it
      $data = $this->csvToArray($feed, ',');

        // Set number of elements (minus 1 because we shift off the first row)
      $count = count($data) - 1;

        //Use first row for names  
      $labels = array_shift($data);  

      foreach ($labels as $label) {
        $keys[] = $label;
      }

        // Add Ids, just in case we want them later
      $keys[] = 'id';

      for ($i = 0; $i < $count; $i++) {
        $data[$i][] = $i;
      }

        // Bring it all together
      for ($j = 0; $j < $count; $j++) {
        $d = array_combine($keys, $data[$j]);
        $newArray[$j] = $d;
      }

        // Print it out as JSON
      return json_encode($newArray);
    }
  }
