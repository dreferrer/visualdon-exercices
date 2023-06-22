import {select} from "d3-selection";

// C'est ici que vous allez écrire les premières lignes avec d3.js!

select("body").append("div").append("svg").attr("id", "monSvg");

const monSvg = select("#monSvg");

monSvg.attr("width", 500)
    .attr("height", 500)

const groupe1 = monSvg.append("g")
const groupe2 = monSvg.append("g")
const groupe3 = monSvg.append("g")

groupe1.append("circle")
    .attr("id", "cercle1")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 40)

groupe2.append("circle")
    .attr("id", "cercle2")
    .attr("cx", 150)
    .attr("cy", 150)
    .attr("r", 40)

groupe3.append("circle")
    .attr("id", "cercle3")
    .attr("cx", 250)
    .attr("cy", 250)
    .attr("r", 40)


const cercle1 = select("#cercle1");
const cercle2 = select("#cercle2");
const cercle3 = select("#cercle3");

cercle2.attr("fill", "red")
    .attr("cx", 200)

cercle1.attr("cx", 100)

//Rajouter du texte en dessous de chaque cercle
groupe1.append("text")
    .text("Cercle 1")
    .attr("x", 75)
    .attr("y", 105)

groupe2.append("text")
    .text("Cercle 2")
    .attr("x", 175)
    .attr("y", 205)

groupe3.append("text")
    .text("Cercle 3")
    .attr("x", 225)
    .attr("y", 305)

//Aligner verticalement les cercles en cliquant sur le dernier cercle
cercle3.on("click", function() {
    cercle1.attr("cx", 100)
    cercle2.attr("cx", 100)
    cercle3.attr("cx", 100)
})

const data = [20, 5, 25, 8, 15];

const container = select("body").append("div").attr("id", "container");
const graph = container.append("svg").attr("id", "graph")
                        .attr("width", 500)
                        .attr("height", 500);

graph.selectAll("rect")
    .data(data)
    .join(enter => enter.append("rect")
        .attr("x", (d, i) => (i * 30))
        .attr("y", d => 500 - d)
        .attr("width", 20)
        .attr("height", d => d)
        .attr("fill", "blue")
        .attr("stroke", "black")
    );