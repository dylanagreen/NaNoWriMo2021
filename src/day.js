var temp_data = "";

// Get the "dayX" part of the url.
// A little messy but it works tm?
let day_num = document.URL.split("/").pop().split(".html")[0]


// Using AJAX to get the text from the day.
$.ajax({
  async:false,
  url: "../days_txt/" + day_num + ".txt",
  dataType: 'text',
  success: function(data)
  {
  temp_data = data
      }
  });

temp_data = temp_data.replace(/(?:\r\n|\r|\n)/g, "<br>&emsp;");
document.write(temp_data);