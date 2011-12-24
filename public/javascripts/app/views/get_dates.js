pixelpong.views.getDates = pixelpong.View.extend({
  id: "get_dates",
  tag: 'a',
  bindings : {click : "refresh"},
  refresh: function(){
    var from = Date.parseString($("#from").val());
    var to = Date.parseString($("#to").val());
    $("#pixel-ping-view").trigger("refresh", [ from, to ]);
  }  
});

pixelpong.views.getDatesCSV = pixelpong.View.extend({
  id: "download_csv",
  tag: 'a',
  bindings: {click: "refresh"},
  refresh: function(){
    var from = Date.parseString($("#from").val());
    var to = Date.parseString($("#to").val());
    this.get(from, to);
  },
  get: function(startDate, endDate){
    window.location.href = "/stats.csv?start_date=" + startDate.toJSON() + "&end_date=" + endDate.toJSON();
  }
});
