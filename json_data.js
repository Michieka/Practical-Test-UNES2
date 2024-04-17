fetch('path_to_your_json_file.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // This will log the JSON data to the console
    // Do whatever you want with the JSON data here
  })
  .catch(error => {
    console.error('Error:', error);
  });
