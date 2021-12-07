
let colors = ["#000080", "#000000"];

for (let i = 1; i < 37; i++) {
    // Using AJAX to get the text from the day.
  $.ajax({
    async:false,
    url: "days_txt/day" + String(i) + ".txt",
    dataType: 'text',
    success: function(data)
    {
      let temp_data = data.replace(/(?:\r\n|\r|\n)/g, "<br>&emsp;");
      p = document.createElement("p");
      p.id = "day" + String(i);
      p.style.color = colors[i % colors.length];
      p.innerHTML += temp_data;
      p = document.body.appendChild(p);
    }
      });

}