<?php
/*
Plugin Name: Poste Suivi Api 
Description: Fetching data from the poste website.
Version: 1.0
Author: Elyes
*/

include('simple_html_dom.php');

// Handle input_data form
function custom_form_processing() {
    if (isset($_POST['submit'])) {
        if (isset($_POST['input_data'])) {
            // Sanitize the input data to remove any potentially harmful code
            $input_data = sanitize_text_field($_POST['input_data']);

            fetchdata($input_data);
    }
}
}
add_action('init', 'custom_form_processing');

function fetchdata($input_data){
        $url = "http://www.rapidposte.poste.tn/fr/Item_Events.asp?ItemId=$input_data";
        try {
            $response = file_get_contents($url);
            if ($response === false) {
                // Throw an exception if the request failed
                throw new Exception("Failed to fetch data from the server");
            }

             // Create a new HTML DOM object
                $html = new simple_html_dom();
                $html->load($response);
            // Find the table element with a specific ID
                $table = $html->find('#200',0);
            
            // echo '<div class="response">'. $response .'</div>';
            
            if ($table) {
                // $tableData = array();
            
                // // Loop through each table row
                // foreach ($table->find('tr') as $row) {
                //     $rowData = array();
                //     // Loop through each table cell
                //     foreach ($row->find('td') as $cell) {
                //         // Extract the cell content
                //         $cellContent = $cell->plaintext;
                //         // Add cell content to row data
                //         $rowData[] = $cellContent;
                //     }
                //     // Add row data to table data
                //     $tableData[] = $rowData;
                // }
                // // Convert table data to JSON
                // $jsonData = json_encode($tableData);
                // // Output the JSON response
                // header('Content-Type: application/json');
                echo '<div class="response">'. $table .'</div>';
            } else {
                echo 'Table not found.';
            }
        } 
        catch (Exception $e) {
            // Handle the exception/error
            echo "Error: " . $e->getMessage();
            }
    } 

