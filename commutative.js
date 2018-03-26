
// Layout:
// a c e
// b d f
//
// define a half-height, and half-width for each text block

var grammar = {
    "origin" : "#header##marker##background##diagram##end#",
    "header" : "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" height=\"512\" width=\"1024\">",
    "marker" : "<marker id=\"triangle\" viewBox=\"0 0 10 10\" refX=\"0\" refY=\"5\" markerUnits=\"strokeWidth\" markerWidth=\"4\" markerHeight=\"3\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 Z\"/></marker>",
    "background" : "<rect width=\"100%\" height=\"100%\" fill=\"#bgcolor#\"/>",
    "bgcolor" : [ "white" ],
    "onechar" : "[hh:20][hw:20][hd:20]",
    "textcolor": [ "black" ],
    "textsize": [ "20" ],
    "superscriptx": "14",
    "superscripty": "5",
    "superscriptsize" : "12",
    "superscriptText" : "",
    "textelement" : "<text x=\"#textx#\" y=\"#texty#\" font-size=\"#textsize#\" text-anchor=\"middle\" fill=\"#textcolor#\" dominant-baseline=\"central\">#text#</text><g transform=\"translate(#superscriptx# -#superscripty#)\"><text x=\"#textx#\" y=\"#texty#\" font-size=\"#superscriptsize#\" text-anchor=\"middle\" fill=\"#textcolor#\" dominant-baseline=\"central\">#superscriptText#</text></g>",
    "homObjectName" : [ "Hom(#smallObjectName#;#smallObjectName#)" ],
    "smallObjectName" :  [ "ℝ", "ℂ", "ℤ", "ℚ", "A", "B", "D", "E", "G", "H", "T" ],
    "superscriptName" :  [ "ℝ", "ℂ", "ℤ", "ℚ", "A", "B", "D", "E", "G", "H", "T", "2", "*", "α", "β", "γ", "×", "+" ],
    "smallObjectModifier" : [ "F", "G", "H", "p", "q", 
			      "π", "μ", "ψ", "φ", "ℾ", "ℿ" ],
    "smallOperator" : [ "+", "×", "⨷", "⨴","⨵", "⨻", "⨢", "⨹", ":" ],
    "objectName" : [
	"#onechar#[text:ℝ][objectName:]",
	"#onechar#[text:ℂ][objectName:]",
	"#onechar#[text:ℤ][objectName:]",
	"#onechar#[text:ℚ][objectName:]",
	"#onechar#[text:A][objectName:]",
	"#onechar#[text:B][objectName:]",
	"#onechar#[text:D][objectName:]",
	"#onechar#[text:E][objectName:]",
	"#onechar#[text:G][objectName:]",
	"#onechar#[text:H][objectName:]",
	"#onechar#[text:T][objectName:]",
	"[hh:20][hw:70][hd:25][text:#homObjectName#][objectName:]",
	"[hh:20][hw:40][hd:25][text:#smallObjectName##smallOperator##smallObjectName#][objectName:]",
	"[hh:20][hw:40][hd:25][text:Cats][objectName:]",
	"[hh:20][hw:40][hd:25][text:Dogs][objectName:]",
	"[hh:20][hw:50][hd:25][text:#smallObjectModifier#(#smallObjectName#)][objectName:]",
	"#onechar#[text:D][objectName:]#onechar#[text:C][objectName:]#onechar#[text:B][objectName:]#onechar#[text:A][objectName:]",
	"[mod:#smallObjectModifier#][hh:20][hw:50][hd:25][text:#mod#(#smallObjectName#)][objectName:][hh:20][hw:50][hd:25][text:#mod#(#smallObjectName#)][objectName:][hh:20][hw:50][hd:25][text:#mod#(#smallObjectName#)][objectName:][hh:20][hw:50][hd:25][text:#mod#(#smallObjectName#)][objectName:]",
	"[mod1:#smallObjectModifier#][mod2:#smallObjectModifier#][obj1:#smallObjectName#][obj2:#smallObjectName#][hh:20][hw:50][hd:25][text:#mod2#(#obj2#)][objectName:][hh:20][hw:50][hd:25][text:#mod1#(#obj2#)][objectName:][hh:20][hw:50][hd:25][text:#mod2#(#obj1#)][objectName:][hh:20][hw:50][hd:25][text:#mod1#(#obj1#)][objectName:]",
	"[mod1:#smallObjectModifier#][obj1:#smallObjectName#][obj2:#smallObjectName#][hh:20][hw:50][hd:25][text:#mod1#(#obj2#)][objectName:][hh:20][hw:20][hd:20][text:#obj2#][objectName:][hh:20][hw:50][hd:25][text:#mod1#(#obj1#)][objectName:][hh:20][hw:20][hd:20][text:#obj1#][objectName:]",
	"[hh:20][hw:23][hd:20][text:#smallObjectName#][superscriptText:#superscriptName#][objectName:]"
    ],
    "morphismName" : [
	"#onechar#[text:f]",
	"#onechar#[text:g]",
	"#onechar#[text:h]",
	"#onechar#[text:p]",
	"#onechar#[text:q]",
	"#onechar#[text:r]",
	"#onechar#[text:π]",
	"#onechar#[text:μ]",
	"#onechar#[text:ψ]",
	"#onechar#[text:φ]",
	"#onechar#[text:χ]",
	"#onechar#[text:!]"
    ],
    "ax" : "60",
    "ay" : "60",
    "bx" : "60",
    "by" : "260",
    "cx" : "260",
    "cy" : "60",
    "dx" : "260",
    "dy" : "260",
    "aby" : "160",
    "acx" : "160",
    "bdx" : "160",
    "cdy" : "160",
    "adx" : "160",
    "ady" : "160",
    "diag_len" : "100",
    "popObj" : "[objectName:POP][text:POP][hh:POP][hw:POP][hd:POP][superscriptText:POP][superscriptText:]",    
    "a_text" : "#objectName#[ahh:#hh#][ahw:#hw#][ahd:#hd#][textx:#ax#][texty:#ay#]#textelement##popObj#",
    "b_text" : "#objectName#[bhh:#hh#][bhw:#hw#][bhd:#hd#][textx:#bx#][texty:#by#]#textelement##popObj#",
    "c_text" : "#objectName#[chh:#hh#][chw:#hw#][chd:#hd#][textx:#cx#][texty:#cy#]#textelement##popObj#",
    "d_text" : "#objectName#[dhh:#hh#][dhw:#hw#][dhd:#hd#][textx:#dx#][texty:#dy#]#textelement##popObj#",
    "diagram" : [ "#diagram3#", "#diagram4#" ],
    "diagram3" : [
	"<g transform=\"scale(1.6 1.6)\">#a_text##c_text##d_text##ac_arrow##cd_arrow##ad_arrow#</g>",
	"<g transform=\"scale(1.6 1.6)\">#a_text##c_text##d_text##ac_arrow##ac_morphism##cd_arrow##cd_morphism##ad_arrow##ad_morphism#</g>" ],		   
    "diagram4" : [ "<g transform=\"scale(1.6 1.6)\">#a_text##b_text##c_text##d_text##ab_arrow##ac_arrow##cd_arrow##bd_arrow#</g>",
		   "<g transform=\"scale(1.6 1.6)\">#a_text##b_text##c_text##d_text##ba_arrow##ac_arrow##cd_arrow##bd_arrow#</g>",
		   "<g transform=\"scale(1.6 1.6)\">#a_text##b_text##c_text##d_text##ab_arrow##ac_arrow##cd_arrow##bd_arrow##ad_arrow#</g>" ],
    "arrow_special" : [ "", "", "", "", "", "", "", "", "",
			"stroke-dasharray=\"5,5\"[arrow_special:]",
			"stroke-dasharray=\"4,2,4\"[arrow_special:]"
		      ],
    "ab_arrow" : "<path d=\"M #ax# #ay# m 0 #ahh# L #ax# #aby# M #bx# #by# m 0 -#bhh# L #ax# #aby#\" #arrow_special# stroke=\"black\" stroke-width=\"3\"/><path d=\"M #bx# #by# m 0 -#bhh# m 0 -2 l 0 1\" marker-end=\"url(\\#triangle)\" stroke-width=\"3\" stroke=\"black\"#/>",
    "ba_arrow" : "<path d=\"M #bx# #by# m 0 -#bhh# L #bx# #aby# M #ax# #ay# m 0 #ahh# L #bx# #aby#\" #arrow_special# stroke=\"black\" stroke-width=\"3\"/><path d=\"M #ax# #ay# m 0 #ahh# m 0 2 l 0 -1\" marker-end=\"url(\\#triangle)\" stroke-width=\"3\" stroke=\"black\"/>",
    "ac_arrow" : "<path d=\"M #ax# #ay# m #ahw# 0 L #acx# #ay# M #cx# #cy# m -#chw# 0 L #acx# #ay#\" #arrow_special# stroke=\"black\" stroke-width=\"3\"/><path d=\"M #cx# #cy# m -#chw# 0 m -2 0 l 1 0\" marker-end=\"url(\\#triangle)\" stroke-width=\"3\" stroke=\"black\"/>",
    "ac_morphism" : "#morphismName#<g transform=\"translate(0 -#hh#) translate(#ahw# 0) translate(-#chw# 0)\">[textx:#acx#][texty:#ay#]#morphismTextElement#</g>[text:POP]",
    "ad_morphism" : "#morphismName#<g transform=\"translate(-#hw# #hh#)\">[textx:#adx#][texty:#ady#]#morphismTextElement#</g>[text:POP]",
    "cd_morphism" : "#morphismName#<g transform=\"translate(#hw# 0) translate(0 #chh#) translate(0 -#dhh#)\">[textx:#cx#][texty:#cdy#]#morphismTextElement#</g>[text:POP]",
    "morphismTextSize" : "20",
    "morphismTextElement" : "<text x=\"#textx#\" y=\"#texty#\" font-size=\"#morphismTextSize#\" text-anchor=\"middle\" fill=\"#textcolor#\" dominant-baseline=\"central\">#text#</text>",
    "ad_arrow" : "<g transform=\"translate(#ax# #ay#) scale(1.414 1.414) rotate(45 0 0)\"><path d=\"M 0 0 m #ahd# 0 L #diag_len# 0 M 0 0 m #diag_len# 0 m #diag_len# 0 m -#dhd# 0 L #diag_len# 0\" #arrow_special# stroke=\"black\" stroke-width=\"2.12\"/><path d=\"M #diag_len# 0 m #diag_len# 0 m -#dhd# 0 m -2 0 l 1 0\" marker-end=\"url(\\#triangle)\" stroke-width=\"2.12\" stroke=\"black\"/></g>",
    "bd_arrow" : "<path d=\"M #bx# #by# m #bhw# 0 L #bdx# #by# M #dx# #dy# m -#dhw# 0 L #bdx# #by#\" #arrow_special# stroke=\"black\" stroke-width=\"3\"/><path d=\"M #dx# #dy# m -#dhw# 0 m -2 0 l 1 0\" marker-end=\"url(\\#triangle)\" stroke-width=\"3\" stroke=\"black\"/>",
    "cd_arrow" : "<path d=\"M #cx# #cy# m 0 #chh# L #cx# #cdy# M #dx# #dy# m 0 -#dhh# L #cx# #cdy#\" #arrow_special# stroke=\"black\" stroke-width=\"3\"/><path d=\"M #dx# #dy# m 0 -#dhh# m 0 -2 l 0 1\" marker-end=\"url(\\#triangle)\" stroke-width=\"3\" stroke=\"black\"/>",
    "end" : "</svg>"
};

function newDiagram() {
    var g = tracery.createGrammar( grammar );
    var svg = g.flatten( "#origin#" );
    var div = document.getElementById( "diagram" );
    div.innerHTML = svg;
}

var shuffleGrammar = {
    "origin": "#initcounter##buildstack##element##element##element##element##element##element##element##element##element#",
    "element" : "#stack#[stack:POP]",
    "counter" : "[bs4:][bs16:][buildstack:]",
    "initcounter" : "[counter:][counter:][counter:][counter:][counter:][counter:][counter:][counter:][counter:]",
    "e1" : "[stack:1][e1:][counter:POP]",
    "e2" : "[stack:2][e2:][counter:POP]",
    "e3" : "[stack:3][e3:][counter:POP]",
    "e4" : "[stack:4][e4:][counter:POP]",
    "e5" : "[stack:5][e5:][counter:POP]",
    "e6" : "[stack:6][e6:][counter:POP]",
    "e7" : "[stack:7][e7:][counter:POP]",
    "e8" : "[stack:8][e8:][counter:POP]",
    "e9" : "[stack:9][e9:][counter:POP]",
    "buildstack" : "#bs16##bs16##bs16##bs16#",
    "bs16" : "#bs4##bs4##bs4##bs4#",
    "bs4" : "#bs1##bs1##bs1##bs1#",
    "bs1" : ".#elements##counter#",
    "elements" : [ "#e1#", "#e2#", "#e3#", "#e4#", "#e5#",
		   "#e6#", "#e7#", "#e8#", "#e9#" ]
};

function newShuffle() {
    var g = tracery.createGrammar( shuffleGrammar );
    var svg = g.flatten( "#origin#" );
    var div = document.getElementById( "diagram" );
    div.innerHTML = svg;
}
