import React, { useEffect, useRef,useState} from "react"; 
import * as d3 from "d3";
import mapdata from "./data.csv";

const country_info = {
  "USA" : ["./CountryImages/USA.jpg","This is a picture of Times Square in New York City. The aesthetics of this part of town feels very cyberpunk to me. It is a strange concept that a tourist attraction is a bunch of advertisements and yet I really enjoyed seeing it. New York is a vibrant albeit very dirty city. The subway smelled worse than any other transit system I have traveled on. That being said central park and the Brooklyn Bridge were very clean.","If you visit New York I recommend going to the Museum of Modern Art. It houses many famous paintings such as Van Gogh’s \"The Starry Night\" and Andy Warhol’s \"Campbell’s Soup Cans.\""],
  "Canada" : ["./CountryImages/Canada.jpg","This is a picture of the Sky Couch up in Tofino. It is a hidden spot in the area that locals have made with a great view of Wickaninnish Bay. I went to with my friends during our Ucluelet camping trip."],
  "Ireland" : ["./CountryImages/Ireland.jpg","When I went to Ireland my goal was to cram as much as I could see. I flew into Dublin, trained down to Cork, bussed around the ring of Kerry, trained back to Dublin, took a tour to Belfast, and then flew out of Dublin. It turns out I have a third cousin in Dublin who I met for the first time and went out for a pint of Guinness with.","In Ireland, many of the tourist attractions are inaccessible by train. In order to visit many of the natural landmarks, one either has to rent a car or take a tour bus. I ended up doing the latter as I find the idea of driving on the opposite side of the road intimidating. The photo is from the Cliffs of Moher and the number one landmark of Ireland. The cliffs were featured in \"Harry Potter and the Half Blood Prince\" and are very daunting in person."],
  "Egypt" : ["./CountryImages/Egypt.jpg","Egypt has always been a curiosity to me. Ancient Egypt was a really interesting civilization and had a very unique religion. A goal of mine was to visit the pyramids and see the valley of the kings which I did on my trip to Egypt. The city of Cairo is a hectic and noisy mosh pit. Road lines do not exist, and to cross the road you have to step into oncoming traffic. Cars use honking as a way to communicate their presence to avoid scraps and collisions, so the sound of car horns never stops.","The second place I went to is Luxor which is situated close to the valley of kings. I had my first hot air ballon ride over the valley of kings which was a really cool experience. Seeing the sun rise from hundreds of feet in the air among the other hot air balloons was breathtaking. However, my favourite photo is of Karnak temple. I found the temple the most mystical looking place in Egypt. The size and detail on the pillars really gave otherworldly vibes."],
  "Czech Republic" : ["./CountryImages/CzechRepublic.jpg","	Prague is a very beautiful city. The people of the Czech Republic have a very strong national identity and you can see that from the statues of national figures from around the city. There are also a lot of great pubs in the city that are popular tourist destinations. My favourite is called dog bar which is a weird amalgamation of rooms joined together. Unfortunately, I didn’t take many photos there so here is a picture of the overview of the city."],
  "Germany" : ["./CountryImages/Germany.jpg","This is the World Clock, built by Erich John in 1969 as tribute to Berlin’s 750th anniversary. Berlin is a city comprised mostly of modern architecture as many of the older buildings were destroyed during the second world war."],
  "France" : ["./CountryImages/France.jpg","I spent three days in Paris and had a really fun time when I was there. Out of all the cities I have been to I feel Paris has the best fashion sense. The average person had a quietly classy dress style I was a fan of, but it probably isn’t too hard to maintain a nice wardrobe in one of the major fashion capitals of the world. I saw the Eiffel tower and the Louvre Museum and visited a few cafes while I was there. I ended up wasting an entire day due to a poor cellphone plan and had to buy a new one. One of the issues with travelling in Europe is tourist sim cards can have issues in different countries.","I really enjoyed the Louvre Museum even though I had to wait three hours to get in it was worth it. My favourite exhibit was the furniture and décor of the late French monarchy. I was surprised how well kept it was considering how violent the revolution was. The photo I have included is from a café I went to with another person I met at a hostel. For me the best part of Paris is the vibes. I had duck breast paired with a nice wine. She had order foie gras and while I was not too big of a fan of it, I was happy to try it."],
  "Greece" : ["./CountryImages/Greece.jpg","Ancient Greece was the foundation of western civilization as the pioneer of philosophy and democracy. Athens has the Parthenon, mount Lycabettus, and great food. It also has the cave of Socrates, the jail where Socrates was imprisoned before his trial of corrupting the youth.","Greece is also known for its beautiful islands and this is a photo of Aegina Island. Home to the temple of Aphaea, the island has nice beaches but is quieter than the party islands."],
  "Iceland" : ["./CountryImages/Iceland.jpg","A friend and I took a road trip around the ring of Iceland and stopped along the way to see many of the natural landmarks and attractions. The landscape was alien, barren, and constantly changing. It is about 1/100 the size of Canada and has a population around the same ratio. The cost of living is quite high. We made the mistake of assuming the cereal and coffee was complementary, when it was 19 dollars for corn flakes. However, some things were exceptionally affordable, like the dairy industry. We bought a large block of quality cheese which lasted us the entire trip.","This is a picture of Akureyri, the second largest city in Iceland and marks the halfway point of the trip. The lights of the city reflecting off the water had a magical quality to it which reminded me of a scene from my favourite Christmas movie \"The Polar Express\" when the train pulls into Santa’s village. "],
  "Italy" : ["./CountryImages/Italy.jpg","When I went to Italy, my main goals were to see the historic landmarks of western civilization and eat local cuisine. The coffee and gelato were much better than back home which was a nice experience. As a tourist, a benefit of Italy was its lack of variety in food styles. Unlike a lot of the countries I have visited, Italy is very tradition in its food offerings. I did not have to go very far to find an Italian restaurant consistently.","The main places I went were: Rome, Venice, Milan, and Pompeii. I can’t say much about Venice as it felt like a pretty tourist trap, but the other cities were very compelling. I was in Milan during fashion week and I saw a wide variety of cool outfits as I walked by on the streets. I visited the Duomo di Milano and then went off to Rome. From Rome and I did a day trip to Pompeii and took in the sight of the preserved ancient city. When I came back to Rome I saw the Colosseum, St Peter’s Basilica, Vatican City, and the Trevi Fountain which shown here."],
  "Japan" : ["./CountryImages/Japan.jpg","I went to Japan in 2016 right after my excursion to Thailand. I had a couple contacts in Japan that I met up with. One friend came to Victoria on a language exchange and we were working at the same restaurant at the time. We did a day trip to Fuji Q Highland amusement park and I have not experienced a ride as terrifying as the rollercoaster I went on since. I went on the Takabisha which was the steepest rollercoaster in the world until 2019 and contains a 121 degree freefall. I met another friend up in Sendai where they had a job through the JET program teaching English. We visited the Masamune Dante tea house and went to a karaoke place with her English teaching friends.","To get around Japan, I ordered a Japanese Rail pass which allowed me to use the high-speed trains in between cities. I went to see Hiroshima to see the last remaining building from the bomb and to Kyoto to see the bamboo forest. Back in Tokyo, I went to Disney Sea and ate at a ton of different Japanese restaurants. I had Michelin star ramen and high-end sushi. The picture included is from the studio Ghibli museum. It features art exhibits based on the Ghibli museum and has a café that is themed after the movies as well."],
  "Mexico" : ["./CountryImages/Mexico.jpg","This is a picture from the time my family went to Puerto Vallarta. We stayed at an all-inclusive resort and did a few day excursions when we were there. All inclusive resort vacations really aren’t my thing but it was a nice change."],
  "Norway" : ["./CountryImages/Norway.jpg","I went to the capital of Denmark, Oslo, as it was the cheapest flight back into North America at the time I was looking for flights. I spent three days there and saw the Munch art gallery and the Fram museum. While I did enjoy seeing Edvard Munch’s work, particularly The Scream, I enjoyed the Fram museum more.","The picture is of me on a recreation of one of the boats that sailed through the northwest passage. The museum is dedicated to the history of Norwegian exploration of Greenland and the journey though the north west passage."],
  "England" : ["./CountryImages/England.jpg","The United Kingdom is rich with history. The city of London alone has had extensive programs to preserve historic sites and areas. It is hard to traverse the city without coming across plaques explaining the historic significance of an area. London has beautiful cathedrals and a beautiful Chinatown. Another great area of England is York, with buildings dating back to the 14th century. Many buildings in Harry Potter come from York, specifically the area called The Shambles.","Up north is the capital of Scotland, Edinburgh. The city has an interesting history, where buildings had sunk into the ground and they had built buildings over top of them creating an interesting attraction known as The Underground of which the picture is from. Old streets and buildings that have been sealed up for hundreds of years only to be unearthed centuries later."],
  "Thailand" : ["./CountryImages/Thailand.jpg","Thailand was the first country I went solo travelling to back in 2016. I was surprised by how scary looking the police force was. Most officers were carrying automatic rifles, which is a very jarring experience compared to Canada. When I flew into Bangkok in the summer, I experienced a humid heat that I had never encountered before. I found the city too hectic for my taste back in 2016. Looking back, it was much less stressful than Egypt is, however I was not used to confrontation from salespeople.","I enjoyed my time in Thailand much more when I went down to the islands and when I went up north to the Chang Mai area. Thailand has incredible natural beauty which is very apparently down south. The picture is of White Temple in the north."],
  "Austria" : ["./CountryImages/Austria.jpg","I only spent a day here so I just wandered the city. The city is extremely immaculate. Clean and pristinely white. I found the lowest price of wine I have ever seen there which was 2 euros a bottle for a decent wine. The photo is of a cute market I found in the city."],
};

function ReturnParagraph (text){
  return (
  <p className="Text">{text}</p>
  );
}

function ForLoopParagraphs(props){
  let array = props.list;
  console.log(array.map(ReturnParagraph));
  return (
    array.map(ReturnParagraph)
    );
  
}

function RecieveCountry(props) {
    let visitedCountries = ["USA","Canada","Ireland","Egypt","Czech Republic","Germany","France","Greece","Iceland","Italy","Japan","Mexico","Norway","Thailand","England"];
    let contains = visitedCountries.includes(props.name);
    console.log(props.name);
    if(contains){
      let info = country_info[props.name];
        return(
            <div style={{textAlign: "center"}} >
              <h1 className ="HeaderText">Favourite Photo of the Country</h1>
              <img src = {info[0]} className = "photo"/>
              <ForLoopParagraphs list = {info.slice(1,info.length)}/>
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }

}

const WorldMap = () => {
  const ref = useRef();
  const [Country, setCountry] = useState("");
  useEffect(() => {
    // set the dimensions and margins of the graph
    const width = 900;
    const height = 900;
    
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width)
      .attr("height",height)

    // Map and projection
    const projection = d3.geoMercator()

    .center([0,20])
    .translate([width / 2, height / 2]);
  
  // Data and color scale
  const data = new Map();
  const colorScale = d3.scaleLinear()
  .domain([0,1])
  .range(["grey","blue"]);
  
  // Load external data and boot
  Promise.all([
  d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"),
  d3.csv(mapdata, function(d) {
      data.set(d.code, +d.visited)
  })]).then(function(loadData){
      let topo = loadData[0]
  
      let mouseOver = function(d) {
      d3.selectAll(".Country")
        .transition()
        .duration(200)
        .style("opacity", .5)
      d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 1)
        .style("stroke", "black")
    }
  
    let mouseLeave = function(d) {
      d3.selectAll(".Country")
        .transition()
        .duration(200)
        .style("opacity", .8)
      d3.select(this)
        .transition()
        .duration(200)
        .style("stroke", "transparent")
    }

    let mouseClick = function (event, d) {
            d3.selectAll(".Country")
              .transition()
              .duration(200)
              .style("opacity", 0.8);
            d3.select(this)
              .transition()
              .duration(200)
              .style("stroke", "transparent");
              setCountry(d.properties.name);
          };
    
    // Draw the map
    svg.append("g")
      .selectAll("path")
      .data(topo.features)
      .enter()
      .append("path")
        // draw each country
        .attr("d", d3.geoPath()
          .projection(projection)
        )
        // set the color of each country
        .attr("fill", function (d) {
          d.total = data.get(d.id) || 0;
          return colorScale(d.total);
        })
        .style("stroke", "transparent")
        .attr("class", function(d){ return "Country" } )
        .style("opacity", .8)
        .on("mouseover", mouseOver )
        .on("mouseleave", mouseLeave )
        .on("click", mouseClick); // Attach the mouseClick function
  
  });
  }, []);
  
  return (<div className="worldTravel">
  <div class="map">
    <svg viewBox="0 0 900 900" id="WorldMap" ref={ref} />
    </div>
  <div>
    <RecieveCountry name={Country} />
  </div>
</div>);
};

export default WorldMap;
