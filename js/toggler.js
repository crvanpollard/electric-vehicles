// Access Score CheckBox toggle

// const togglerDVRPC = (map) => {
//   document.getElementById("DVRPC").addEventListener("click", function () {
//     map.flyTo({
//       // created a parameter that pulls the lat/long values from the geojson
//       center: [-75.2273, 40.071],
//       speed: 0.7,
//       zoom: 8.4,
//     });
//   $('#pa-future').hide();
//   $('.dvrpc').show();
//   document.getElementById('layout_select').selectedIndex=0;
//   $('#PA').children().eq(1).removeClass();  
//   $('#PA').children().eq(1).addClass('dull');  
//   $('#NJ').children().eq(1).removeClass();  
//   $('#NJ').children().eq(1).addClass('dull');  
//   $(this).children().eq(1).removeClass();   
//   $(this).children().eq(1).addClass('active');  

//   map.setFilter('county-outline', ['==', 'DVRPC', 'Yes']);
//   map.setFilter('municipality-outline', ['==', 'DVRPC', 'Yes']);
//   map.setLayoutProperty("dvrpcPEVBG-line", "visibility", "visible");
//   });
// };
// // Bike Score CheckBox toggle
// const togglerPA = (map) => {
//   document.getElementById("PA").addEventListener("click", function () {
//     map.flyTo({
//       center: [-77.76,40.92],
//       speed: 0.7,
//       zoom: 7,
//     });
//     $('#pa-future').show();
//     $('.dvrpc').hide();
//     document.getElementById('layout_select').selectedIndex=4;
//     $('#DVRPC').children().eq(1).removeClass();  
//     $('#DVRPC').children().eq(1).addClass('dull'); 
//     $('#NJ').children().eq(1).removeClass();  
//     $('#NJ').children().eq(1).addClass('dull');   
//     $(this).children().eq(1).removeClass();   
//     $(this).children().eq(1).addClass('active');  

//     map.setFilter('county-outline', ['==', 'STATE', 'PA']);
//     map.setFilter('municipality-outline', ['==', 'STATE', 'PA']);
//     map.setLayoutProperty("dvrpcPEVBG-line", "visibility", "none");
//   });
// };
// // Walk Score CheckBox toggle
// const togglerNJ = (map) => {
//   document.getElementById("NJ").addEventListener("click", function () {
//     map.flyTo({
//       center: [ -74.52, 40.24],
//       speed: 0.7,
//       zoom: 7,
//     });

//   $('#pa-future').hide();
//   $('#DVRPC').children().eq(1).removeClass();  
//   $('#DVRPC').children().eq(1).addClass('dull'); 
//   $('#PA').children().eq(1).removeClass();  
//   $('#PA').children().eq(1).addClass('dull');   
//   $(this).children().eq(1).removeClass();   
//   $(this).children().eq(1).addClass('active');  


//   map.setFilter('county-outline', ['==', 'STATE', 'NJ']);
//   map.setFilter('municipality-outline', ['==', 'STATE', 'NJ']);
//   });
// };
// PEV Distrubtion
const togglerPEV = () => {
  document.getElementById("PEV").addEventListener("click", function () {
    $('.workplace').hide();
    $('.current').show();
    $('.distribution').show();
    $('.free').hide();
    $('.paid').hide();
    document.getElementById('type_select').value="current";
    document.getElementById('layout_select').value="DVRPC-CurrentPEV-BG";
    $("#layout_select").trigger("change");

    $('#WP').children().eq(1).removeClass();  
    $('#WP').children().eq(1).addClass('dull'); 
    $(this).children().eq(1).removeClass();   
    $(this).children().eq(1).addClass('active');  
  });
};
// WorkPlace 
const togglerWP = () => {
  document.getElementById("WP").addEventListener("click", function () {
    $('.workplace').show();
    $('.free').show();
    $('.distribution').hide();
    $('.current').hide();
    $('.future').hide();
    document.getElementById('type_select').selectedIndex=2;
    // document.getElementById('layout_select').value="DVRPC-FC-KD-SM";

    var evt = document.getElementById('layout_select');
    evt.value="DVRPC-FC-KD-SM";
    $("#layout_select").trigger("change");

  
    $('#PEV').children().eq(1).removeClass();  
    $('#PEV').children().eq(1).addClass('dull'); 
    $(this).children().eq(1).removeClass();   
    $(this).children().eq(1).addClass('active');  
  });
};

// Bike Score CheckBox toggle
const filterCurrent = () => {
  document.getElementById("type_select").addEventListener("change", function (value) {
   // console.log(value.target.value);
    const layer = value.target.value;
    // const selected = option.selected;
    if (layer == "future") {
      $('.current').hide();
      $('.future').show();
      document.getElementById('layout_select').value="DVRPC-FuturePEV-BG";
    } else if (layer == "current"){
      $('.current').show();
      $('.future').hide();
      document.getElementById('layout_select').value="DVRPC-CurrentPEV-BG";
    } else if (layer == "free"){
      $('.free').show();
      $('.paid').hide();
      document.getElementById('layout_select').value="DVRPC-FC-KD-SM";
    } else {
      $('.paid').show();
      $('.free').hide();
      document.getElementById('layout_select').value="DVRPC-PC-KD-SM";
    }

  });

};

// Home Page and Map interaction
//toggle Home and Map pages
// const togglerHome = () => {
//   document.getElementById("homeLink").addEventListener("click", function () {
//     document.getElementById("homeLink").style.display = "none";
//     document.getElementById("stationSearchFormMap").style.display = "none";
//     document.getElementById("main").style.display = "flex";
//     document.getElementById("sidebar").style.display = "none";
//     document.getElementById("map").style.display = "none";
//     document.getElementById("stationSearchForm").style.display = "block";
//   });
// };

// const togglerEAS = (map) => {
//   document
//     .getElementById("exploreTheMap")
//     .addEventListener("click", function () {
//       document.getElementById("stationSearchFormMap").style.display = "block";
//       document.getElementById("homeLink").style.display = "block";
//       document.getElementById("main").style.display = "none";
//       document.getElementById("map").style.display = "block";
//       document.getElementById("sidebar").style.display = "block";
//       document.getElementById("stationSearchForm").style.display = "none";
//       map.resize();
//     });
// };

// export { togglerDVRPC, togglerPA, togglerNJ, togglerPEV, togglerWP, filterCurrent };
export {togglerPEV, togglerWP, filterCurrent };
