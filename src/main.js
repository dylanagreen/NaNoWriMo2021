var temp_data = "";

// Using AJAX to get the text from the day.
$.ajax({
  async:false,
  url: 'days/day_1.txt',
  dataType: 'text',
  success: function(data)
  {
  temp_data = data
      }
  });

temp_data = temp_data.replace(/(?:\r\n|\r|\n)/g, "<br>&emsp;");
document.write(temp_data);